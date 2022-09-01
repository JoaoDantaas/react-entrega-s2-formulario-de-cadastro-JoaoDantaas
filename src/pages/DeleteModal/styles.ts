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
  color: white;
`;

export const Form = styled.form`
  width: 295px;
  height: 273.41px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 369px;
    height: 342px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 39.97px;
  background: #343b41;
  border-radius: 3.19783px 3.19783px 0px 0px;
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
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 13px;

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
    cursor: not-allowed;
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
    height: 230px;

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

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ButtonSave = styled.button`
  width: 163.09px;
  height: 38.37px;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  font-size: 12.7913px;
  color: #ffffff;
  background: #ff577f;
  cursor: pointer;

  :hover {
    background: #59323f;
  }

  @media (min-width: 768px) {
    width: 204px;
    height: 48px;
    font-size: 16px;
  }
`;

export const ButtonDel = styled.button`
  width: 78.35px;
  height: 38.37px;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  font-size: 12.7913px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    background: #343b41;
    border: none;
  }
  @media (min-width: 768px) {
    width: 98px;
    height: 48px;
    font-size: 16px;
  }
`;
