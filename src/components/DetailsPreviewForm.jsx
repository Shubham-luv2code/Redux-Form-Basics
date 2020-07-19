import React from 'react'
import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form'
import validate from '../utils/validate'
import renderField from '../utils/renderField'

// const selector = formValueSelector('EmployeeBasicDetails')
// const values = selector(state, 'firstName', 'lastName', 'email','sex')
 const values = getFormValues('EmployeeBasicDetails');
 const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className='danger'>{`*${error}`}</span> : false
const DetailsPreviewForm = props => {
  const { onSubmit, handleSubmit, previousPage } = props
  return (
    <div className='container container-margin'>
      <h4>Preview Details</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='row'>
            <div className='col-md-3'>
              <label><strong>First Name:</strong></label>
            </div>
            <div className='col-md-9'>
              <Field className='preview' disabled name="firstName" component='input' />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <label><strong>Last Name:</strong></label>
          </div>
          <div className='col-md-9'>
            <Field className='preview' className='preview' disabled name="lastName" component='input'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <label><strong>Sex:</strong></label>
          </div>
          <div className='col-md-9' >
            <Field className='preview' disabled name="sex" component='input' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <label><strong>Email:</strong></label>
          </div>
          <div className='col-md-9' >
            <Field className='preview' disabled name="email" component='input'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <label><strong>Mobile Number:</strong></label>
          </div>
          <div className='col-md-9' >
            <Field className='preview' disabled name="mobileNum" component='input' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <label><strong>Age:</strong></label>
          </div>
          <div className='col-md-9' >
            <Field className='preview' disabled name="age" component='input'/>
          </div>
        </div>

        <div className='col-md-12 container-margin'>
          <label htmlFor="employed">
            <Field
              name="acknowledgement"
              id="acknowledgement"
              component="input"
              type="checkbox"
            />&nbsp;
            <strong>Acknowledgement:</strong>&nbsp;&nbsp;Please confirm above entered details are correct.
                                            </label>
                                            <Field name="acknowledgement" component={renderError} />
        </div>
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
                Submit Details
        </button>
            </li>
          </ul>

        </div>

      </form>
    </div>
  )
}
export default reduxForm({
  form: 'EmployeeBasicDetails',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(DetailsPreviewForm)