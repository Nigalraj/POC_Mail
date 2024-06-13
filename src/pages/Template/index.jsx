import { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../common.css";
import "./template.css";
import { EditLabel, templateLabel } from "../../constants";
import { isArray, isEmpty, isObject } from "lodash";
import TemplateHome from "./homePage";
import EditPage from "./editPage";
import DisplayPage from "./displayPage";
import axios from "axios"
import { UserContext } from "../../context";

export const Template = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [textBoxes, setTextBoxes] = useState([]);
    const [selectedTextBox, setSelectedTextBox] = useState(null);
    const [inputValues, setInputValues] = useState({
        subject: "",
        from: "",
        preheader: "",
    });
    const textareaRef = useRef(null);

    const [align, setAlign] = useState({
        paddingtop: "",
        paddingbottom: "",
        paddingright: "",
        paddingleft: "",
    });

    const payload = {
        "id": 1015,
        "user_id": 6265172,
        "title": "Vado accipio caput architecto vicinus infit tot.",
        "body": "Angulus cunabula stipes. Praesentium adversus spiculum. Depopulo optio solus. Sordeo perferendis explicabo. Arto cunctatio atque. Commodi desolo uterque. Aequus considero administratio. Defaeco aqua tantum. Caritas vix patior. Aeternus tam alo. Officiis veritas cum."
    }
    useEffect(() => {
        axios.post('https://gorest.co.in/public/v2/posts', payload, {
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const [templateField, setTemplateField] = useState({
        heading: "",
        text: "",
        button: "",
        headingType: "",
        headingColor: "",
        headingBackgroundColor: "",
        headingFontfamily: "",
        fontweight: "",
        alignment: "",
    });

    const handleValueChange = (value, inputvalue) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [value.toLowerCase()]: inputvalue,
        }));
    };
    const handleOptionClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <Container fluid>
                <Row className="bg-white border-bottom">
                    <Col xs={4} className="p-0 d-flex mt-2 ">
                        {isArray(templateLabel) &&
                            templateLabel.map((value, i) => (
                                <div
                                    key={i}
                                    className={`template-label ${i === activeIndex ? "activetab" : ""} ${i === 0 ? "ms-4" : "ms-2"} text-dark px-3 py-2 `}
                                    onClick={() => handleOptionClick(i)}
                                >
                                    {value}
                                </div>
                            ))}
                    </Col>
                    <Col xs={8} className="p-1 mt-2">
                        <b>{isObject(inputValues) && !isEmpty(inputValues?.subject) && inputValues?.subject}</b>&nbsp;
                        <label className="fw-lighter"> {isObject(inputValues) && !isEmpty(inputValues?.preheader) && inputValues?.preheader}</label>
                    </Col>
                </Row>
                <UserContext.Provider value={{ textBoxes, setTextBoxes, selectedTextBox, setSelectedTextBox }}>
                    <Row className="p-0">
                        <Col className="bg-white Scroll " xs={4} md={4} lg={4}>
                            {activeIndex === 0 &&
                                EditLabel.map((value, i) => (
                                    <div key={i}>
                                        <p className={`${i == 0 ? "mt-4" : "mt-3"}`}>{value}</p>
                                        <input
                                            type="text"
                                            id={value}
                                            maxLength={value === "From" ? 100 : 255}
                                            className="form-control mt-2"
                                            onChange={(e) => {
                                                handleValueChange(value, e.target.value);
                                            }}
                                        />
                                    </div>
                                ))}
                            {activeIndex === 2 && (
                                <EditPage
                                    setAlign={setAlign}
                                    setTemplateField={setTemplateField}
                                    templateField={templateField}
                                    textareaRef={textareaRef}
                                    align={align}
                                />
                            )}
                            {activeIndex === 0 && <TemplateHome />}
                        </Col>
                        <Col xs={8} md={8} lg={8} className="p-5">
                            <DisplayPage templateField={templateField} textareaRef={textareaRef} align={align} setTemplateField={setTemplateField} />
                        </Col>
                    </Row>
                </UserContext.Provider>
            </Container>
        </>
    );
};
