import React from "react";
import styled from "styled-components";

const LineBanner = (props) => {
  return (
    <Banner>
      <a href="/">
        <span>{props.title}</span>
        {props.arrow === "true" ? (
          <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        ) : null}
      </a>
    </Banner>
  );
};

const Banner = styled.div`
  width: 90%;
  max-width: 1060px;
  text-align: center;
  margin: 0 auto;
  padding: 21px 30px;
  ont-size: 17px;
  border-radius: 38.5px;
  background-image: linear-gradient(
    90deg,
    #01a9fe -12%,
    #2f5fef 37%,
    #046afe 72%,
    #00d2dd 110%
  );
  font-size: 17px;
  font-weight: 700;
  color: #fff;

  svg {
    width: 1em;
    height: 1em;
    position: relative;
    top: 2px;
    left: 2px;
    fill: currentColor;
  }
`;

export default LineBanner;
