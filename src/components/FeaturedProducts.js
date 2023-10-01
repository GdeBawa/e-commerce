import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import styled from "styled-components";
// import styles from "./featured.css";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  //use loading component, while fetch data
  if (loading) {
    return <Loading />;
  }

  //use error component, if error thrown
  if (error) {
    return <Error />;
  }

  //return featured products
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>produk pilihan</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        semua produk
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fd7f32;
  .featured {
    background: transparent;
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  h2 {
    line-height: normal;
    text-transform: capitalize;
  }

  .underline {
    margin-top: 5px;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 3px;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
