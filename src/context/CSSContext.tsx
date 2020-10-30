import React, { createContext, useState, useEffect, useContext } from "react";

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
    boxSize: number;
    handleChangeTopLeftRadius(value: number): void;
    handleChangeTopRightRadius(value: number): void;
    handleChangeBottomLeftRadius(value: number): void;
    handleChangeBottomRightRadius(value: number): void;
    handleChangeOffsetY(value: number): void;
    handleChangeOffsetX(value: number): void;
    handleChangeBoxWidth(value: number): void;
    handleChangeBoxHeight(value: number): void;
    handleChangeShadowColor(value: string): void;
    handleChangeSpreadRadius(value: number): void;
    handleChangeBlurRadius(value: number): void;

}

const CSSContext = createContext<boxRadiusProps>({} as boxRadiusProps);

export const CSSProvider: React.FC = ({ children }) => {
    const [borderTopLeft, setBorderTopLeft] = useState(70);
    const [borderTopRight, setBorderTopRight] = useState(78);
    const [borderBottomRight, setBorderBottomRight] = useState(57);
    const [borderBottomLeft, setBorderBottomLeft] = useState(0);
    const [offsetX, setOffsetX] = useState(-15);
    const [offsetY, setOffsetY] = useState(9);
    const [blurRadius, setBlurRadius] = useState(4);
    const [spreadRadius, setSpreadRadius] = useState(10);
    const [shadowColor, setShadowColor] = useState("#333");
    const [boxSizeHeight, setBoxSizeHeight] = useState(300);
    const [boxSizeWidth, setBoxSizeWidth] = useState(500);
    const [boxSize, setBoxSize] = useState(0);

    useEffect(() => {
        const boxMaxSize = Math.round(boxSizeWidth / 2);
        setBoxSize(boxMaxSize);
        if (borderTopLeft > boxMaxSize) setBorderTopLeft(boxMaxSize);
        if (borderBottomRight > boxMaxSize) setBorderBottomRight(boxMaxSize);
        if (borderBottomLeft > boxMaxSize) setBorderBottomLeft(boxMaxSize);
        if (borderTopRight > boxMaxSize) setBorderTopRight(boxMaxSize);
    }, [boxSizeWidth, boxSizeHeight]);


    //TAMANHO
    const handleChangeBoxWidth = (value: number) => {
        setBoxSizeWidth(value);
    }
    const handleChangeBoxHeight = (value: number) => {
        setBoxSizeHeight(value);
    }
    //BORDER-RADIUS
    const handleChangeTopLeftRadius = (value: number) => {
        setBorderTopLeft(value);
    }
    const handleChangeTopRightRadius = (value: number) => {
        setBorderTopRight(value);
    }
    const handleChangeBottomLeftRadius = (value: number) => {
        setBorderBottomLeft(value);
    }
    const handleChangeBottomRightRadius = (value: number) => {
        setBorderBottomRight(value);
    }
    //LOCATION

    const handleChangeOffsetY = (value: number) => {
        setOffsetY(value);
    }
    const handleChangeOffsetX = (value: number) => {
        setOffsetX(value);
    }

    //COLOR, EFFECT AND SIZE
    const handleChangeShadowColor = (value: string) => {
        setShadowColor(value);
    }
    const handleChangeSpreadRadius = (value: number) => {
        setSpreadRadius(value);
    }
    const handleChangeBlurRadius = (value: number) => {
        setBlurRadius(value);
    }



    return (
        <CSSContext.Provider
            value={{
                borderTopLeft,
                borderBottomRight,
                borderBottomLeft,
                borderTopRight,
                shadowColor,
                offsetX,
                offsetY,
                blurRadius,
                spreadRadius,
                boxSizeWidth,
                boxSizeHeight,
                boxSize,
                handleChangeTopLeftRadius,
                handleChangeTopRightRadius,
                handleChangeBottomLeftRadius,
                handleChangeBottomRightRadius,
                handleChangeOffsetY,
                handleChangeOffsetX,
                handleChangeBoxWidth,
                handleChangeBoxHeight,
                handleChangeShadowColor,
                handleChangeSpreadRadius,
                handleChangeBlurRadius,
            }}
        >
            {children}
        </CSSContext.Provider>
    );
};

export function useCSSProperties() {
    const context = useContext(CSSContext);

    return context;
}