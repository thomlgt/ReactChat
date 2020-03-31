import React, { Fragment } from 'react';

const MessageRender = (props) => {
    return (
        <Fragment>
            {props.auteur} : {props.texte}
            <br/>
        </Fragment>
    );
};

export default MessageRender;