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
      <div className="relative flex flex-col items-center justify-between gap-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 w-full max-w-xs mx-auto group hover:scale-105 transition-transform duration-200 border border-primary/10">
        <div className="relative mb-4 w-full h-36 flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-dark/80">
          <Image
            src={menuItem.image}
            alt={menuItem.name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 600px) 100vw, 400px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-primary/10 pointer-events-none" />
        </div>
        <div className="flex flex-col gap-3 items-center text-center w-full">
          <h3 className="text-xl font-semibold text-primary drop-shadow-sm mb-1">
            {menuItem.name}
          </h3>
          <p className="text-gray-400 line-clamp-3 text-sm mb-2 min-h-[48px]">
            {menuItem.description}
          </p>
          <div className="flex flex-col gap-3 w-full">
            <p className="text-primary font-medium text-lg">
              {hasSizesOrExtras && (
                <span className="text-gray-400 text-base">From: </span>
              )}
              {(menuItem.basePrice as number).toFixed(2)}{" "}
              <span className="text-xs">TK</span>
            </p>
            {session ? (
              <>
                {profileData !== null && profileData.isAdmin !== true && (
                  <button
                    className="border-2 border-primary bg-dark/80 hover:bg-primary hover:text-dark rounded-full transition-all px-6 py-2 font-semibold shadow-md hover:scale-105 duration-200"
                    onClick={handleAddToCartClick}
                  >
                    Add to cart
                  </button>
                )}
              </>
            ) : (
              <Button
                as={Link}
                href="/login"
                radius="full"
                size="md"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark font-semibold rounded-full px-6 py-2 shadow-md hover:scale-105 duration-200"
              >
                Order
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
