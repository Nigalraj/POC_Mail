import { isEmpty, isObject } from "lodash";
import { useState } from "react";

/* eslint-disable react/prop-types */
const DisplayPage = ({ templateField, textareaRef, align, setTemplateField }) => {
    const [textBoxes, setTextBoxes] = useState([]);
    const [selectedTextBox, setSelectedTextBox] = useState(null);

    const handleAddTextBox = () => {
        setTextBoxes((prevTextBoxes) => [...prevTextBoxes, { value: "", isHidden: false }]);
    };

    const handleSave = (index) => {
        setTextBoxes((prevTextBoxes) => {
            const updatedTextBoxes = [...prevTextBoxes];
            updatedTextBoxes[index].isHidden = true;
            return updatedTextBoxes;
        });
        setSelectedTextBox(index);
    };
    const handleTextBoxChange = (index, value) => {
        setTextBoxes((prevTextBoxes) => {
            const updatedTextBoxes = [...prevTextBoxes];
            updatedTextBoxes[index].value = value;
            return updatedTextBoxes;
        });
    };
    return (
        <>
            <div className="position-relative" style={{ backgroundColor: templateField?.headingBackgroundColor }}>
                {templateField?.heading && (
                    <p
                        className={`p_tag P_normal ${templateField.headingType.toLowerCase()}`}
                        id="heading"
                        onClick={() => {
                            textareaRef.current.focus();
                        }}
                        style={{
                            color: templateField?.headingColor,
                            fontFamily: templateField?.headingFontfamily,
                            fontWeight: templateField?.fontweight,
                            textAlign: templateField?.alignment,
                            paddingTop: `${align.paddingtop}px`,
                            paddingBottom: `${align.paddingbottom}px`,
                            paddingLeft: `${align.paddingleft}px`,
                            paddingRight: `${align.paddingright}px`,
                        }}
                    >
                        {isObject(templateField) && !isEmpty(templateField?.heading) && templateField?.heading}
                    </p>
                )}

                <p
                    id="paragraph"
                    onClick={() => {
                        setTemplateField((pre) => {
                            console.log({ ...pre, ["paragraph"]: document.getElementById("paragraph").innerHTML });
                            return { ...pre, ["paragraph"]: document.getElementById("paragraph").innerHTML };
                        });
                    }}
                >
                    Test value for the heading
                </p>
            </div>
            <div>
                <div>
                    <button onClick={handleAddTextBox}>Add Text Box</button>
                    {textBoxes.map((textBox, index) => (
                        <div key={index}>
                            {!textBox.isHidden ? (
                                <>
                                    <input type="text" value={textBox.value} onChange={(e) => handleTextBoxChange(index, e.target.value)} />
                                    <button onClick={() => handleSave(index)}>Save</button>
                                </>
                            ) : (
                                <p onClick={() => setSelectedTextBox(index)} style={{ cursor: "pointer" }}>
                                    {textBox.value}
                                </p>
                            )}
                        </div>
                    ))}
                    {selectedTextBox !== null && (
                        <div>
                            <p>Edit Text:</p>
                            <input
                                type="text"
                                value={textBoxes[selectedTextBox].value}
                                onChange={(e) => handleTextBoxChange(selectedTextBox, e.target.value)}
                            />
                            {/* <button onClick={() => handleSave(selectedTextBox)}>Save</button> */}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DisplayPage;
