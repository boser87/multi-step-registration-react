import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        };

        this.handleCheckboxChange = event => {
            const {checked} = event.target
            this.props.handleCheckboxChange({name: this.props.checkboxExportName, value: checked});
        };
    }

    render () {
        return (
            <React.Fragment>
                <label htmlFor={this.props.name}>
                    {this.props.title}
                </label>
                <input type="checkbox" id={this.props.name} checked={this.props.checkboxValue} onChange={this.handleCheckboxChange} />
            </React.Fragment>
        );
    }
}

Checkbox.defaultProps = {
    isTextArea: false
};

Checkbox.propTypes = {
    handleCheckboxChange: PropTypes.func,
    checkboxExportName: PropTypes.string,
    checkboxValue: PropTypes.bool,
    name: PropTypes.string
};

export default Checkbox;
