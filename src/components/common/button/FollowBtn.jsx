import styled from "styled-components";

const FollowBtn = () => {
  return <Button type="button">팔로우</Button>;
};

const Button = styled.button`
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  border: 1px solid #e1e2e3;
  border-radius: 25px;
  padding: 12px 25.5px 11px;
  color: #36f;
  background-color: #fff;
`;

export default FollowBtn;
