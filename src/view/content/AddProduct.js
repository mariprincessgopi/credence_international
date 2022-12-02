import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { validateAll } from 'indicative/validator';

import Input from '../Common/Input';
import Select from '../Common/Select';
import Header from '../Common/Header';
import { styles } from '../../assets/css/styles';

export default function AddProduct() {
    const initState = {
        productName: '',
        productCategory: '',
        productImage: '',
        errors: {}
    };
    const [state, setState] = useState(initState);

    const history = useHistory();

    const onInputChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
            errors: {}
        });
    };

    const onUploadImage = (e) => {
        setState({
            ...state,
            productImage: URL.createObjectURL(e?.target?.files[0]),
            errors: {}
        });
    };

    const onSubmitPress = () => {
        const message = {
            'productName.required': 'Please enter a Product Name',
            'productCategory.required': 'Please enter a Product Category',
        };

        const rules = {
            productName: 'required|string',
            productCategory: 'required|string'
        };

        validateAll(state, rules, message)
            .then(async () => {
                history.push('/home');
            })
            .catch(errors => {
                const formError = {};
                errors.forEach(error =>
                    formError[error.field] = error.message
                );
                setState({
                    ...state,
                    errors: formError
                });
            });
    };
    const optionArr = [{ value: '1' }, { value: '2' }];

    return (
        <>
            <Header />
            <div className='container d-flex justify-content-center' style={{ marginTop: '5%' }}>
                <div className='card' style={{ width: '40%' }}>
                    <div className='d-flex justify-content-center card-header' style={styles.backgroundLightBlue}>
                        <h6>Add Product</h6>
                    </div>
                    <div className='card-body'>
                        <Input
                            label='Product Name'
                            fieldValue={state.productName}
                            onChange={(e) => onInputChange(e)}
                            placeholderText='Product Name'
                            inputId='productName'
                            errorMessage={state.errors.productName}
                        />

                        <Select
                            optionArr={optionArr}
                            label='Product Category'
                            placeholderText='Select Product Category'
                            selectId='productCategory'
                            errorMessage={state.errors.productCategory}
                        />

                        <div className='row mt-2'>
                            <div className='col-9'>
                                <label className='form-label'>Product Image</label>
                                <input
                                    type='file'
                                    accept='image/*'
                                    onChange={(e) => onUploadImage(e)}
                                />
                            </div>
                            <div className='col-3 mt-2'>
                                {
                                    state.productImage ?
                                        <img
                                            style={{ width: '100px', height: '100px', ...styles.imageStyle }}
                                            src={state.productImage}
                                            alt='Not Uploaded'
                                        />
                                        : null
                                }
                            </div>
                        </div>
                        <div className='text-center d-grid gap-2 mt-2'>
                            <button type='button' className='btn btn-outline-primary' onClick={() => onSubmitPress()}>Add New Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
