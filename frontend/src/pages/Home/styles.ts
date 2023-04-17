import styled from "styled-components";

export const Container = styled.div`
  width: 1120px;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  & h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fec142;
  }

  & h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #0f2358;
    margin-bottom: 0.5rem;
  }

  & p {
    font-size: 1rem;
    font-weight: 400;
    color: #0f2358;
    margin-bottom: 1rem;
  }

  & button {
    width: 15rem;
    height: 2.5rem;
    background-color: #fec142;
    border: none;
    border-radius: 30px;
    padding-left: 1rem;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 24px 3px rgba(251, 161, 40, 0.42);

    & span {
      height: 100%;
      width: 2.5rem;
      color: #fec142;
      background-color: #987327;
      transition: all 0.3s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      background-color: #987327;

      & span {
        color: #fff;
      }
    }
  }
`;
