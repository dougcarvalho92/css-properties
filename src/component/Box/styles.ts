import styled from "styled-components";

interface boxRadiusProps {
  borderTopLeft: number;
  borderBottomRight: number;
  borderBottomLeft: number;
  borderTopRight: number;
  shadowColor: string;
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  boxSizeWidth: number;
  boxSizeHeight: number;
}

export const BoxRadius = styled.div.attrs((props: boxRadiusProps) => ({
  borderTopLeft: props.borderTopLeft,
  borderBottomRight: props.borderBottomRight,
  borderBottomLeft: props.borderBottomLeft,
  borderTopRight: props.borderTopRight,
  shadowColor: props.shadowColor,
  offsetX: props.offsetX,
  offsetY: props.offsetY,
  blurRadius: props.blurRadius,
  spreadRadius: props.spreadRadius,
  boxSizeWidth: props.boxSizeWidth,
  boxSizeHeight: props.boxSizeHeight,
}))`
  border-radius: ${({ borderTopLeft, borderTopRight, borderBottomRight, borderBottomLeft }) =>
    `${borderTopLeft}px ${borderTopRight}px ${borderBottomRight}px ${borderBottomLeft}px`};
  box-shadow: ${({ offsetX, offsetY, blurRadius, spreadRadius, shadowColor }) =>
    `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`};
  height: ${({ boxSizeHeight }) => `${boxSizeHeight}px`};
  width: ${({ boxSizeWidth }) => `${boxSizeWidth}px`};
  background-color: #f6f6f6;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;
