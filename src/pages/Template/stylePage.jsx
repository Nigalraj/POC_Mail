import React, { useState } from 'react';
import { ChromePicker,SketchPicker } from 'react-color';
import Form from 'react-bootstrap/Form';

const ColorPicker = ({ color, onColorChange, showPalette, onTogglePalette ,onChangeComplete,handleclick}) => (
    <div onClick={handleclick}>
        <div 
            style={{
                width: '35px',
                height: '35px',
                backgroundColor: color,
                display: 'inline-block',
                cursor: 'pointer',
            }}
            onMouseDown={onTogglePalette}
            onTouchMoveCapture={onTogglePalette}
        />
        {showPalette && (
            <div style={{ position: 'absolute', zIndex: 100, marginTop: '-100px' }}>
                <SketchPicker color={color} onChange={onColorChange} onChangeComplete={onChangeComplete}/>
            </div>
        )}
    </div>
);

const StylePage = () => {

    const initialColorPickers = [
        { color: "#ffffff", showPalette: false,select:true,onComplete:false},
        { color: "#ffffff", showPalette: false,select:false ,onComplete:false},
        { color: "#ffffff", showPalette: false,select:false, onComplete:false},
        { color: "#ffffff", showPalette: false,select:false ,onComplete:false}
    ];

    const [colorPickers, setColorPickers] = useState(initialColorPickers);

    const handleColorChange = (index) => (color) => {
        console.log(index,"F",color.hex);
        setColorPickers((prev) => prev.map((picker, i) =>
            i === index ? { ...picker, color: color.hex, showPalette: false } : picker
        ));
    };

    const handleTogglePalette = (index) => () => {
        setColorPickers((prev) => prev.map((picker, i) =>
            i === index ? { ...picker, showPalette: !picker.showPalette } : picker
        ));
    };

    const handleCompleteChange=(index)=>() => {
            setColorPickers((prev) => prev.map((picker,i) =>
                i === index ? {...picker,onComplete:!picker.onComplete }:picker));

    }
    const handleclick=(index)=>()=>{
        setColorPickers((prev)=>prev.map((picker,i)=>
            i=== index ? {...picker,showPalette:!picker.showPalette}:picker
        ));
    }

    return (
        <div className="d-flex flex-column mx-3">
            <span className="my-4 fw-semibold">TEMPLATE STYLES</span>
            <span>Choose layout / theme</span>
            <div className="card mt-2">
                <div className="row border m-2">
                    <div className="col-6 border text-center p-1">gy</div>
                    <div className="col-6 border text-center p-1">gv</div>

                    {colorPickers?.map((map,index)=> <div key={index}>
                        <span>Email backdrop</span>
                        <ColorPicker
                            color={map.color}
                            onColorChange={handleColorChange(index)}
                            showPalette={map.showPalette}
                            onTogglePalette={handleTogglePalette(index)}
                            onChangeComplete={handleCompleteChange(index)}
                            handleclick={handleclick(index)}
                            
                        />
                        {map.select?<div key={index}>
                                <span>Font stack</span>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>:<></>}
                    </div>)
                   }
                </div>
            </div>
        </div>
    );
};

export default StylePage;
