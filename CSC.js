import React from "react";
import styled from "styled-components";
import kakaoIcon from "../../images/kakao_btn.png";

const ScreenWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 700px;
  border: 1px solid #000000;
  padding: 40px 30px;
  background-color: #ffffff;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
// 섹션 스타일
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
// 제목 스타일
const SubTitle = styled.span`
  font-size: 20px;
  color: #666666;
  margin-bottom: 6px;
  font-weight: 400;
`;
// 중간 내용 스타일
const MainContent = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #000000;
  margin: 0 0 6px 0;
`;
// 시간 정보 스타일
const TimeInfo = styled.span`
  font-size: 20px;
  color: #666666;
  font-weight: 400;
`;
// 카카오 버튼 구현
const KakaoButton = styled.a`
  position: absolute;
  cursor: pointer;
  padding-top: 30px;
  right: 320px;
  transition:
    transform 0.1s ease,
    opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.96);
  }

  img {
    width: 70px;
    height: auto;
    display: block;
  }
`;

const CustomerCenter = () => {
  return (
    <ScreenWrapper>
      <Container>
        <Section>
          <SubTitle>전화상담</SubTitle>
          <MainContent>02 - 0000 - 0000</MainContent>
          <TimeInfo>오전 9시 ~ 오후 6시</TimeInfo>
        </Section>

        <Section>
          <SubTitle>카카오톡</SubTitle>
          <MainContent>1:1 문의 상담</MainContent>
          <TimeInfo style={{ marginTop: "8px" }}>오전 9시 ~ 오후 6시</TimeInfo>
          <KakaoButton href="https://pf.kakao.com">
            <img src={kakaoIcon} alt="카카오톡 1:1 문의 상담" />
          </KakaoButton>
        </Section>
      </Container>
    </ScreenWrapper>
  );
};

export default CustomerCenter;
