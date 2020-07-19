import React from 'react';
import schema from '../applicationSchema.json';
import { Route, Switch, Redirect } from 'react-router-dom';

import EmployeeBasicDetails from '../components/EmployeeBasicDetails';
import PrimaryDetailsForm from '../components/PrimaryDetailsForm';
import DetailsPreviewForm from '../components/DetailsPreviewForm';

import ContactDetailsForm from '../components/ContactDetailsForm';
export default class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationRoute: schema.applicationRoute
        }
        this.getComponents = this.getComponents.bind(this);
    }
    getComponents() {
        var { applicationRoute } = this.state;

        applicationRoute.forEach(comp => {
            if (comp.name === "Employee Basic Details") {
                comp.component = EmployeeBasicDetails
            }
            else if (comp.name === "Employee Primary Details") {
                comp.component = PrimaryDetailsForm
            }
            else if (comp.name === "Details Preview") {
                comp.component = DetailsPreviewForm
            }
            else if (comp.name === "Contact Details") {
                comp.component = ContactDetailsForm
            }
            else if (comp.redirect) {
                comp.to = "/dashboard"
            }
        });

        this.setState({ applicationRoute: applicationRoute });
    }
    componentDidMount() {
        this.getComponents()
    }
    render() {
        return (
            <React.Fragment>
                <Switch>
                    {this.state.applicationRoute.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />;
                        return <Route path={prop.path} component={prop.component} key={key} />
                    })}
                </Switch>
            </React.Fragment>
        )
    }
}
