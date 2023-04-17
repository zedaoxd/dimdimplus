import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 2rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border-left: 1px solid white;
  border-top: 1px solid white;
  box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.2);

  & h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #ff9000;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 0 2rem;

  & > input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: none;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
    }
  }

  & > button {
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border: none;
    border-radius: 0.5rem;
    background: #ff9000;
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  & > div {
    margin-top: 1rem;
  }
`;
