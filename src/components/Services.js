import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Produkt custom <br /> sesuai keinginan kamu
          </h3>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: #fd7f32;
  }
  padding: 5rem 0;

  background: #ead9eb;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: #000000;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: white;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: #000000;
      text-transform: none;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
/* CALL array services from constant.js */
