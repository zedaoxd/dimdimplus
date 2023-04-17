import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  border-bottom: 1px solid #bbb;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Figure = styled.figure`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  & img {
    width: 10rem;
  }

  & figcaption {
    font-size: 1.1rem;
    font-weight: 500;
    color: #0f2358;

    & h1 {
      font-size: 1.5rem;
      position: relative;

      & span {
        font-weight: 400;
        color: #fec142;

        & svg {
          position: absolute;
          top: -40px;
          right: -50px;
          font-size: 5rem;
        }
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: #fff;
  background: #fec142;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  border: 1px solid transparent;
  box-shadow: 0px 10px 24px 3px rgba(251, 161, 40, 0.42);
  transition: all 0.2s;

  &:hover {
    color: #fec142;
    border: 1px solid #fec142;
    background: #fff;
  }
`;

export const ButtonLogin = styled.button`
  font-size: 1rem;
  color: #bbb;
  background: transparent;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  border: 1px solid #bbb;
  box-shadow: 0px 10px 24px 3px rgba(251, 161, 40, 0.42);
  transition: all 0.2s;

  &:hover {
    color: #fff;
    border: 1px solid #fec142;
    background: #fec142;
  }
`;
