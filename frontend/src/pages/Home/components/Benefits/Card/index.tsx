import { Container } from "./styles";
import { ReactNode } from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export const Card = ({ description, children, title }: Props) => {
  return (
    <Tilt options={defaultOptions} style={{ height: "100%", width: "100%" }}>
      <Container>
        <div>
          {children}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Container>
    </Tilt>
  );
};
