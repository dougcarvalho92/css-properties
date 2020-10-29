import styled from "styled-components";

interface boxRadiusProps {
  borderTop: number;
  borderBottom: number;
  borderLeft: number;
  borderRight: number;
  shadowColor: string;
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  boxSize: number;
}

export const BoxRadius = styled.div.attrs((props: boxRadiusProps) => ({
  borderTop: props.borderTop,
  borderBottom: props.borderBottom,
  borderLeft: props.borderLeft,
  borderRight: props.borderRight,
  shadowColor: props.shadowColor,
  offsetX: props.offsetX,
  offsetY: props.offsetY,
  blurRadius: props.blurRadius,
  spreadRadius: props.spreadRadius,
  boxSize: props.boxSize,
}))`
  border-radius: ${({ borderTop, borderRight, borderBottom, borderLeft }) =>
    `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`};
  box-shadow: ${({ offsetX, offsetY, blurRadius, spreadRadius, shadowColor }) =>
    `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`};
  height: ${({ boxSize }) => `${boxSize}px`};
  width: ${({ boxSize }) => `${boxSize}px`};

`;
