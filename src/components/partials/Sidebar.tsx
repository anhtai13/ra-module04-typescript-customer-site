import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductList from "../../pages/product/productList";

function Sidebar() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block caroselImg"
            src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460984/item/vngoods_68_460984.jpg?width=750"
            alt="First slide"
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              objectPosition: "100% 50%",
            }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block caroselImg"
            src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455365/item/vngoods_63_455365.jpg?width=750"
            alt="Second slide"
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              objectPosition: "100% 50%",
            }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block caroselImg "
            width={"100%"}
            src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/427917/item/vngoods_07_427917.jpg?width=750"
            alt="Third slide"
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block caroselImg "
            src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455365/item/vngoods_63_455365.jpg?width=750"
            alt="Fourth slide"
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              objectPosition: "100% 50%",
            }}
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block caroselImg "
            src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/422992/item/vngoods_56_422992.jpg?width=750"
            alt="Fifth slide"
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              objectPosition: "100% 50%",
            }}
          />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
          <Carousel.Item>
            <img
              className="d-block caroselImg "
              src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/456779/item/vngoods_06_456779.jpg?width=750"
              alt="Sixth slide"
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
                objectPosition: "100% 50%",
              }}
            />
            <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel.Item>
      </Carousel>
      <div className="bg-body-tertiary" style={{ marginBottom: "10px" }}>
        <ProductList />
      </div>
    </div>
  );
}

export default Sidebar;
