import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const LineBanner = () => {
  return (
    <Container>
      <ShowPosition to="/">
        <SearchIcon />
        채용 중인 포지션 보러가기
      </ShowPosition>
    </Container>
  );
};

const Container = styled.div`
  margin: 60px auto;
`;

const SearchIcon = styled(BsSearch)`
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;

const ShowPosition = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    90deg,
    #01a9fe -12%,
    #2f5fef 37%,
    #046afe 72%,
    #00d2dd 110%
  );
  border-radius: 38.5px;
  max-width: 1060px;
  margin: auto auto;
  padding: 21px 30px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;

export default LineBanner;
