import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/validate'
import renderField from '../utils/renderField'



const ContactDetailsForm = props => {
    const { handleSubmit, previousPage } = props
    return (
        <div className='container container-margin'>
            <h4>Contact Details</h4>
            <form onSubmit={handleSubmit}>
                <Field name="email" type="email" component={renderField} label="Email"/>
                <Field
                  name="mobileNum"
                  type="text"
                  component={renderField}
                  label="Mobile No"
                  placeHolder="Enter Mobile Number"
                />

                <div className="col-sm-12">
                    <ul
                        className="form-group row float-sm-right"
                    >
                        <li className="previous">
                        <button type="button" className="btn btn-secondary" onClick={previousPage}>
                        Previous
        </button>
                        </li>
                        <li className="next">
                        <button type="submit" className="btn btn-primary">
                        Next/Preview
        </button>
                        </li>
                    </ul>

                </div>
                {/* <div>
                    <button type="button" className="btn btn-secondary" onClick={previousPage}>
                        Previous
        </button>
                    <button type="submit" className="btn btn-primary">
                        Next
        </button>
                </div> */}
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'EmployeeBasicDetails', 
    forceUnregisterOnUnmount: true,
    destroyOnUnmount: false,
    validate
})(ContactDetailsForm)
