import styled from "styled-components";

export const Blur = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 296px;
  height: 350.34px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  button {
    width: 264.66px;
    height: 38.5px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-weight: 500;
    font-size: 12.8347px;
    color: #ffffff;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(255, 87, 127, 0.5);
    border: none;
  }

  @media (min-width: 768px) {
    width: 369px;
    height: 342px;

    button {
      width: 324px;
      height: 48px;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 50.11px;
  background: #343b41;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #f8f9fa;
    font-weight: 700;
    font-size: 11.2304px;
    margin-left: 16px;
  }

  button {
    width: 20px;
    height: 17px;
    color: #868e96;
    background-color: transparent;
    border: none;
    margin-right: 9px;
    cursor: pointer;
  }

  button:hover {
    color: #e83f5b;
    background-color: transparent;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 14px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 22px;

  h2 {
    font-weight: 400;
    font-size: 9.772px;
    color: #f8f9fa;
  }

  h3 {
    font-weight: 400;
    font-size: 9.772px;
    color: #868e96;
  }

  input {
    width: 264.66px;
    height: 38.5px;
    background: #343b41;
    border: none;
    border-radius: 3.20867px;
    font-weight: 400;
    font-size: 13.0293px;
    color: #868e96;
  }

  input:focus {
    border: 0.9772px solid #f8f9fa;
    color: #f8f9fa;
  }

  select {
    width: 264.66px;
    height: 38.5px;
    background: #343b41;
    border: none;
    border-radius: 3.20867px;
    font-weight: 400;
    font-size: 13.0293px;
    color: #868e96;
    cursor: pointer;
  }

  select:focus {
    border: 0.9772px solid #f8f9fa;
    color: #f8f9fa;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 12.182px;
    }

    h3 {
      font-size: 12.182px;
    }

    input {
      width: 329.93px;
      height: 48px;
    }

    select {
      width: 329.93px;
      height: 48px;
    }
  }
`;
