import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { validateAll } from 'indicative/validator';

import LogoImage from '../../assets/images/logo.png';
import { styles } from '../../assets/css/styles';

import Input from '../Common/Input';

export default function Login() {
    const initState = {
        email: '',
        password: '',
        isPasswordVisible: false,
        errors: {}
    };
    const [state, setState] = useState(initState);

    const history = useHistory();

    const onInputChange = (e, isChecked = false) => {
        if (isChecked) {
            setState({
                ...state,
                [e.target.id]: e.target.checked,
                errors: {}
            });
        }
        else {
            setState({
                ...state,
                [e.target.id]: e.target.value,
                errors: {}
            });
        }
    };

    const onRegisterPress = () => {
        history.push('/register');
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

    return (
        <>
            <div className='container d-flex justify-content-center' style={{ marginTop: '5%' }}>
                <div className='card' style={{ width: '40%' }}>
                    <img src={LogoImage} className='card-img-top' alt='Not Found' />
                    <div className='card-body'>
                        <h3 className='card-title text-center mb-4 mt-2'><b>Excellence Beyond Trust</b></h3>
                        <Input
                            label='User name'
                            fieldValue={state.email}
                            iconName='fa fa-user'
                            onChange={(e) => onInputChange(e)}
                            errorMessage={state.errors.email}
                            placeholderText='User Name'
                            inputId='email'
                        />

                        <div className='input-group mb-4'>
                            <Input
                                label='Password'
                                fieldValue={state.password}
                                iconName='fa fa-lock'
                                onChange={(e) => onInputChange(e)}
                                errorMessage={state.errors.password}
                                placeholderText='Password'
                                inputId='password'
                                inputType={state.isPasswordVisible ? 'text' : 'password'}
                            />
                        </div>

                        <div className='form-check mb-4'>
                            <input className='form-check-input' type='checkbox' value='' id='isPasswordVisible'
                                onClick={(e) => onInputChange(e, true)} style={styles.backgroundColorMain} checked={state.isPasswordVisible} />
                            <label className='form-check-label' for='isPasswordVisible'>Show Password</label>
                            <div className='d-flex justify-content-end'>
                                <button type='button' className='btn btn-link' onClick={() => onRegisterPress()}>Register Here</button>
                            </div>
                        </div>
                        <div className='text-center d-grid gap-2'>
                            <button type='button' className='btn btn-outline-primary' onClick={() => onSubmitPress()}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
