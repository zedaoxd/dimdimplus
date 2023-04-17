import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 12rem;
  background-color: #fec142;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TopSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  & > figure {
    & > img {
      width: 10rem;
    }
  }
`;

export const BottomSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 20rem;

  & > li > a {
    color: #fff;

    & svg {
      font-size: 3rem;
    }
  }
`;

export const NavFooter = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    width: 100%;
    padding: 0 2rem;

    & > li {
      & > a {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.2s;
      }

      & button {
        background: #fff;
        border: 0;
        color: #fec142;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        font-weight: 500;
        border: 1px solid transparent;
        transition: all 0.2s;

        &:hover {
          border: 1px solid #fff;
          background-color: #fec142;
          color: #fff;
        }
      }
    }
  }
`;
