/* eslint-disable react/prop-types */
import { fontFamily, inspectLable } from "../../constants";

const EditPage = ({ setAlign, setTemplateField, templateField, textareaRef, align }) => {
    return (
        <>
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
                                setTemplateField((pre) => ({ ...pre, headingType: value }), console.log(i, "index value "));
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
                <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    onChange={(e) => setTemplateField((pre) => ({ ...pre, headingFontfamily: e.target.value }))}
                >
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
                        <button
                            key={i}
                            type="button"
                            className={`btn btn-outline-primary ${templateField.fontweight === value ? "active" : ""}`}
                            onClick={() => {
                                setTemplateField((pre) => ({ ...pre, fontweight: value }));
                            }}
                        >
                            {value}
                        </button>
                    ))}
                </div>
                <p className="mt-3 mb-1">{inspectLable?.ALIGNMENT}</p>
                <div className="btn-group  w-100" role="group" aria-label="Basic outlined example">
                    {inspectLable?.ALIGNMENTI.map((value, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`btn btn-outline-primary ${templateField.alignment === value?.label ? "active" : ""}`}
                            onClick={() => {
                                setTemplateField((pre) => ({ ...pre, alignment: value?.label }));
                            }}
                        >
                            {value.icon}
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
        </>
    );
};

export default EditPage;
