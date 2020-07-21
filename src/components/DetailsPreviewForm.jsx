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
          <div className='col-md-12 row'>
              <label className='col-md-3 font-weight-bold'>First Name:</label>
              <Field className='col-md-9' disabled name="firstName" component='input' />
          </div>
          <div className='col-md-12 row'>
              <label className='col-md-3 font-weight-bold'>Last Name:</label>
              <Field className='col-md-9' disabled name="lastName" component='input' />
          </div>
          <div className='col-md-12 row'>
              <label className='col-md-3 font-weight-bold'>Age:</label>
              <Field className='col-md-9'  disabled name="age" component='input' />
          </div>
          <div className='col-md-12 row'>
              <label className='col-md-3 font-weight-bold'>Gender:</label>
              <Field className='col-md-9' disabled name="sex" component='input' />
          </div>
          <div className='col-md-12 row'>
              <label className='col-md-3 font-weight-bold'>Email:</label>
              <Field className='col-md-9' disabled name="email" component='input' />
          </div>
          <div className='col-md-12 row'>
              <label className='col-md-3 font-weight-bold'>Mobile No:</label>
              <Field className='col-md-9' disabled name="mobileNum" component='input' />
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