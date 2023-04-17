import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 71vh;
  width: 1120px;
  margin: 0 auto;

  & > h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #00000030;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    position: relative;

    & > svg {
      font-size: 4rem;
      position: absolute;
      right: -2.5rem;
      top: -2rem;
    }
  }
`;
