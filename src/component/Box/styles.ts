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

export const BoxRadius = styled.div.attrs((props: boxRadiusProps) => props)`
  border-radius: ${(props) =>
    `${props.borderTopLeft}px ${props.borderTopRight}px ${props.borderBottomRight}px ${props.borderBottomLeft}px`};

  box-shadow: ${(props) => `${props.offsetX}px ${props.offsetY}px ${props.blurRadius}px ${props.spreadRadius}px ${props.shadowColor}`};

  height: ${(props) => `${props.boxSizeHeight}px`};
  width: ${(props) => `${props.boxSizeWidth}px`};
  background-color: #f6f6f6;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;
