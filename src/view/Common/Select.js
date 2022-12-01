import React from 'react';
import ErrorMessage from '../../component/errorMessage';

export default function Select(props) {
    const { label, optionArr,
        onChange, errorMessage,
        placeholderText, selectId
    } = props;

    return (
        <>
            {
                label ?
                    <label className='form-label'>{label}</label>
                    : null
            }
            <select className='form-select' id={selectId} onChange={onChange}>
                {
                    placeholderText ?
                        <option selected>{placeholderText}</option>
                        : null
                }
                {
                    optionArr.map((item, index) => {
                        return (
                            <option value={item.value} key={index}>{item.value}</option>
                        )
                    })
                }
            </select>
            <ErrorMessage errors={errorMessage} />
        </>
    )
}