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

export const Header = styled.div`
  width: 295.83px;
  display: flex;
  justify-content: space-between;

  button {
    width: 79.54px;
    height: 31.95px;
    background: #212529;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 9.59437px;
    text-align: center;
    color: #f8f9fa;
  }

  @media (min-width: 768px) {
    width: 370px;

    button {
      width: 67.49px;
      height: 40.11px;
      font-size: 12px;
    }
  }
`;

export const Form = styled.form`
  width: 295.83px;
  height: 709.96px;
  background-color: #212529;
  color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;

  h1 {
    font-weight: 700;
    font-size: 14.3916px;
    color: #f8f9fa;
    text-align: center;
  }

  h2 {
    font-weight: 400;
    font-size: 9.59437px;
    color: #868e96;
    text-align: center;
  }

  h3 {
    font-weight: 600;
    font-size: 9.62602px;
    color: #868e96;
    margin: 0;
  }

  button {
    width: 260.65px;
    height: 38.38px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12.7925px;
    color: #ffffff;
  }

  button:hover {
    background: #4a1e2c;
  }

  @media (min-width: 768px) {
    width: 370px;
    height: 725px;
    justify-content: space-evenly;
    margin-bottom: 20px;

    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 12px;
    }

    h3 {
      font-size: 12px;
    }

    button {
      width: 326px;
      height: 48px;
      margin-top: 20px;
    }
  }
`;

export const Divinput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 9.73988px;
    color: #f8f9fa;
  }

  input {
    width: 263.79px;
    height: 38.38px;
    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    font-weight: 400;
    font-size: 12.9865px;
    color: #868e96;
  }

  h3 {
    font-weight: 400;
    font-size: 9.59437px;
    color: #868e96;
    text-align: center;
  }

  select {
    width: 263.79px;
    height: 38.38px;
    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    font-weight: 400;
    font-size: 12.9865px;
    color: #868e96;
  }

  @media (min-width: 768px) {
    label {
      font-size: 12.182px;
    }

    input {
      width: 329.93px;
      height: 48px;
      font-size: 16.2426px;
    }

    h3 {
      font-size: 12px;
    }

    select {
      width: 329.93px;
      height: 48px;
    }
  }
`;
