import React, { useState } from 'react';

import { BoxRadius } from './styles';


const Home: React.FC = () => {
  const [borderTop, setBorderTop] = useState(0);
  const [borderBottom, setBorderBottom] = useState(0);
  const [borderLeft, setBorderLeft] = useState(0);
  const [borderRight, setBorderRight] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [blurRadius, setBlurRadius] = useState(0);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState("#333");
  const [boxSize, setBoxSize] = useState(300);


  function handleCheckSize(value: number) {
    setBoxSize(value);
    const boxMaxSize = Math.round(boxSize / 2);
    if (borderTop > boxMaxSize) setBorderTop(boxMaxSize);
    if (borderBottom > boxMaxSize) setBorderBottom(boxMaxSize);
    if (borderLeft > boxMaxSize) setBorderLeft(boxMaxSize);
    if (borderRight > boxMaxSize) setBorderRight(boxMaxSize);
  }



  return <div className="container ">
    <div className="row">
      <div className="col-8 d-flex justify-content-center justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
        <BoxRadius
          className="jumbotron"
          borderTop={borderTop}
          borderBottom={borderBottom}
          borderLeft={borderLeft}
          borderRight={borderRight}
          shadowColor={shadowColor}
          offsetX={offsetX}
          offsetY={offsetY}
          blurRadius={blurRadius}
          spreadRadius={spreadRadius}
          boxSize={boxSize}

        />

        <code className="language-css">
          <p>width: {`${boxSize}px`}</p>
          <p>height: {`${boxSize}px`}</p>
          <p>border-radius: {`${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`}</p>
          <p>box-shadow: {`${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`}</p>
        </code>

      </div>

      <div className="col-4 ">
        <h3>Box</h3>
        <div className="form-group">
          <label label-for="border-radius-top">Size</label>
          <input type="range" className="form-control-range" min='0' max="999" id="border-radius-top" value={boxSize} onChange={(e) => handleCheckSize(parseInt(e.target.value))} />
        </div>



        <hr />
        <h3>Border Radius</h3>
        <div className="form-group">
          <label label-for="border-radius-top">Top - Left</label>
          <input type="range" className="form-control-range" min='0' max={boxSize / 2} id="border-radius-top" value={borderTop} onChange={e => { setBorderTop(parseInt(e.target.value)); }} />
        </div>
        <div className="form-group">
          <label label-for="border-radius-left">Top - Right</label>
          <input type="range" className="form-control-range" min='0' max={boxSize / 2} id="border-radius-left" value={borderRight} onChange={e => { setBorderRight(parseInt(e.target.value)); }} />
        </div>
        <div className="form-group">
          <label label-for="border-radius-left">Bottom - Right</label>
          <input type="range" className="form-control-range" min='0' max={boxSize / 2} id="border-radius-left" value={borderBottom} onChange={e => { setBorderBottom(parseInt(e.target.value)); }} />
        </div>
        <div className="form-group">
          <label label-for="border-radius-bottom">Bottom - Left</label>
          <input type="range" className="form-control-range" min='0' max={boxSize / 2} id="border-radius-bottom" value={borderLeft} onChange={e => { setBorderLeft(parseInt(e.target.value)); }} />
        </div>

        <hr />
        <h3>Elevation</h3>
        <div className="form-group">
          <label label-for="offsetX">offset-x</label>
          <input type="range" className="form-control-range" min='-999' max="100" id="offsetX" value={offsetX} onChange={e => setOffsetX(parseInt(e.target.value))} />
        </div>
        <div className="form-group">
          <label label-for="offsetY"> offset-y </label>
          <input type="range" className="form-control-range" min='-999' max="100" id="offsetY" value={offsetY} onChange={e => setOffsetY(parseInt(e.target.value))} />
        </div>
        <div className="form-group">
          <label label-for="shadowColor">color </label>
          <input type="color" className="form-control-color" id="shadowColor" value={shadowColor} onChange={e => setShadowColor(e.target.value)} />
        </div>
        <div className="form-group">
          <label label-for="blurRadius">blur-radius</label>
          <input type="range" className="form-control-range" min='0' max="100" id="blurRadius" value={blurRadius} onChange={e => setBlurRadius(parseInt(e.target.value))} />
        </div>
        <div className="form-group">
          <label label-for="spreadRadius">spread-radius</label>
          <input type="range" className="form-control-range" min='0' max="100" id="spreadRadius" value={spreadRadius} onChange={e => setSpreadRadius(parseInt(e.target.value))} />
        </div>
      </div>
    </div>

  </div >
}

export default Home;