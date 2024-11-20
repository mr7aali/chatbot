import MenuItem from "./MenuItem"
import MenuItemAddOn from "./MenuItemAddOn"

export type ICartProduct = {
  _id?: string,
  menuItem: MenuItem,
  selectedSize: MenuItemAddOn | null,
  selectedExtras: MenuItemAddOn[]
}

// export default CartProduct;