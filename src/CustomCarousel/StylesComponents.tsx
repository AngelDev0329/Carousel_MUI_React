import { styled } from "@mui/material";
import { css, keyframes } from "@emotion/react";

interface IContainer {
  margin?: string;
}

interface IContentHolder {
  speed: string;
  direction: "normal" | "reverse" | "alternate" | "alternate-reverse" | "initial" | "inherit";
}

const movementAnimationPrimary = keyframes`
  0% { transform: translateX(0);} 100% { transform: translateX(-100%); }
`;

const movementAnimationSecondary = keyframes`
  0% { transform: translateX(100%);}
  100% {transform: translateX(0);}
`;

const sharedContentStyles = css`
  display: flex;
  width: max-content;
`;

const Container = styled("div")<IContainer>`
  position: relative;
  width: 100%;
  height: max-content;
  overflow: hidden;
  "& > div > *": { margin: ${(props: IContainer) => (props.margin ? props.margin : 0)},
`;

const ContentHolder = styled("div")<IContentHolder>`
  ${sharedContentStyles}
  animation: ${movementAnimationPrimary} linear ${(props: IContentHolder) => props.speed} infinite;
  animation-direction: ${(props: IContentHolder) => props.direction};
`;

const DuplicateContentHolder = styled("div")<IContentHolder>`
  ${sharedContentStyles}
  position: absolute;
  top: 0;
  animation: ${movementAnimationSecondary} linear ${(props: IContentHolder) => props.speed} infinite;
  animation-direction: ${(props: IContentHolder) => props.direction};
`;

const ContentWrapper = styled("div")`
  display: block;
  width: max-content;
  height: max-content;
`;

export default {
  Container,
  ContentHolder,
  DuplicateContentHolder,
  ContentWrapper,
};
