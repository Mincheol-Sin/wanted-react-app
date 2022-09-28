import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <HeaderBar>
      <div className="header-container">
        <div className="subNav">
          <button type="button" className="menu-btn"></button>
          <Link to="/" className="main-logo" />
        </div>
        <ul className="mainNav">
          <li>
            <Link to="/jobsfeed" className="mainNav__item">
              채용
            </Link>
          </li>
          <li>
            <Link to="/" className="mainNav__item">
              이벤트
            </Link>
          </li>
          <li>
            <Link to="/" className="mainNav__item">
              직군별 연봉
            </Link>
          </li>
          <li>
            <Link to="/" className="mainNav__item">
              이력서
            </Link>
          </li>
          <li>
            <Link to="/" className="mainNav__item">
              커뮤니티
            </Link>
          </li>
          <li>
            <Link to="/" className="mainNav__item">
              프리랜서
            </Link>
          </li>
          <li>
            <Link to="/" className="mainNav__item">
              AI 합격예측
            </Link>
          </li>
        </ul>
        <ul className="aside">
          <li>
            <button type="button" className="search-btn">
              <IoSearchOutline />
            </button>
          </li>
          <li>
            <button type="button">회원가입/로그인</button>
          </li>
          <li>
            <a href="/" className="dashboard-btn">
              기업 서비스
            </a>
          </li>
        </ul>
      </div>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #e1e2e3;
  z-index: 999;
  background-color: #fff;

  .header-container {
    width: 90%;
    max-width: 1060px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
  }

  .subNav {
    display: flex;
    align-items: center;
  }

  .subNav .menu-btn {
    width: 17px;
    height: 14px;
    margin-right: 12px;
    margin-top: 1px;
    background-image: url("/imgs/menu-btn.webp");
    background-size: cover;
  }

  .subNav .main-logo {
    width: 84px;
    height: 25px;
    margin-bottom: 3px;
    background-image: url("/imgs/mainLogo.png");
    background-size: cover;
  }

  .mainNav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mainNav__item {
    padding: 15px;
    font-weight: 600;
  }

  .aside {
    display: flex;
  }

  .aside li {
    padding: 0 10px;
    display: flex;

    :last-child::before {
      display: block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin: auto 10px;
  }

  .search-btn svg {
    width: 28px;
    height: 18px;
    position: relative;
    top: 2px;
  }

  .dashboard-btn {
    display: flex;
    font-size: 13px;
    border: 1px solid #e1e2e3;
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
    color: #666;
    padding: 0 10px;
    margin-left: 15px;
    font-weight: 400;
  }
`;

export default Header;
