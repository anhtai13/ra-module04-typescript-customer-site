import ICartItem from "./ICartItem";

export default interface IListCartItem extends ICartItem {
  cart: ICartItem[];
}
