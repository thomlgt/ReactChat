import React, { Fragment } from 'react';

const EnterMessage = (props) => {
    return (
        <Fragment>
            <form onSubmit={props.submit}>
                <input type="text" className="message" onChange={props.change}/>
                <button>Envoyer</button>
            </form>
        </Fragment>
    );
};

export default EnterMessage;