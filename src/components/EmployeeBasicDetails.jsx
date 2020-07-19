import { reduxForm, Field } from 'redux-form';
import React from 'react';
import PrimaryDetailsForm from './PrimaryDetailsForm';
import ContactDetailsForm from './ContactDetailsForm';
import DetailsPreviewForm from './DetailsPreviewForm';

export default class EmployeeBasicDetails extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.showSubmittedDetails = this.showSubmittedDetails.bind(this)
        this.state = {
            pageNo: 1
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
    render() {
        const { pageNo } = this.state;
        return (
            <React.Fragment>
                <div className="card">
                <div className="card-body">
                
                <div>
                    {pageNo === 1 && <PrimaryDetailsForm onSubmit={this.nextPage} />}
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
            </React.Fragment>
        )
    }
}
