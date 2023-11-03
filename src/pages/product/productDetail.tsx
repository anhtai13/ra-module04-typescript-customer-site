import { Button, Card, Form, Badge, Stack } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/actions/customerCart.action";

export interface ProductDetailProps {
  product: {
    image: string; // Cập nhật kiểu dữ liệu ở đây
    name: string;
    unit_price: number;
    description: string;
  };
}

function ProductDetail({ product }: ProductDetailProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<number>(1);

  // const loginCustomer = useSelector(
  //   (state: any) => state.customerAuthReducer.isAuthenticate
  // );

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAdd = () => {
    // if (loginCustomer == false) {
    //   navigate("/login");
    // } else {
    dispatch(
      addToCart({
        ...product,
        quantity: quantity,
      })
    );
    // }
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Badge bg="secondary">{product.unit_price.toLocaleString()} đ</Badge>
          <Card.Text>{product.description}</Card.Text>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleChangeQuantity}
              min={1}
            />
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetail;
