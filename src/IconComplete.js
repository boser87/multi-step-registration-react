import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

class IconComplete extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        };
    }

    render () {
        return (
            <React.Fragment>
                <div className="icon-container" style={{display: this.props.isComplete ? '' : 'none'}}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
            </React.Fragment>
        );
    }
}

IconComplete.defaultProps = {
    isComplete: false
};

IconComplete.propTypes = {
    isComplete: PropTypes.bool
};

export default IconComplete;
