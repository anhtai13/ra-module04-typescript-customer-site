export default interface createOrderRequest {
  product_id?: number;
  sku?: string;
  name?: string;
  unit_price?: number;
  quantity?: number;
  sub_total_price?: number;
}
