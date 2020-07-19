import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className='row'>
        <div className='col-md-3'>
            <strong><label>{label}:</label></strong>
        </div>
        <div className='col-md-9'>
            <div>
                <input {...input} placeholder={label} type={type}/>
                {touched && error && <span className='danger'>{`*${error}`}</span>}
            </div>
        </div>
    </div>
)

export default renderField
