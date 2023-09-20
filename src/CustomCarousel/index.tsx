import { useRef } from "react";

import Styled from "./StylesComponents";

interface CustomCarouselProps {
  children: JSX.Element[];
  speed: string;
  margin?: string;
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse" | "initial" | "inherit";
  pauseOnHover?: boolean;
}

export const CustomCarousel = ({ children, margin, speed = "15s", direction = "normal", pauseOnHover }: CustomCarouselProps) => {
  const primaryScrollerRef = useRef<HTMLInputElement>(null);
  const secondaryScrollerRef = useRef<HTMLInputElement>(null);

  const mouseEnterHandler = () => {
    if (pauseOnHover) {
      if (primaryScrollerRef.current) {
        primaryScrollerRef.current.style.animationPlayState = "paused";
        primaryScrollerRef.current.style.webkitAnimationPlayState = "paused";
      }
      if (secondaryScrollerRef.current) {
        secondaryScrollerRef.current.style.animationPlayState = "paused";
        secondaryScrollerRef.current.style.webkitAnimationPlayState = "paused";
      }
    }
  };

  const mouseLeaveHandler = () => {
    if (pauseOnHover) {
      if (primaryScrollerRef.current) {
        primaryScrollerRef.current.style.animationPlayState = "running";
        primaryScrollerRef.current.style.webkitAnimationPlayState = "running";
      }
      if (secondaryScrollerRef.current) {
        secondaryScrollerRef.current.style.animationPlayState = "running";
        secondaryScrollerRef.current.style.webkitAnimationPlayState = "running";
      }
    }
  };

  return (
    <Styled.Container margin={margin}>
      <Styled.ContentHolder ref={primaryScrollerRef} speed={speed} direction={direction}>
        {children.map((child, index) => (
          <Styled.ContentWrapper key={index} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            {child}
          </Styled.ContentWrapper>
        ))}
      </Styled.ContentHolder>
      <Styled.DuplicateContentHolder ref={secondaryScrollerRef} speed={speed} direction={direction}>
        {children.map((child, index) => (
          <Styled.ContentWrapper key={index} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            {child}
          </Styled.ContentWrapper>
        ))}
      </Styled.DuplicateContentHolder>
    </Styled.Container>
  );
};
