import React from 'react';
import PropTypes from 'prop-types';

class RadioWithInput extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        };

        this.handleRadioChange = event => {
            const {value} = event.target
            this.props.handleRadioChange({name: this.props.radioExportName, value: (value === "true")});
        };

        this.handleInputChange = event => {
            const {value} = event.target
            this.props.handleInputChange({name: this.props.inputExportName, value: value});
        };

    }

    render () {
        const wrapStyle = this.props.radioValue ? {} : {display: 'none'}

        return (
            <React.Fragment>
                <p>{this.props.title}</p>
                <input type="radio" id={`${this.props.name}_toggle_group_on`} name={`${this.props.name}_toggle_group`} value={true} checked={this.props.radioValue === true} onChange={this.handleRadioChange}/>
                <label htmlFor={`${this.props.name}_toggle_group_on`}>Yes</label>
                &emsp;
                <input type="radio" id={`${this.props.name}_toggle_group_off`} name={`${this.props.name}_toggle_group`} value={false} checked={this.props.radioValue === false} onChange={this.handleRadioChange}/>
                <label htmlFor={`${this.props.name}_toggle_group_off`}>No</label>
                    {(() => {
                        if(!this.props.isTextArea) {
                           return (
                               <div id={`${this.props.name}_wrap`} style={wrapStyle}>
                                    <label htmlFor={`${this.props.name}_text`}>
                                        Company Name:
                                    </label>
                                    <input type="text" id={`${this.props.name}_text`} onChange={this.handleInputChange} value={this.props.inputValue}/>
                                </div>
                           )
                        } else {
                            return (
                                <div id={`${this.props.name}_wrap`} style={wrapStyle} className="label-textarea-wrap">
                                    <label htmlFor={`${this.props.name}_text`}>
                                        Please explain below:
                                    </label>
                                    <textarea rows="10" cols="50" id={`${this.props.name}_text`} onChange={this.handleInputChange} value={this.props.inputValue}></textarea>
                                </div>
                            )
                        }
                    })()}
            </React.Fragment>
        );
    }
}

RadioWithInput.defaultProps = {
    isTextArea: false
};

RadioWithInput.propTypes = {
    isTextArea: PropTypes.bool,
    handleRadioChange: PropTypes.func,
    radioExportName: PropTypes.string,
    radioValue: PropTypes.bool,
    handleInputChange: PropTypes.func,
    inputExportName: PropTypes.string,
    inputValue: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string
};

export default RadioWithInput;
