import { reduxForm, Field } from 'redux-form';
import React from 'react';
import PrimaryDetailsForm from './PrimaryDetailsForm';
import ContactDetailsForm from './ContactDetailsForm';
import DetailsPreviewForm from './DetailsPreviewForm';
import {getEmpActionCreator} from './../Store/Action/actionCreator';
import { connect } from 'react-redux';

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
            validEmp: false,
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
    enterEmpId = (e) =>{
        if(e.target.name === 'empId'){
            this.setState({empId: e.target.value});
        }
    }
    async validateEmpId(){
        await Promise.allSettled([this.props.getEmpActionCreator(this.state.empId)]).then((data) => {
            console.log(this.props.empData,'empData')
            this.setState({isValidated:true});
            if(Object.keys(this.props.empData).length !== 0){
                this.setState({validEmp: true})
            }
            else{
                this.setState({validEmp: false})
            }
        })
        
    }
    render() {
        const { pageNo,empId,validEmp,isValidated } = this.state;
        return (
            <React.Fragment>
                <div className='container-fluid container-margin'>
                <div className="card">
                <div className="card-body">

                <div className='col-md-12 text-center'>
                    <label htmlFor='empId' className='col-md-3 font-weight-bold' >Employee ID:</label>
                    <input name='empId' className='col-md-3' disabled={pageNo === 1 ? false : true} placeholder='Enter User ID' onChange={(e)=>{this.enterEmpId(e)}} onBlur={this.validateEmpId}/>
                    {
                        isValidated && <span> {validEmp ? <i className='fa fa-check-circle col-md-3'>&nbsp;Valid Enployee</i>: <i className='fa fa-times-circle col-md-3'>&nbsp;Sorry, Inalid Enployee ID entered!</i>}</span>
                    }<br/>
                    <small ><strong>Tip:</strong> Valid Employee ID is in range of 1-10</small>

                </div>
                <div>
                    {pageNo === 1 && empId !== '' && validEmp && <PrimaryDetailsForm onSubmit={this.nextPage} />}
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
		empData: state.reducerReturn.empData
	 }
}

const mapDispatchToProps = dispatch => {
    return {
		getEmpActionCreator: (id) => dispatch(getEmpActionCreator(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeBasicDetails);