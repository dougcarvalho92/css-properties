import React from 'react';
import { useCSSProperties } from '../../context/CSSContext';

import { BoxRadius } from './styles';

const Box: React.FC = ({ children }) => {
    const { borderTopLeft, borderBottomRight, borderBottomLeft, borderTopRight, shadowColor, offsetX, offsetY, blurRadius, spreadRadius, boxSizeHeight, boxSizeWidth } = useCSSProperties();


    return <BoxRadius
        borderTopLeft={borderTopLeft}
        borderBottomRight={borderBottomRight}
        borderBottomLeft={borderBottomLeft}
        borderTopRight={borderTopRight}
        shadowColor={shadowColor}
        offsetX={offsetX}
        offsetY={offsetY}
        blurRadius={blurRadius}
        spreadRadius={spreadRadius}
        boxSizeHeight={boxSizeHeight}
        boxSizeWidth={boxSizeWidth}

    >
        {children}
    </BoxRadius>
}

export default Box;