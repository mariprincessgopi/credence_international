import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { validateAll } from 'indicative/validator';

import Input from '../Common/Input';
import { styles } from '../../assets/css/styles';
import Select from '../Common/Select';

export default function AddProduct() {
    const initState = {
        productName: '',
        productCategory: '',
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

    const onSubmitPress = () => {
        const message = {
            'email.required': 'Please enter a Email address',
            'email.email': 'Please enter a Valid Email address',
            'password.required': 'Please enter a Password',
        };

        const rules = {
            email: 'required|email',
            password: 'required|string'
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
            <div className='container d-flex justify-content-center' style={{ marginTop: '5%' }}>
                <div className='card' style={{ width: '40%' }}>
                    <div className="d-flex justify-content-center card-header" style={styles.backgroundLightBlue}>
                        <h6>Add Product</h6>
                    </div>
                    <div className='card-body'>
                        <Input
                            label='Product Name'
                            fieldValue={state.productName}
                            onChange={(e) => onInputChange(e)}
                            errorMessage={state.errors.productName}
                            placeholderText='Product Name'
                            inputId='productName'
                        />

                        <Select
                            optionArr={optionArr}
                            label='Product Category'
                            placeholderText='Select Product Category'
                            selectId='productCategory'
                            errorMessage={state.errors.productCategory}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};
