"use client";
import MenuItem from "@/types/MenuItem";
import { Button, Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";

interface HomeMenuItemCardProps {
  menuItem: MenuItem;
  index: number;
}

const TextCard = ({
  menuItem,
  hasSizesOrExtras,
  margin,
}: {
  menuItem: MenuItem;
  margin: "top" | "bottom";
  hasSizesOrExtras: boolean;
}) => {
  const { data: session } = useSession();
  return (
    <div
      className={`${
        margin === "top" ? "mt-2" : margin === "bottom" ? "mb-2" : ""
      } flex items-center  hover:m-0 backdrop-blur-sm bg-white/10  ml-2 mr-2  shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-4 p-6 text-end">
        <h3 className="text-xl font-semibold text-primary">{menuItem.name}</h3>
        <p className="text-gray-400 line-clamp-3 text-sm">
          {menuItem.description}
        </p>
        <div className="flex flex-col 2xl:flex-row gap-4 justify-end items-center">
          <p className="text-primary font-medium">
            {hasSizesOrExtras && <span className="text-gray-400">From: </span>}
            Tk {(menuItem.basePrice as number).toFixed(2)}
          </p>
          <Button
            as={Link}
            href={session ? "/menu" : "/login"}
            radius="sm"
            size="sm"
            className="bg-gradient-to-r from-primary to-primary/80 text-dark border border-primary/50 hover:from-primary/80 hover:to-primary hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const HomeMenuItemCard = ({ menuItem, index }: HomeMenuItemCardProps) => {
  const hasSizesOrExtras =
    menuItem.sizes.length > 0 || menuItem.extraIngredientsPrices.length > 0;

  if (index % 6 < 3) {
    return (
      <div className="grid grid-cols-2 ">
        <div
          style={{ backgroundImage: `url(${menuItem.image})` }}
          className="bg-cover bg-center bg-no-repeat"
        ></div>

        <TextCard
          menuItem={menuItem}
          hasSizesOrExtras={hasSizesOrExtras}
          margin="bottom"
        />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 ">
        <TextCard
          menuItem={menuItem}
          hasSizesOrExtras={hasSizesOrExtras}
          margin="top"
        />
        <div
          style={{ backgroundImage: `url(${menuItem.image})` }}
          className="bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
    );
  }
};

export default HomeMenuItemCard;
