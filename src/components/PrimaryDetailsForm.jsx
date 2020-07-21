import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../utils/validate'
import renderField from '../utils/renderField'
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className='danger'>{`*${error}`}</span> : false
const PrimaryDetailsForm = props => {
  const { handleSubmit } = props
  return (
    <div className='container-fluid container-margin'>
      <h4>Employee Primary Details</h4>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"

        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Age"
          placeHolder="Enter Age"
        />

        <div className='col-md-12 row'>
          <label className='col-md-3'><strong>Gender:</strong></label>
          <div>
            <label>
              <Field
                name="sex"
                component="input"
                type="radio"
                value="male"
              />{' '}
                                        Male
                                            </label>
            <label>
              <Field
                name="sex"
                component="input"
                type="radio"
                value="female"
              />{' '}
                                                Female
                                </label>
            <Field name="sex" component={renderError} />
          </div>
        </div>
        <div>
          <div className="col-sm-12">
            <ul
              className="form-group row float-sm-right"
            >
              <li className="next">
                <button type="submit" className="btn btn-primary">
                  Next
        </button>
              </li>
            </ul>

          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'EmployeeBasicDetails',
  forceUnregisterOnUnmount: true,
  destroyOnUnmount: false,
  validate
})(PrimaryDetailsForm)