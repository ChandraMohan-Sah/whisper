import "./messageFooter.css"

export const MessageFooter = () => {
  return (
    <div className="msg-footer">
      <div className="msg-footer-detail">
        <i className="ri-add-circle-fill  attachment"></i>
        <i className="ri-emotion-fill  emoji"></i>
        <input type="text" className="chat-input" placeholder="Type a message..." />
          <button className="send-btn">
            Send
          </button>
      </div>
    </div>
  )
};