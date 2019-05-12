import './App.css';
import React from 'react';
import SelectNumberOfInputs from "./SelectNumberOfInputs";
import RadioWithInput from "./RadioWithInput";
import Checkbox from "./Checkbox";
import IconComplete from "./IconComplete";

class MasterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isStep1Complete: false,
            isStep2Complete: false,
            attendeesNumber: 0,
            attendeesNames: [],
            withCompanyName: null,
            companyName: "",
            withSpecialAccommodations: null,
            explainSpecialAccommodations: "",
            readyToRock: false
        }

        this.initialState = this.state;
    }

    isStep1Complete = () => {
        this.setState({
            isStep1Complete:
                this.state.attendeesNumber > 0 &&
                this.state.attendeesNames.length === this.state.attendeesNumber &&
                this.state.attendeesNames.slice(0, this.state.attendeesNumber).every(item => item.length > 0)
        }, () => {
            this.isStep2Complete();
        })
    }

    isStep2Complete = () => {
        this.setState({
            isStep2Complete:
                this.state.isStep1Complete &&
                this.state.withCompanyName != null &&
                (this.state.withCompanyName === false || (this.state.withCompanyName === true && this.state.companyName.length > 0)) &&
                this.state.withSpecialAccommodations != null &&
                (this.state.withSpecialAccommodations === false || (this.state.withSpecialAccommodations === true && this.state.explainSpecialAccommodations.length > 0))
        })
    }

    handleChange = event => {
        const {name, value} = event
        this.setState({
            [name]: value
        }, () => {
            this.isStep1Complete();
            this.isStep2Complete();
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.resetState()
    }

    resetState = () => {
        this.setState(this.initialState)
    }

    render() {
        return (
            <React.Fragment>
                <h1>Seminar <span>Registration</span></h1>
                <form action="#" method="post">
                    <fieldset id="step_1" className="step1">
                        <legend>Step 1</legend>
                        <SelectNumberOfInputs
                            maxNumberOfInputs={5}
                            handleSelectChange={this.handleChange}
                            handleInputChange={this.handleChange}
                            selectExportName={"attendeesNumber"}
                            inputExportName={"attendeesNames"}
                            selectedNumberOfInputs={this.state.attendeesNumber}
                            inputsValue={this.state.attendeesNames}
                            selectName={"num_attendees"}
                            inputName={"attendee"}/>
                        <IconComplete
                            isComplete={this.state.isStep1Complete} />
                    </fieldset>
                    <fieldset id="step_2" disabled={!this.state.isStep1Complete} className="step2" style={{opacity: this.state.isStep1Complete ? 1 : 0.5}}>
                        <legend>Step 2</legend>
                        <RadioWithInput
                            handleRadioChange={this.handleChange}
                            handleInputChange={this.handleChange}
                            radioExportName={"withCompanyName"}
                            radioValue={this.state.withCompanyName}
                            inputExportName={"companyName"}
                            inputValue={this.state.companyName}
                            title={"Would you like your company name on badges?"}
                            name={"company_name"} />
                        <RadioWithInput
                            handleRadioChange={this.handleChange}
                            handleInputChange={this.handleChange}
                            radioExportName={"withSpecialAccommodations"}
                            radioValue={this.state.withSpecialAccommodations}
                            inputExportName={"explainSpecialAccommodations"}
                            inputValue={this.state.explainSpecialAccommodations}
                            title={"Special accommodations?"}
                            isTextArea={true}
                            name={"special_accommodations"} />
                        <IconComplete
                            isComplete={this.state.isStep2Complete} />
                    </fieldset>
                    <fieldset id="step_3" disabled={!this.state.isStep2Complete} className="step3" style={{opacity: this.state.isStep2Complete ? 1 : 0.5}}>
                        <legend>Step 3</legend>
                        <Checkbox
                            handleCheckboxChange={this.handleChange}
                            checkboxExportName={"readyToRock"}
                            checkboxValue={this.state.readyToRock}
                            title={"Are you ready to rock?"}
                            name={"rock"}
                        />
                        <input type="submit" id="submit_button" disabled={!this.state.readyToRock} onClick={this.handleSubmit} value="Complete Registration"/>
                    </fieldset>
                </form>
            </React.Fragment>
        );
    }
}

export default MasterForm;
