import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import ProductDetail from "./productDetail";
import PaginationComponent from "../../components/table/PaginationComponent";
import productApi from "../../apis/product/product.api";

interface Product {
  product_id: number;
  sku: string;
  name: string;
  category: number;
  description: string;
  unit_price: number;
  created_at: string;
  updated_at: string;
}

const getRows = (products: any) => {
  let rows = [];
  let row = [];

  for (const product of products) {
    row.push(product);

    if (row.length === 3) {
      rows.push(row);
      row = [];
    }
  }

  if (row.length !== 0) {
    rows.push(row);
  }
  return rows;
};

function ProductList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const [keyword, setKeyword] = useState<string | undefined>("");
  const [page, setPage] = useState<number>(1);

  const rows = getRows(products);

  const fetchProducts = () => {
    productApi
      .searchProducts({
        name: keyword,
        page: page,
        limit: 9,
      })
      .then((data) => {
        setProducts(data.records);
        setTotal(data.total);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert(error.response.statusText);
          navigate("/login");
        } else {
          alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        }
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [keyword, page]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setKeyword(searchInputValue);
  };

  return (
    <div className="text-center mt-3">
      <Form className="row m-1 mb-3" onSubmit={handleSearch}>
        <div className="col-8">
          <Form.Control
            type="text"
            value={searchInputValue}
            onChange={(event) => setSearchInputValue(event.target.value)}
            placeholder="Nhập từ khóa"
          />
        </div>
        <div className="col-4">
          <Button type="submit" variant="info mx-1">
            Tìm kiếm
          </Button>
        </div>
      </Form>

      <div>
        {rows.map((row:any, index:number) => {
          return (
            <Row key={index}>
              {row.map((product: any, index: number) => {
                return (
                  <Col key={index}>
                    <ProductDetail product={product} />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </div>
      <PaginationComponent total={total} setPage={setPage} />
    </div>
  );
}

export default ProductList;
