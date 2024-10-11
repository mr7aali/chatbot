import MenuItemAddOn from "./MenuItemAddOn";

type MenuItem = {
  _id?: string;
  name: string;
  image: string;
  description: string;
  category: string;
  basePrice: string | number;
  
  sizes: MenuItemAddOn[];
  extraIngredientsPrices: MenuItemAddOn[];
  FoodCatagory:string;
}

export default MenuItem;