import React, { Fragment } from 'react';
import EnterMessage from '../components/EnterMessage';
import MessageList from '../components/MessageList';
import { useState } from 'react';
import { Message } from '../models/Message';

const Home = () => {

    //Message qu'est en train de rentrer l'utilisateur
    const [message, setMessage] = useState({texte : "null", auteur : "null", date : "null"});

    //State global qui enregistre tous les messages
    const [state, setState] = useState([]);

    const handleChange = (event) => {
        setMessage({auteur : "Thomas", texte : event.target.value, date : Date.now()});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setState([...state, message]);
    }

    return (
        <Fragment>
            <EnterMessage change={handleChange} submit={handleSubmit}/>
            <MessageList messages={state}/>
        </Fragment>
    );
};

export default Home;