import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    const icon = (props.type === 'success') ? 'thumbs up' : (props.type === 'error') ? 'warning sign' : 'info';

    return (
        <div className={`ui icon message ${props.type}`}>
            <i className={`icon ${icon}`} />
            <div className='content'>
                <div className='header'>{props.header}</div>
                <p>{props.content}</p>
            </div>
        </div>
    );
};

Message.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    type: PropTypes.string
};

Message.defaultProps = {
    type: 'info'
};

export default Message;