import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromOrder } from "../../store/actions/customerCart.action";

function OrderList() {
  const order = useSelector((state: any) => state.customerCartReducer.order);

  const dispatch = useDispatch();

  const handleDeleteOrder = (id: string) => {
    const isDeleteOrder = window.confirm(
      "Bạn có chắc chắn muốn hủy đơn hàng này không ?"
    );
    if (isDeleteOrder) {
      dispatch(deleteFromOrder(id));
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Ngày đặt hàng</th>
            <th>Tổng đơn hàng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {order.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>${item.total} đ</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteOrder(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default OrderList;
