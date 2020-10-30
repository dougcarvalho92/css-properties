import React from 'react';

import Input from '../../component/Input';
import { useCSSProperties } from '../../context/CSSContext';

const InputList: React.FC = () => {
    const {
        borderTopLeft,
        borderBottomRight,
        borderBottomLeft,
        borderTopRight,
        shadowColor,
        offsetX,
        offsetY,
        blurRadius,
        spreadRadius,
        boxSizeHeight,
        boxSizeWidth,
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
        handleChangeBlurRadius } = useCSSProperties();
    return <><h3>Box</h3>

        <Input name="Box Width" type="range" className="form-control-range" min='0' max="999" id="border-radius-top" value={boxSizeWidth} onChange={(e) => handleChangeBoxWidth(parseInt(e.target.value))} />

        <Input name="Box Height" type="range" className="form-control-range" min='0' max="999" id="border-radius-top" value={boxSizeHeight} onChange={(e) => handleChangeBoxHeight(parseInt(e.target.value))} />
        <hr />

        <h3>Border Radius</h3>
        <Input name="Top - Left" type="range" className="form-control-range" min='0' max={boxSize} id="border-radius-top" value={borderTopLeft} onChange={e => { handleChangeTopLeftRadius(parseInt(e.target.value)); }} />

        <Input name="Top - Right" type="range" className="form-control-range" min='0' max={boxSize} id="border-radius-left" value={borderTopRight} onChange={e => { handleChangeTopRightRadius(parseInt(e.target.value)); }} />

        <Input name="Bottom - Right" type="range" className="form-control-range" min='0' max={boxSize} id="border-radius-right" value={borderBottomRight} onChange={e => { handleChangeBottomRightRadius(parseInt(e.target.value)); }} />
        
        <Input name="Bottom - Left" type="range" className="form-control-range" min='0' max={boxSize} id="border-radius-bottom" value={borderBottomLeft} onChange={e => { handleChangeBottomLeftRadius(parseInt(e.target.value)); }} />
        <hr />


        <h3>Elevation</h3>
        <Input name="Offset X" type="range" className="form-control-range" min='-999' max="999" id="offsetX" value={offsetX} onChange={e => handleChangeOffsetX(parseInt(e.target.value))} />

        <Input name="Offset Y" type="range" className="form-control-range" min='-999' max="999" id="offsetY" value={offsetY} onChange={e => handleChangeOffsetY(parseInt(e.target.value))} />

        <Input name="shadow Color" type="color" className="form-control-color" id="shadowColor" value={shadowColor} onChange={e => handleChangeShadowColor(e.target.value)} />

        <Input name="Blur" type="range" className="form-control-range" min='0' max="999" id="blurRadius" value={blurRadius} onChange={e => handleChangeBlurRadius(parseInt(e.target.value))} />

        <Input name="Spread" type="range" className="form-control-range" min="0" max="999" id="spreadRadius" value={spreadRadius} onChange={e => handleChangeSpreadRadius(parseInt(e.target.value))} />

    </>
        ;
}

export default InputList;