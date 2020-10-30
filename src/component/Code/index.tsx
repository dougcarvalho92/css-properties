import React from 'react';
import { useCSSProperties } from '../../context/CSSContext';

import { CSSCode } from './styles';


const Code: React.FC = () => {
    const { borderTopLeft, borderBottomRight, borderBottomLeft, borderTopRight, shadowColor, offsetX, offsetY, blurRadius, spreadRadius, boxSizeHeight, boxSizeWidth } = useCSSProperties();

    return <CSSCode>
        <p>width: {`${boxSizeWidth}px`}</p>
        <p>height: {`${boxSizeHeight}px`}</p>
        <p>border-radius: {`${borderTopLeft}px ${borderTopRight}px ${borderBottomRight}px ${borderBottomLeft}px`}</p>
        <p>box-shadow: {`${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`}</p>
    </CSSCode>

}

export default Code;