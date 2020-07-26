import { reduxForm, Field } from 'redux-form';
import React from 'react';
import PrimaryDetailsForm from './PrimaryDetailsForm';
import ContactDetailsForm from './ContactDetailsForm';
import DetailsPreviewForm from './DetailsPreviewForm';
import {getEmpActionCreator} from './../Store/Action/actionCreator';
import { connect } from 'react-redux';
import { debounce } from 'lodash'
import Loader from './../Loader/Loader'
class EmployeeBasicDetails extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.showSubmittedDetails = this.showSubmittedDetails.bind(this);
        this.validateEmpId = this.validateEmpId.bind(this);

        this.state = {
            pageNo: 1,
            empId: '',
            isValidated: false
        }
    }
    componentDidMount(){
        
        //console.log(this.props && this.props.reducerReturn && this.props.reducerReturn.empData,'reducerReturn.empData')
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
        e.persist();
        
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
            await Promise.allSettled([this.props.getEmpActionCreator(empId)]).then((data) => {
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
                    <label htmlFor='empId' className='col-md-3 font-weight-bold' >Employee ID:</label>
                    <input name='empId' className='col-md-3' disabled={pageNo === 1 ? false : true} placeholder='Enter User ID' onChange={(e)=>{this.enterEmpId(e)}}/>
                    {
                        isValidated && <span> {this.props.validEmp ? <i className='fa fa-check-circle col-md-3'>&nbsp;Valid Enployee</i>: <i className='fa fa-times-circle col-md-3'>&nbsp;Sorry, Inalid Enployee ID entered!</i>}</span>
                    }<br/>
                    <small ><strong>Tip:</strong> Valid Employee ID is in range of 1-10</small>

                </div>
                <div>
                    {pageNo === 1 && empId !== '' && this.props.validEmp && <PrimaryDetailsForm onSubmit={this.nextPage} />}
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
        isLoading: state.reducerReturn.isLoading
	 }
}

const mapDispatchToProps = dispatch => {
    return {
		getEmpActionCreator: (id) => dispatch(getEmpActionCreator(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeBasicDetails);