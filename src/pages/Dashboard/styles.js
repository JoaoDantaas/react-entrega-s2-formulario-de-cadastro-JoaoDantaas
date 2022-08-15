import styled from "styled-components";

export const Container = styled.div`
  background: #000000;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    width: 55.49px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: #f8f9fa;
    border: none;
  }
`;

export const Risco = styled.div`
  width: 100%;
  height: 1px;
  box-shadow: 0px 1px 0px 0px #212529;
  margin-top: 34px;
`;

export const Welcome = styled.div`
  width: 65%;

  h1 {
    margin-left: 12px;
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
    text-align: start;
    margin-left: 0;
  }

  h2 {
    font-weight: 400;
    font-size: 12px;
    color: #868e96;
    text-align: start;
  }

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-around;

    h1 {
      font-size: 18px;
      margin-left: 90px;
    }

    h2 {
      font-size: 12px;
      margin-right: 90px;
    }
  }
`;

export const Mensage = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 65%;

    h3 {
      font-weight: 700;
      font-size: 18px;
      color: #f8f9fa;
    }

    h4 {
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
    }
  }
`;
