import styled, { css, keyframes } from "styled-components";

const animationXFrom = keyframes`
    0%{
        background:transparent;
        transform: translateX(120%)
    }

    95%{
        transform: translateX(-20px )
    }

    100%{
        transform: translateX(0)
    }
`;

const animationXLeave = keyframes`
    from {
        transform:translateX(0)
    }
    to{
        background:transparent;
        transform: translateX(120%)
    }
`;

const ToastType = {
  sucess: css`
    color: green;
  `,
  error: css`
    color: red;
  `,

  info: css`
    color: yellow;
  `,
};

export const Container = styled.div`
  width: 260px;
  background: #343b41;
  border-radius: 4px;
  padding: 16px 30px 16px 16px;
  margin: 20px 22px 0;
  display: flex;
  position: relative;
  align-items: center;

  ${({ type }) => ToastType[type]}

  ${({ isLeave }) =>
    css`
      animation: ${isLeave ? animationXLeave : animationXFrom} 1s;
    `}
  animation-fill-mode:forwards;

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    strong {
      font-weight: 700;
      font-size: 14px;
      color: #f8f9fa;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19;
    border: 0;
    background: transparent;
    color: #868e96;
    cursor: pointer;
  }
`;
