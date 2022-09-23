import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderBar>
      <HeaderContainer>
        <SubNav>
          <MenuBtn />
          <MainLogo to="/" />
        </SubNav>
        <MainNav>
          <li>
            <NavLink to="/jobsfeed">채용</NavLink>
          </li>
          <li>
            <NavLink to="/">이벤트</NavLink>
          </li>
          <li>
            <NavLink to="/">직군별 연봉</NavLink>
          </li>
          <li>
            <NavLink to="/">이력서</NavLink>
          </li>
          <li>
            <NavLink to="/">커뮤니티</NavLink>
          </li>
          <li>
            <NavLink to="/">프리랜서</NavLink>
          </li>
          <li>
            <NavLink to="/">AI 합격예측</NavLink>
          </li>
        </MainNav>
        <Aside>
          <AsideList>
            <SearchBtn>
              <SearchIcon />
            </SearchBtn>
          </AsideList>
          <AsideList>
            <SignUpBtn>회원가입/로그인</SignUpBtn>
          </AsideList>
          <AsideList>
            <Dashboard to="/" className="dashboard">
              기업 서비스
            </Dashboard>
          </AsideList>
        </Aside>
      </HeaderContainer>
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
`;

const HeaderContainer = styled.div`
  width: 90%;
  max-width: 1060px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
`;

const SubNav = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBtn = styled.button`
  width: 17px;
  height: 14px;
  margin-right: 12px;
  margin-top: 1px;
  background-image: url("/imgs/menu-btn.webp");
  background-size: cover;
`;

const MainLogo = styled(Link)`
  width: 84px;
  height: 25px;
  margin-bottom: 3px;
  background-image: url("/imgs/mainLogo.png");
  background-size: cover;
`;

const MainNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  padding: 15px;
  font-weight: 600;
`;

const Aside = styled.ul`
  display: flex;
  align-items: center;
`;

const AsideList = styled.li`
  padding: 0 10px;
`;

const SearchBtn = styled.button`
  padding: 0 10px
  width: 28px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center
`;

const SearchIcon = styled(FaSistrix)`
  width: 100%;
  height: 100%;
`;

const Dashboard = styled(Link)`
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

  &::before {
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;

// .header-nav .header-nav__subNav svg {
//   margin-top: 5px;
//   width: 18px;
//   height: 18px; }

const SignUpBtn = styled.button``;
export default Header;
