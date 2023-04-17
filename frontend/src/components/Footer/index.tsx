import {
  BottomSide,
  Content,
  FooterContainer,
  NavFooter,
  SocialMedia,
  TopSide,
} from "./styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <TopSide>
          <figure>
            <img src="/img/logo.png" alt="DimDimPlus" />
          </figure>
          <NavFooter>
            <ul>
              <li>
                <Link to="/">Quem somos</Link>
              </li>
              <li>
                <Link to="/">Termos de serviço</Link>
              </li>
              <li>
                <button>Começe agora</button>
              </li>
            </ul>
          </NavFooter>
          <SocialMedia>
            <li>
              <Link to="/">
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <TwitterIcon />
              </Link>
            </li>
          </SocialMedia>
        </TopSide>

        <BottomSide>
          DimDimPlus &copy; 2023 Tecnologia Ltda. CNPJ 00.000.000/0000-00
        </BottomSide>
      </Content>
    </FooterContainer>
  );
};
