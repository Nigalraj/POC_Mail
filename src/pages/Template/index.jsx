import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../common.css";
import "./template.css";
import { EditLabel, fontFamily, inspectLable, templateLabel } from "../../constants";
import { isArray, isEmpty, isObject } from "lodash";

export const Template = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [inputValues, setInputValues] = useState({
        subject: "",
        from: "",
        preheader: "",
    });

    const textareaRef = useRef(null);
    const [align, setAlign] = useState({
        top: "",
        bottom: "",
        right: "",
        left: "",
    });
    const [templateField, setTemplateField] = useState({
        heading: "",
        text: "",
        button: "",
        headingType: "",
        headingColor: "",
        headingBackgroundColor:""
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
                    {console.log(isObject(inputValues) && !isEmpty(inputValues?.subject) && inputValues?.subject, "Test value")}
                    <Col xs={8} className="p-1 mt-2">
                        <b>{isObject(inputValues) && !isEmpty(inputValues?.subject) && inputValues?.subject}</b>&nbsp;
                        <label className="fw-lighter"> {isObject(inputValues) && !isEmpty(inputValues?.preheader) && inputValues?.preheader}</label>
                    </Col>
                </Row>
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
                            <div>
                                <p className="mt-4">{inspectLable?.HEADING}</p>
                                <p className="mb-0">{inspectLable?.CONTENT}</p>
                                <textarea
                                    id="content"
                                    className="w-100 h-200"
                                    ref={textareaRef}
                                    onChange={(e) => {
                                        setTemplateField((prevValue) => ({
                                            ...prevValue,
                                            heading: e.target.value,
                                        }));
                                    }}
                                />
                                <p className="mt-3 mb-1">{inspectLable?.LEVEL}</p>
                                <div className="btn-group  w-100" role="group" aria-label="Basic outlined example">
                                    {inspectLable?.LEVELNAME.map((value, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className={`btn btn-outline-primary ${templateField.headingType === value ? "active" : ""}`}
                                            onClick={() => {
                                                setTemplateField((pre) => ({ ...pre, headingType: value }));
                                            }}
                                        >
                                            {value}
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-3 mb-1">{inspectLable?.TEXT}</p>
                                    <input
                                        className="rounded-3 border-0"
                                        type="color"
                                        onChange={(e) => {
                                            setTemplateField((pre) => ({ ...pre, headingColor: e.target.value }));
                                        }}
                                    />
                                <p className="mt-3 mb-1">{inspectLable?.BACKGROUND}</p>
                                
                                <input
                                        className="rounded-3 border-0"
                                        type="color"
                                        onChange={(e) => {
                                            setTemplateField((pre) => ({ ...pre, headingBackgroundColor: e.target.value }));
                                        }}
                                    />
                                <p className="mt-3 mb-1">{inspectLable?.FONT}</p>
                                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Select the font family </option>
                                    {fontFamily.map((value, i) => (
                                        <option value={value} key={i}>
                                            {value}
                                        </option>
                                    ))}
                                </select>
                                <p className="mt-3 mb-1">{inspectLable?.FONTWEIGHT}</p>
                                <div className="btn-group  w-100" role="group" aria-label="Basic outlined example">
                                    {inspectLable?.FWEIGHT.map((value, i) => (
                                        <button key={i} type="button" className="btn btn-outline-primary">
                                            {value}
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-3 mb-1">{inspectLable?.ALIGNMENT}</p>
                                <div className="btn-group  w-100" role="group" aria-label="Basic outlined example">
                                    {inspectLable?.ALIGNMENTI.map((value, i) => (
                                        <button key={i} type="button" className="btn btn-outline-primary">
                                            {value}
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-3 mb-1">{inspectLable?.PADDING}</p>
                                {inspectLable.PADDINGI.map((value, i) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <>
                                        <div className="row">
                                            <div className="col-1" key={i}>
                                                <label className="">{value?.icon}</label>
                                            </div>
                                            <div className="col-9">
                                                <input
                                                    type="range"
                                                    className="form-range w-100"
                                                    id={`customRange${i + 1}`}
                                                    value={align[value?.label?.toLowerCase()] || 0}
                                                    onChange={(e) => {
                                                        setAlign((prev) => ({
                                                            ...prev,
                                                            [value?.label?.toLowerCase()]: e.target.value,
                                                        }));
                                                    }}
                                                />
                                            </div>
                                            <div className="col-2">{align[value?.label?.toLowerCase()] || 0}%</div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        )}
                        {activeIndex === 0 && (
                            <div className="card  mt-4 p-2 mb-5">
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card s content.</p>
                                    <button className="btn btn-primary ">Send Test</button>
                                </div>
                            </div>
                        )}
                    </Col>
                    <Col xs={8} md={8} lg={8} className="p-5">
                        <p
                            className={`p p-3 ${templateField.headingType.toLowerCase()}`}
                            id="heading"
                            onClick={() => {
                                textareaRef.current.focus();
                            }}
                            style={{ color: templateField?.headingColor,backgroundColor:templateField?.headingBackgroundColor }}
                        >
                            {isObject(templateField) && !isEmpty(templateField?.heading) && templateField?.heading}
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
