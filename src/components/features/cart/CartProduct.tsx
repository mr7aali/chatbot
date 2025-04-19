import { TrashIcon } from "@/icons/TrashIcon";
import { ICartProduct } from "@/types/CartProduct";
import { Tooltip } from "@nextui-org/react";

interface CartProductProps {
  product: ICartProduct;
  productPrice: number;
  onRemove?: () => void;
}

const CartProduct = ({ product, productPrice, onRemove }: CartProductProps) => {
  console.log(product.menuItem.image);
  return (
    <div className="sm:grid flex flex-col items-center  grid-cols-8 gap-4 border-b pt-2">
      <div className="col-span-2 mt-3 sm:mt-0">
        <div
          style={{
            backgroundImage: `url(${product.menuItem.image})`,
            borderRadius: "10%",
          }}
          className="bg-cover bg-center bg-no-repeat mb-4 w-[120px] h-[120px]"
        ></div>
      </div>
      <div className="col-span-3 px-4 ">
        <p className="font-semibold text-center sm:text-left">
          {product.menuItem.name}
        </p>
        {product.selectedSize && (
          <div className="text-sm text-gray-300 py-1">
            Size:{" "}
            <span className="">
              {product.selectedSize.name} + Tk
              {(product.selectedSize.price as number).toFixed(2)}
            </span>
          </div>
        )}
        {product.selectedExtras.length > 0 && (
          <div className="text-sm text-gray-300">
            {product.selectedExtras.map((extra, index) => (
              <div key={index}>
                {extra.name} + Tk {(extra.price as number).toFixed(2)}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="font-semibold">Quantity</p>
        <p>1</p>
      </div>
      <div className="text-right font-semibold">
        Tk {productPrice.toFixed(2)}
      </div>
      {!!onRemove && (
        <Tooltip content="Remove">
          <div className="ml-6 cursor-pointer pb-4 sm:pb-0" onClick={onRemove}>
            <TrashIcon className={"w-6"} />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default CartProduct;
