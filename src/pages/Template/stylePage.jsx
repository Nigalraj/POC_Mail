import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const StylePage = () => {
    const [templateFields, setTemplateFields] = useState({
        colorPicker1: '#000000',
        colorPicker2: '#000000',
        colorPicker3: '#000000',
        colorPicker4: '#000000',
        colorPicker5: '#000000',
        selectValue: '', // Initial value for the select component
    });

    const handleColorChange = (e, field) => {
        const { value } = e.target;
        setTemplateFields(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setTemplateFields(prevState => ({
            ...prevState,
            selectValue: value
        }));
    };

    const items = [
        { id: 1, label: 'One-off' },
        { id: 2, label: 'Shared' },
    ];

    const rowConfigurations = [
        { id: 1, inputLabel: 'Email backdrop', field: 'colorPicker1', includeSelect: false },
        { id: 2, inputLabel: 'Canvas color', field: 'colorPicker2', includeSelect: true },
        { id: 3, inputLabel: 'Text color', field: 'colorPicker3', includeSelect: false },
        { id: 4, inputLabel: 'Accent color', field: 'colorPicker4', includeSelect: false },
    ];

    const options = [
        { id: 1, label: 'Modern sans' },
        { id: 2, label: 'Book sans' },
        { id: 3, label: 'Organic sans' },
        { id: 4, label: 'Geometric sans' },
        { id: 5, label: 'Heavy sans' },
        { id: 6, label: 'Rounded sans' },
        { id: 7, label: 'Modern seriff' },
        { id: 8, label: 'Book seriff' },
        { id: 9, label: 'Monospace' },
    ];

    return (
        <div className="d-flex flex-column mx-3">
            <span className="my-4 fw-semibold">TEMPLATE STYLES</span>
            <span>Choose layout / theme</span>
            <div className="card mt-2">
                <div className="row m-3">
                    {items?.map(item => (
                        <div key={item.id} className="col-6 border text-center p-1">
                            {item.label}
                        </div>
                    ))}
                </div>
                {rowConfigurations?.length > 0 && rowConfigurations.map((config, index) => (
                    <div key={index} className="ms-3">
                        <div className='d-flex flex-column my-1'>
                            <span>{config.inputLabel}</span>
                            <input
                                className="rounded-3 border-0 my-1"
                                type="color"
                                value={templateFields[config.field]}
                                onChange={(e) => handleColorChange(e, config.field)}
                            />
                        </div>
                        {config.includeSelect && (
                            <div>
                                <span>Font stack</span>
                                <Form.Select
                                    aria-label="Select font stack"
                                    value={templateFields.selectValue}
                                    onChange={handleSelectChange}
                                >
                                    <option>Open this select menu</option>
                                    {options?.length > 0 && options.map(option => (
                                        <option key={option.id} value={option.label}>{option.label}</option>
                                    ))}
                                </Form.Select>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StylePage;
