import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { validateAll } from 'indicative/validator';

import LogoHalf from '../../assets/images/logoHalf.png';
import { styles } from '../../assets/css/styles';
import ErrorMessage from '../../component/errorMessage';

export default function Register() {
    const initState = {
        email: '',
        password: '',
        confirmPassword: '',
        mobileNo: '',
        firstName: '',
        lastName: '',
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

    const onBackPress = () => {
        history.push('/');
    };

    const onRegisterPress = () => {
        const message = {
            'email.required': 'Please enter a Email address',
            'email.email': 'Please enter a Valid Email address',
            'password.required': 'Please enter a Password',
            'confirmPassword.required': 'Please enter a Password',
            'confirmPassword.same': 'Password and Confirm password are not same'
        };

        const rules = {
            email: 'required|email',
            password: 'required|string',
            confirmPassword: 'required|string|same:password',
        };

        validateAll(state, rules, message)
            .then(async () => {
                alert('Here');
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
            <div className='container d-flex justify-content-center' style={{ marginTop: '2%' }}>
                <div className='card' style={{ width: '40%' }}>
                    <div className='card-body'>
                        <img src={LogoHalf} className='card-img-top' alt='Not Found' />

                        <h3 className='card-title text-center mb-4 mt-2'><b>Credence International</b></h3>
                        <div className='input-group mb-4'>
                            <span className='input-group-text' id='basic-addon1' style={styles.backgroundColorMain}>
                                <i className='fa fa-user' style={styles.whiteText} aria-hidden='true'></i></span>
                            <input type='text' className='form-control' placeholder='Username' id='email'
                                value={state.email} onChange={(e) => onInputChange(e)} aria-describedby='basic-addon1' />
                        </div>
                        <ErrorMessage errors={state.errors.email} />

                        <div className='input-group mb-4'>
                            <span className='input-group-text' id='basic-addon1' style={styles.backgroundColorMain}>
                                <i className='fa fa-user-circle' style={styles.whiteText} aria-hidden='true'></i></span>
                            <input type='text' className='form-control' placeholder='First Name' id='firstName'
                                value={state.firstName} onChange={(e) => onInputChange(e)} aria-describedby='basic-addon1' />
                        </div>
                        <ErrorMessage errors={state.errors.firstName} />

                        <div className='input-group mb-4'>
                            <span className='input-group-text' id='basic-addon1' style={styles.backgroundColorMain}>
                                <i className='fa fa-user-circle' style={styles.whiteText} aria-hidden='true'></i></span>
                            <input type='text' className='form-control' placeholder='Last Name' id='lastName'
                                value={state.lastName} onChange={(e) => onInputChange(e)} aria-describedby='basic-addon1' />
                        </div>
                        <ErrorMessage errors={state.errors.lastName} />

                        <div className='input-group mb-4'>
                            <span className='input-group-text' id='basic-addon1' style={styles.backgroundColorMain}>
                                <i className='fa fa-phone' style={styles.whiteText} aria-hidden='true'></i></span>
                            <input type='text' className='form-control' placeholder='Mobile Number' id='mobileNo'
                                value={state.mobileNo} onChange={(e) => onInputChange(e)} aria-describedby='basic-addon1' />
                        </div>
                        <ErrorMessage errors={state.errors.mobileNo} />


                        <div className='input-group mb-4'>
                            <span className='input-group-text' id='basic-addon1' style={styles.backgroundColorMain}>
                                <i className='fa fa-lock' style={styles.whiteText} aria-hidden='true'></i></span>
                            <input type='password' className='form-control' placeholder='Password' id='password'
                                value={state.password} onChange={(e) => onInputChange(e)} aria-describedby='basic-addon1' />
                        </div>
                        <ErrorMessage errors={state.errors.password} />

                        <div className='input-group mb-4'>
                            <span className='input-group-text' id='basic-addon1' style={styles.backgroundColorMain}>
                                <i className='fa fa-lock' style={styles.whiteText} aria-hidden='true'></i></span>
                            <input type='text' className='form-control' placeholder='Confirm Password' id='confirmPassword'
                                value={state.confirmPassword} onChange={(e) => onInputChange(e)} aria-describedby='basic-addon1' />
                        </div>
                        <ErrorMessage errors={state.errors.confirmPassword} />
                        <div className='d-flex justify-content-end mb-3'>
                            <button type='button' className='btn btn-link' onClick={() => onBackPress()}>Back to Login</button>
                        </div>
                        <div className='text-center d-grid gap-2'>
                            <button type='button' className='btn btn-primary' onClick={() => onRegisterPress()}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
