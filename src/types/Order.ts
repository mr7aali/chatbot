
import { ICartProduct } from "./CartProduct";

type Order = {
  _id?: string,
  userEmail: string,
  phone: string,
  streetAddress: string,
  city: string,
  state: string,
  country: string,
  postalCode: string,
  cartProducts: ICartProduct[],
  paid: boolean,
  createdAt: string,
}

export default Order;