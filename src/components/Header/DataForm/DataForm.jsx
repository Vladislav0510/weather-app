import React from 'react';
import {Formik, Field, Form} from "formik";
import './DataForm.scss'

const DataForm = (props) => {
    return (
        <Formik
            initialValues={{
                city: ''
            }}
            onSubmit={(values, {setSubmitting}) => {
                props.onSubmit(values.city)
                setSubmitting(false)
            }}
        >
            {({values, handleChange, handleBlur}) => {
                return <Form>
                    <Field  className='data-form' type='text' placeholder='Enter city' name='city' value={values.city}
                    onChange={handleChange} onBlur={handleBlur} autoComplete="off"/>

                </Form>
            }}
        </Formik>
    );
};

export default DataForm;