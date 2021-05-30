export default function ChatDisplay(props) {
    console.log(props.chat, "THE GOODS--")
    const transcript = props.chat;
    const theMessages = transcript.messages;
    // const boolean = theMessages.focus.type();


    const date = () => {
        const theDate = transcript.conversationDate;
        console.log(theDate, "what time");

        return (
            <div>
                <h1>
                   {theDate}
                </h1>
            </div>
        )
    };

    const msgs = () => {
        console.log(theMessages, "digging");
        // console.log(theMessages.type(), "is it true??")
        // const theMsg = transcript.focused;
        // console.log(props.focused,"what was said")

        // ----- styles for inline styling -----
        
                            const focused = {
                                color: "white",
                                backgroundColor: "Blue",
                                padding: "10px",
                                marginLeft: "800px"
                                // false:{
                                //     color: "white",
                                //     backgroundColor: "DodgerBlue",
                                //     padding: "10px",
                                //     marginRight: "1000px"
                                // },
                                // true:{
                                //     color: "white",
                                //     backgroundColor: "Blue",
                                //     padding: "10px",
                                //     marginLeft: "1000px"
                                // }

                            };

        // ------ END of inline style setting ----
        return (
            <div>
                
                {theMessages && theMessages.map(theMessages => {
            
                    return (                    
                    <div key={theMessages.timestamp}>
                         <div>
                            <img src= {theMessages.image} alt="User"/>
                            {theMessages.username}
                            {theMessages.message}
                         </div>

                        {/* using an anynomus function to allow if else statment */}
                        {/* {(({}) => {

                            //  {`banner ${active ? "active" : ""}
                            if (theMessages === false) {
                                console.log(theMessages, "look here--")
                                return (
                                    <div style={unfocused}>
                                        <img src= {theMessages.image} alt="User"/>
                                        {theMessages.username}
                                        {theMessages.message}
                                    </div>
            
                                )
                            } else if (theMessages.focused === true) {
                                return (
                                    <div style={focused}>
                                    <img src= {theMessages.image} alt="User"/>
                                    {theMessages.username}
                                    {theMessages.message}
                                </div>
                                )
                            }
                        })}  */}
                        
                        {/* <div style={focused}>
                        <img src= {theMessages.image} alt="User"/>
                        {theMessages.username}
                        {theMessages.message}
                        </div> */}

                    </div>)
                })}
            </div>
        )

    };

    return (
        <>
        {date(props)}
        {msgs(props)}
        </>
    )
};