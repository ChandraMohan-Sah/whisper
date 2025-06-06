import "./messageContainer.css";

const messages = [
    { type: "receiver", text: "Hey! Are we meeting today like we discussed last night, or do you want to reschedule?", time: "10:30 AM" },
    { type: "sender", text: "Yes, we can meet today. What time suits you best considering your other plans and traffic?", time: "10:32 AM" },
    { type: "receiver", text: "Maybe around 5 PM? That should give us enough time to cover everything and grab a quick bite.", time: "10:33 AM" },
    { type: "sender", text: "5 PM works for me. Should we meet at the usual coffee place near the station or try somewhere new?", time: "10:34 AM" },
    { type: "receiver", text: "Let’s go to the new one you mentioned last time. I’ve heard they have amazing coffee and a great ambiance.", time: "10:35 AM" },
    { type: "sender", text: "Great! I’ll leave around 4:15 just to be safe. The traffic tends to build up after 4.", time: "10:36 AM" },
    { type: "receiver", text: "Perfect. Also, please bring the reports and the updated design drafts we need to review.", time: "10:37 AM" },
    { type: "sender", text: "Already packed them. I also printed a few extra copies just in case we need to make notes.", time: "10:38 AM" },
    { type: "sender", text: "Awesome! See you at 5 then. Don't forget to bring your charger this time 😄", time: "10:39 AM" },
    { type: "sender", text: "Haha noted! I’ve got everything. Today’s meeting is going to be super productive!", time: "10:40 AM" },
    
    // Shorter messages
    { type: "receiver", text: "Alright, bye!", time: "10:41 AM" },
    { type: "sender", text: "Bye 👋", time: "10:42 AM" },
    { type: "receiver", text: "Ping me if you're late.", time: "10:43 AM" },
    { type: "sender", text: "Will do.", time: "10:44 AM" },
    { type: "sender", text: "Take care!", time: "10:45 AM" }
];


export const MessageContainer = () => {
    return (
        <div className="msg-container">
            {messages.map((msg, index) => (
                <div key={index} className={`msg ${msg.type}`}>
                    <img
                        src={
                            msg.type === "receiver"
                                ? "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                : "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        className={msg.type === "receiver" ? "avatar-receiver" : "avatar-sender"}
                        alt={msg.type}
                    />
                    <div className="bubble">
                        <p>{msg.text}</p>
                        <span className="time">{msg.time}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
 