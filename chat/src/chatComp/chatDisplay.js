import "./style.css"
import moment from "moment";

export default function ChatDisplay(props) {
    console.log(props.chat, "THE GOODS--")
    const transcript = props.chat;
    // ----- condtional rendering will be used -----
    // added optional chaining to theMessages
    const theMessages = transcript && transcript?.messages;

    // Displaying the Date
    const date = () => {
        // would convert date using moment--
        const theDate = transcript.conversationDate;
        const newDate= moment(theDate).format("dddd, MMMM Do YYYY");
        console.log(theDate, "what time");

        return (
            <div className="wrapper">
                <div className="lineup">
                    {/* flexbox or grid to seperate the date and header to display on one line */}
                    <div className="headline" style={{color:"#ee8065d2"}}><h1>CHAT TRANSCRIPT</h1></div>
                    <div className="date" style={{color:"#9bd0e5"}}><h1> {newDate}</h1></div>
                </div>            
            </div>
        )


    };

    // Displaying the chat
    const chatMessages = () => {


        return (
                <div className="container">

                        <div className="mygelAvatar1">
                            <img src= {theMessages[0]?.image} style={{float: 'left', borderRadius :'180px', padding:'10px'}} alt="User Avatar"
                            className="haloM"/>
                        </div>

                        <div className="mygelChat1">
                            <p>{theMessages[0]?.message}</p>
                            <h3 style={{color:"#c7754f"}}>{theMessages[0]?.username}</h3>
                            {/* --- timestamp conversion needed using moment but since its not mapped over difficulties converting ---*/}
                            <p>{theMessages[0]?.timestamp}</p>
                        </div>

                        <div className="charlieAvatar1">
                            <img src= {theMessages[1]?.image} style={{float: 'right', borderRadius :'180px', padding:'10px'}} alt="User Avatar"
                            className="haloC"/>
                        </div>

                        <div className="charlieChat1">
                            <p>{theMessages[1]?.message}</p>
                            {/* --- timestamp conversion needed using moment (npm install)  ---*/}
                            <h3 style={{color:"#c7754f"}}>{theMessages[1]?.username}</h3>
                            <p>{theMessages[1]?.timestamp}</p>
                        </div>

                        <div  className="mygelAvatar2">
                            <img src= {theMessages[2]?.image} style={{float: 'left', borderRadius :'180px', padding:'10px'}} alt="User Avatar"
                            className="haloM"/>
                        </div>

                        <div className="mygelChat2">
                             <p>{theMessages[2]?.message}</p>
                                {/* --- timestamp conversion needed using moment(npm install) ---*/}
                            <h3 style={{color:"#c7754f"}}>{theMessages[2]?.username}</h3>
                            <p>{theMessages[2]?.timestamp}</p>
                        </div>

                        <div className="charlieAvatar2">
                                <img src= {theMessages[3]?.image} style={{float: 'right', borderRadius :'180px', padding:'10px'}} alt="User Avatar"
                                className="haloC"/>
                        </div>

                        <div className="charlieChat2">    
                             <p>{theMessages[3]?.message}</p>
                                {/* --- timestamp conversion needed using moment (npm install)  ---*/}
                            <h3 style={{color:"#c7754f"}}>{theMessages[3]?.username}</h3>
                            <p>{theMessages[3]?.timestamp}</p>
                        </div>
                </div>  
        );
    };



    return (
        <>
        {date(props)}
        {chatMessages(props)}
        </>
    )
};