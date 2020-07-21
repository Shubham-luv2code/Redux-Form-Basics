import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className='col-md-12 row text-center'>
        <label className='col-md-3 font-weight-bold'>{label}:</label>
        <input className='col-md-6 mb-3' {...input} placeholder={label} type={type} />
        {touched && error && <span className='danger'>{`*${error}`}</span>}
    </div>
)

export default renderField
