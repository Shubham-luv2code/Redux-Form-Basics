const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.mobileNum) {
      errors.mobileNum = 'Required'
    } else if (!/^([6-9]\d{9})$/.test(values.mobileNum)) {
      errors.mobileNum = 'Invalid mobile number, must be 10 digits[Starts with 6-9]'
    }
    if (!values.sex) {
      errors.sex = 'Required'
    }
    if (!values.age) {
      errors.age   = 'Required'
    }
    if (!values.acknowledgement) {
      errors.acknowledgement   = 'Please accept the declaration'
    }
    return errors
  }
  
  export default validate
  