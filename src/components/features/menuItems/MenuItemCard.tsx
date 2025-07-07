import MenuItem from "@/types/MenuItem";
import { useContext, useState } from "react";
import { CartContext } from "../../../util/ContextProvider";
import MenuItemAddOn from "@/types/MenuItemAddOn";
import MenuItemPopUp from "./MenuItemPopUp";
import { useSession } from "next-auth/react";
import { Button, Link } from "@nextui-org/react";
import { useProfile } from "@/components/hooks/useProfile";
import Image from "next/image";

interface MenuItemCardProps {
  menuItem: MenuItem;
}

const MenuItemCard = ({ menuItem }: MenuItemCardProps) => {
  const { data: session } = useSession();
  const { data: profileData } = useProfile();
  const { addToCart } = useContext(CartContext);
  const [showPopUp, setShowPopUp] = useState(false);
  const hasSizesOrExtras =
    menuItem.sizes.length > 0 || menuItem.extraIngredientsPrices.length > 0;

  function handleAddToCartClick() {
    const hasOptions =
      menuItem.sizes.length > 0 || menuItem.extraIngredientsPrices.length > 0;
    if (hasOptions) {
      setShowPopUp(true);
    } else {
      addToCart(menuItem, null, []);
    }
  }

  async function handlePopUpAddToCart(
    item: MenuItem,
    selectedSize: MenuItemAddOn,
    selectedExtras: MenuItemAddOn[]
  ): Promise<void> {
    addToCart(item, selectedSize, selectedExtras);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setShowPopUp(false);
  }

  return (
    <>
      <div className="relative flex flex-col items-center justify-between gap-4 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 px-4 pt-3 pb-4 w-full max-w-sm mx-auto group hover:scale-[1.03] border border-primary/20 ">
        <div className="relative mb-4 w-full h-48 flex items-center justify-center overflow-hidden rounded-xl shadow-md bg-dark/90">
          <Image
            src={menuItem.image}
            alt={menuItem.name}
            // fill
            width={400}
            height={400}
            className="object-cover w-[400px] h-[400px] transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 400px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-primary/20 pointer-events-none transition-opacity duration-300 group-hover:opacity-80" />
        </div>
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <h3 className="text-2xl font-bold text-primary drop-shadow-md">
            {menuItem.name}
          </h3>
          <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed min-h-[60px]">
            {menuItem.description}
          </p>
          <div className="flex flex-col gap-4 w-full">
            <p className="text-primary font-semibold text-xl">
              {hasSizesOrExtras && (
                <span className="text-gray-400 text-base">From: </span>
              )}
              {(menuItem.basePrice as number).toFixed(2)}{" "}
              <span className="text-sm">TK</span>
            </p>
            {session ? (
              <>
                {profileData !== null && profileData.isAdmin !== true && (
                  <button
                    className="bg-gradient-to-r from-primary to-primary/80 text-dark border border-primary/50 rounded-full px-8 py-2.5 font-semibold shadow-lg hover:shadow-xl hover:from-primary/80 hover:to-primary hover:scale-105 transition-all duration-300"
                    onClick={handleAddToCartClick}
                  >
                    Add to Cart
                  </button>
                )}
              </>
            ) : (
              <Button
                as={Link}
                href="/login"
                radius="full"
                size="md"
                className="bg-gradient-to-r from-primary to-primary/80 text-dark border border-primary/50 rounded-full px-8 py-2.5 font-semibold shadow-lg hover:shadow-xl hover:from-primary/80 hover:to-primary hover:scale-105 transition-all duration-300"
              >
                Order Now
              </Button>
            )}
          </div>
        </div>
      </div>
      {showPopUp && (
        <MenuItemPopUp
          menuItem={menuItem}
          setShowPopUp={setShowPopUp}
          onAdd={(
            item: MenuItem,
            selectedSize: MenuItemAddOn,
            selectedExtras: MenuItemAddOn[]
          ) => handlePopUpAddToCart(item, selectedSize, selectedExtras)}
        />
      )}
    </>
  );
};

export default MenuItemCard;
