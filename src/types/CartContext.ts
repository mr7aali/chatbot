import { Dispatch, SetStateAction } from "react"
import MenuItem from "./MenuItem"
import MenuItemAddOn from "./MenuItemAddOn"
import { ICartProduct } from "./CartProduct"

export type ICartContext = {
  cartProducts: ICartProduct[],
  setCartProducts: Dispatch<SetStateAction<ICartProduct[]>>,
  addToCart: (menuItem: MenuItem, selectedSize: MenuItemAddOn | null, selectedExtras: MenuItemAddOn[]) => void,
  clearCart: () => void,
  removeCartProduct: (index: number) => void
}

