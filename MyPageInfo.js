import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AccountInfoPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userId: "",
    email: "",
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo({
            userId: data.userId,
            email: data.email,
            name: data.name,
            phone: data.phone,
          });
        }
      } catch (error) {
        console.error("유저 정보를 불러오는 데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <Container>로딩 중...</Container>;
  }

  return (
    <Container>
      <Box>
        {/* 아이디 */}
        <Row>
          <Label>아이디</Label>
          <Value>{userInfo.userId}</Value>
        </Row>

        {/* 이메일 */}
        <Row>
          <Label>이메일</Label>
          <Value>{userInfo.email}</Value>
        </Row>

        {/* 이름 */}
        <Row>
          <Label>이름</Label>
          <ValueGroup>
            <span>{userInfo.name}</span>
            <ActionButton onClick={() => alert("이름 변경 클릭")}>
              변경
            </ActionButton>
          </ValueGroup>
        </Row>

        {/* 휴대폰 번호 */}
        <Row>
          <Label>휴대폰 번호</Label>
          <ValueGroup>
            <span>{userInfo.phone}</span>
            <ActionButton onClick={() => alert("휴대폰 번호 변경 클릭")}>
              변경
            </ActionButton>
          </ValueGroup>
        </Row>

        {/* 배송지 관리 */}
        <Row clickable onClick={() => navigate("/shipping")}>
          <Label>배송지 관리</Label>
          <ArrowButton>&gt;</ArrowButton>
        </Row>

        {/* 본인 인증 */}
        <Row clickable onClick={() => navigate("/identity-verification")}>
          <Label>본인 인증</Label>
          <ArrowButton>&gt;</ArrowButton>
        </Row>

        {/* 결제수단 관리 */}
        <Row clickable onClick={() => navigate("/payment")}>
          <Label>결제수단 관리</Label>
          <ArrowButton>&gt;</ArrowButton>
        </Row>
      </Box>
    </Container>
  );
};

export default AccountInfoPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  /* 화면 전체 높이를 쓰도록 flex 팽창 적용 */
  flex: 1;
  min-height: 80vh;
  padding: 30px 40px;
  box-sizing: border-box;
`;

const Box = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 28px 36px;
  border-bottom: 1px solid #eee;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: ${(props) =>
      props.clickable ? "#f8f9fa" : "transparent"};
  }
`;

const Label = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: #333;
`;

const Value = styled.span`
  font-size: 16px;
  color: #555;
`;

const ValueGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  color: #555;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #666;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  padding: 0;

  &:hover {
    color: #000;
  }
`;

const ArrowButton = styled.span`
  font-size: 20px;
  color: #888;
  font-weight: bold;
`;
