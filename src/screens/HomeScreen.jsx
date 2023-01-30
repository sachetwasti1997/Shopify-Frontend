import React from "react";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import Product from "../components/Product";
import { getAllProducts } from "../actions/productsActions";

const HomeScreen = () => {

  const dispatch = useDispatch()
  // console.log(useSelector((state) => state.productList));
  const {products, isLoading, errorRes} = useSelector((state) => state.productList)

  console.log(products, isLoading, errorRes);

  useEffect(() => {
    if (products.length === 0) dispatch(getAllProducts())
  }, [dispatch, products]);

  const display =products ? (
    <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
    </Row>
  ) : null;

  return (
    <div>
      <h1>Latest Products</h1>
      {isLoading ? <h2>Loading...</h2>
        : errorRes ? <h3>{errorRes}</h3>
        : display
      }
      
    </div>
  );
};

export default HomeScreen;
