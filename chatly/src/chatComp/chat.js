import React, { useState, useEffect } from "react";
import ChatDisplay from './chatDisplay'
import axios from "axios";


function Chatlog () {
    const [chat, setChat] = useState('');
    // useEffect to avoid continuous loop thru api

    useEffect(() => {
        const getChat = (async () => {
            const chat = await axios.get(
                "https://redventures.github.io/chatly-ifier/api/v1.json")
            .then ((response) => {
                const allChat = response.data
                setChat(allChat.data);
            });
            
        });
        getChat();
        }, []);

        return(
            <ChatDisplay chat={chat} />
        )
        
}

export default Chatlog;