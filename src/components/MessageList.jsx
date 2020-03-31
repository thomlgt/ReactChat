import React, { Fragment } from 'react';
import MessageRender from './MessageRender';

const MessageList = (props) => {

    return (
        <Fragment>
            {props.messages.map(item => <MessageRender date={item.date} auteur={item.auteur} texte={item.texte}/>)}
        </Fragment>
    );
};

export default MessageList;