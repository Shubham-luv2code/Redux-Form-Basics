import { reduxForm, Field } from 'redux-form';
import React from 'react';
import PrimaryDetailsForm from './PrimaryDetailsForm';
import ContactDetailsForm from './ContactDetailsForm';
import DetailsPreviewForm from './DetailsPreviewForm';
import {getEmpActionCreator,getUserGroupCreator} from './../Store/Action/actionCreator';
import { connect } from 'react-redux';
import { debounce } from 'lodash'
import Loader from './../Loader/Loader'
import AddToUserGroup from './AddToUserGroup'
import validate from '../utils/validate'
//import { Field, reduxForm, formValueSelector, getFormValues } from 'redux-form'
import renderField from '../utils/renderField'
class EmployeeBasicDetails extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.showSubmittedDetails = this.showSubmittedDetails.bind(this);
        this.validateEmpId = this.validateEmpId.bind(this);
        this.addToUserGroup = this.addToUserGroup.bind(this);

        this.state = {
            pageNo: 1,
            empId: '',
            isValidated: false,
            showModal: false
        }
    }
    componentDidMount(){
        this.props.getUserGroupCreator()
        //console.log(this.props && this.props.reducerReturn && this.props.reducerReturn.empData,'reducerReturn.empData')
    }
    addToUserGroup (){
        if(!this.state.showModal){
            this.setState({ showModal : !this.state.showModal },()=>{
                return <AddToUserGroup showModal={this.state.showModal}/>
            })
        }
        
    }
    nextPage() {
        this.setState({ pageNo: this.state.pageNo + 1 })
    }

    previousPage() {
        this.setState({ pageNo: this.state.pageNo - 1 })
    }
    showSubmittedDetails(){
        console.log(this.props,'props')
    }
    enterEmpId = (e) => {
        //e.persist();
        
        if (!this.debouncedFn) {
          this.debouncedFn =  debounce(() => {
            this.setState({empId: e.target.value})
             let empId = e.target.value;
             this.validateEmpId(empId)
          }, 500);
        }
        this.debouncedFn();
    }
    async validateEmpId(empId){
        if(empId !== ''){
            await Promise.allSettled([this.props.getEmpActionCreator(empId,this.props.userGroupData)]).then((data) => {
                this.setState({isValidated:true});
            })
        }
        else{
            this.setState({isValidated:false})
        }
        
    }
    render() {
        const { pageNo,empId,isValidated } = this.state;
        return (
            <React.Fragment>
                <Loader show={this.props.isLoading}/>
                <div className='container-fluid container-margin'>
                <div className="card">
                <div className="card-body">

                <div className='col-md-12 text-center'>
                    {/* <label htmlFor='empId' className='col-md-3 font-weight-bold' >Employee ID:</label> */}
                    {/* <input name='empId' className='col-md-3' disabled={pageNo === 1 ? false : true} placeholder='Enter User ID' onChange={(e)=>{this.enterEmpId(e)}}/> */}
                    <Field
                  name="empId"
                  type="text"
                  component={renderField}
                  label="Employee ID"
                  placeHolder="Enter Employee Id"
                  onChange={(e)=>{this.enterEmpId(e)}}
                />
                    {
                        isValidated && <span> {this.props.validEmp ? <i className='fa fa-check-circle col-md-3'>&nbsp;Valid Employee</i>: <i className='fa fa-times-circle col-md-3'>&nbsp;Sorry, InValid Employee ID entered!</i>}</span>
                    }<br/>
                    <small ><strong>Tip:</strong> Employee ID in user group ranges from 1-5(Rest will have disabled Next)</small>
                    {   this.props.validEmp && !this.props.allowedAction &&
                        <button class="col-md-3 btn btn-primary" type="button" onClick={this.addToUserGroup}>Add to User group</button>
                        
                    }
                </div>
                {this.addToUserGroup()}
                <div>
                    {pageNo === 1 && empId !== '' && this.props.validEmp && <PrimaryDetailsForm onSubmit={this.nextPage} allowedAction={this.props.allowedAction}/>}
                    {pageNo === 2 && (
                        <ContactDetailsForm
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />
                    )}
                    {pageNo === 3 && (
                        <DetailsPreviewForm
                            previousPage={this.previousPage}
                            onSubmit={this.showSubmittedDetails}
                        />
                    )}
                </div>
                </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
	console.log(state.reducerReturn.empData,"state.reducerReturn.empData")
	return {
        empData: state.reducerReturn.empData,
        validEmp: state.reducerReturn.validEmp,
        isLoading: state.reducerReturn.isLoading,
        userGroupData: state.reducerReturn.userGroupData,
        allowedAction: state.reducerReturn.allowedAction,
	 }
}

const mapDispatchToProps = dispatch => {
    return {
        getEmpActionCreator: (id,userGroupData) => dispatch(getEmpActionCreator(id,userGroupData)),
        getUserGroupCreator: () => dispatch(getUserGroupCreator())
    }
}
EmployeeBasicDetails = connect(mapStateToProps, mapDispatchToProps)(EmployeeBasicDetails);
export default reduxForm({
    form: 'EmployeeBasicDetails',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(EmployeeBasicDetails);
//export default connect(mapStateToProps, mapDispatchToProps)(EmployeeBasicDetails);