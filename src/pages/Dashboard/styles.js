import styled from "styled-components";

export const Reload = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;

  img {
    background-color: #000000;
  }
`;

export const Container = styled.div`
  background: #000000;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f9fa;
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
    cursor: pointer;
  }

  button:hover {
    background: #343b41;
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

// export const Mensage = styled.div`
//   display: none;

//   @media (min-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     width: 65%;

//     h3 {
//       font-weight: 700;
//       font-size: 18px;
//       color: #f8f9fa;
//     }

//     h4 {
//       font-weight: 400;
//       font-size: 16px;
//       color: #ffffff;
//     }
//   }
// `;

export const HeaderTech = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 16px;
    color: #f8f9fa;
  }

  button {
    width: 32.49px;
    height: 32px;
    border: none;
    background: #212529;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
  }

  button:hover {
    background: #343b41;
  }

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-around;

    h1 {
      font-size: 16px;
      margin-left: -20px;
    }

    button {
      margin-right: -20px;
    }
  }
`;

export const List = styled.ul`
  width: 296px;
  height: 416.37px;
  background: #212529;
  border-radius: 4px;
  overflow-y: scroll;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  ::-webkit-scrollbar {
    background: #212529;
    width: 2px;
  }

  h4 {
    width: 90%;
    text-align: center;
    font-weight: 700;
    font-size: 14.21px;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    width: 780px;
    height: 416px;
  }
`;

export const Tech = styled.li`
  width: 279px;
  height: 48.73px;
  background: #121214;
  border-radius: 4.06066px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 14.2123px;
    color: #f8f9fa;
    margin-left: 12px;
  }

  h3 {
    font-weight: 400;
    font-size: 12.182px;
    color: #868e96;
    margin-right: 18px;
  }

  :hover {
    background: #343b41;
  }

  @media (min-width: 768px) {
    width: 732px;
    height: 49px;

    h2 {
      font-size: 14.21px;
    }
  }
`;
