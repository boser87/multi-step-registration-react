import React from 'react';
import PropTypes from 'prop-types';

class SelectNumberOfInputs extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        };

        this.handleSelectChange = event => {
            const {value} = event.target
            this.props.handleSelectChange({name: this.props.selectExportName, value: parseInt(value)});
        };

        this.handleInputChange = (event, index) => {
            const {value} = event.target
            this.props.handleInputChange({name: this.props.inputExportName, value: Object.assign([], this.props.inputsValue, {[index]: value})})
        };

    }

    render () {
        const containerStyle = this.props.selectedNumberOfInputs > 0 ? {} : {display: 'none'}

        return (
            <React.Fragment>
                <label htmlFor={this.props.selectName}>
                    How many people will be attending?
                </label>
                <select id={this.props.selectName} name={this.props.selectName} onChange={this.handleSelectChange} value={this.props.selectedNumberOfInputs}>
                    <option id="opt_0" value="0">Please Choose</option>
                    {
                        [...Array(this.props.maxNumberOfInputs)].map((e, i) => <option id={`opt_${i+1}`} key={`opt_${i+1}`} value={i+1}>{i+1}</option>)
                    }
                </select>
                <br/>
                <div id={`${this.props.inputName}_container`} style={containerStyle}>
                    <h3>Please provide full names:</h3>
                    {
                        [...Array(this.props.selectedNumberOfInputs)].map((e, i) =>
                            (<div id={`${this.props.inputName}_${i}_wrap`} key={`${this.props.inputName}_${i}_wrap`}>
                                <label htmlFor={`${this.props.inputName}${i}`}>
                                    Attendee {i+1} Name:
                                </label>
                                <input type="text" id={`${this.props.inputName}${i}`} name={`${this.props.inputName}${i}`} onChange={(e) => this.handleInputChange(e, i)}/>
                            </div>)
                        )
                    }
                </div>
            </React.Fragment>
        );
    }
}

SelectNumberOfInputs.defaultProps = {
};

SelectNumberOfInputs.propTypes = {
    maxNumberOfInputs: PropTypes.number,
    handleSelectChange: PropTypes.func,
    selectExportName: PropTypes.string,
    handleInputChange: PropTypes.func,
    inputExportName: PropTypes.string,
    selectedNumberOfInputs: PropTypes.number,
    inputsValue: PropTypes.arrayOf(PropTypes.string),
    selectName: PropTypes.string,
    inputName: PropTypes.string
};

export default SelectNumberOfInputs;
