import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  position: relative;
  cursor: pointer;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & svg {
      font-size: 3rem;
      color: #fec14277;
    }

    & h3 {
      font-size: 1.2rem;
      font-weight: 600;
      background: linear-gradient(to right, #ffa000, #ff8010);
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 1rem;
    }

    & p {
      font-size: 1rem;
      font-weight: 400;
      color: #0f2358;
      margin-top: 1rem;
    }
  }
`;
