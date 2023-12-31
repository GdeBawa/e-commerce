import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
// import "./listview.css";
import styled from "styled-components";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: black;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
    font-weight: 700;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
    color: var(--clr-grey-2);
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
    margin-left: 0;
    width: fit-content;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
