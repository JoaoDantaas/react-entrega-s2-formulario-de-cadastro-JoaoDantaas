import styled from "styled-components";

export const Container = styled.div`
  background: #000000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Form = styled.form`
  width: 296px;
  height: 402.69px;
  background-color: #212529;
  color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  h1 {
    font-weight: 700;
    font-size: 14.439px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 17px;
  }

  label {
    font-weight: 400;
    font-size: 9.772px;
  }

  input {
    margin-top: 17px;
    width: 264.66px;
    height: 38.5px;
    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
  }

  h2 {
    font-weight: 600;
    font-size: 9.62602px;
    color: #868e96;
  }

  h3 {
    font-weight: 600;
    font-size: 9.62602px;
    color: #868e96;
  }

  @media (min-width: 768px) {
    width: 369px;
    height: 502px;

    h1 {
      font-size: 18px;
    }

    label {
      font-size: 12.182px;
    }

    input {
      width: 329.93px;
      height: 48px;
    }

    h2 {
      font-size: 12px;
    }
    h3 {
      font-size: 12px;
    }
  }
`;

export const ButtonJoin = styled.button`
  width: 259.9px;
  height: 38.5px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 324px;
    height: 48px;
  }
`;

export const ButtonRegister = styled.button`
  width: 259.9px;
  height: 38.5px;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 324px;
    height: 48px;
  }
`;
