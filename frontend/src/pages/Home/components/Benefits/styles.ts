import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1120px;
  margin: 5rem auto;

  & h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fec142;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 2rem;
  width: 100%;
  max-width: 1120px;
  margin-top: 5rem;
`;
