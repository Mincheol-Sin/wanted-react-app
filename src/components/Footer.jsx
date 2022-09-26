import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <div class="footer-top">
        <div class="footer-top__navBar">
          <div class="footer__wanted-logo">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt="watned-logo"
            />
          </div>
          <ul class="footer-top__nav">
            <li>
              <a href="/" target="_blank">
                기업소개
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                이용약관
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                개인정보 처리방침
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                고객센터
              </a>
            </li>
          </ul>
        </div>
        <ul class="sns-link-nav">
          <li>
            <a href="https://www.instagram.com/wantedjobs.kr/" target="_blank">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100"
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100"
                alt="youtube"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/wantedkr" target="_blank">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100"
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://blog.naver.com/wantedlab" target="_blank">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100"
                alt="blog"
              />
            </a>
          </li>
          <li>
            <a href="https://pf.kakao.com/_XqCIxl" target="_blank">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100"
                alt="kakao"
              />
            </a>
          </li>
          <li>
            <a
              href="https://post.naver.com/my.nhn?memberNo=18284175"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100"
                alt="post"
              />
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/kr/app/id1074569961"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100"
                alt="apple"
              />
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted"
              target="_blank"
            >
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100"
                alt="google"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
          롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
          <br />
          유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외)
          서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118
          <br />© Wantedlab, Inc.
        </p>
        <div class="localSelect">
          <img
            class="countryIcon"
            src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
            alt="country flag KR"
          />
          <select>
            <option value="KR">한국 (한국어)</option>
            <option value="JP">日本 (日本語)</option>
            <option value="WW">Worldwide (English)</option>
            <option value="SG">Singapore (English)</option>
          </select>
        </div>
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  border-top: 1px solid #ececec;
  padding: 18px 0 65px;

  .footer-top {
    width: 90%;
    max-width: 1060px;
    margin: 0 auto 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-top__navBar {
    display: flex;
  }

  .footer__wanted-logo {
    margin-right: 35px;
  }

  .footer-top__nav {
    display: flex;
    align-items: center;
  }

  .footer-top__nav li a {
    font-size: 15px;
    color: #3a3a3a;
    font-weight: 500;
    padding: 15px;
    margin-right: 15px;
  }

  .footer-top .sns-link-nav {
    display: flex;
  }

  .sns-link-nav a {
    padding-left: 14px;
  }
  
  .footer-bottom {
    width: 90%;
    max-width: 1060px;
    margin: 0 auto 18px;
    border-top: 1px solid #ececec;
    padding-top: 25px;
    display: flex;
  }
  
  .footer-bottom p {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.6666666667em;
    color: #767676;
    width: calc(100% - 290px);
    margin-right: 40px;
  }
  
  .footer-bottom .localSelect {
    position: relative;
    width: 250px;
    height: 36px;
  }
  
  .footer-bottom .localSelect img {
    position: absolute;
    left: 15px;
    top: 32%;
    width: 24px;
    height: 17px;
    z-index: 1;
  }
  
  .footer-bottom .localSelect select {
    width: 100%;
    height: 40px;
    background: #f2f4f7;
    border-radius: 5px;
    border: none;
    color: #717171;
    padding: 0 45px;
    font-weight: 500;
    appearance: none;
`;

export default Footer;
