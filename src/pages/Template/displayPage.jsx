import { isEmpty, isObject } from "lodash";

/* eslint-disable react/prop-types */
const DisplayPage = ({ templateField, textareaRef, align }) => {
    console.log(align, "align from display page");
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
                    onClick={(e) => {
                        console.log(e);
                    }}
                >
                    {templateField?.content}
                </p>
            </div>
        </>
    );
};

export default DisplayPage;
