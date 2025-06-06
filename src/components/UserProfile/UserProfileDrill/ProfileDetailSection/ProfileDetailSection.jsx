import "./profileDetailSection.css"

export const ProfileDetailSection = () => {
  const style = {
    fontSize: '13px'
  };


  return (
    <>
      <div className="profile-detail-section">
        <div className="user-name">
          <p>ⓘ Alex Great</p><br />
          <p style={style}>📨 csah9628@gmail.com</p>
        </div>

        <div class="additional-buttons">
          <div class="add-friend">
            <p>Friends</p>
            <i class="ri-user-follow-fill"></i>
          </div>
          <div class="add-friend">
            <p>Message</p>
            <i class="ri-chat-3-fill"></i>
          </div>
          <div class="add-friend">
            <i class="ri-more-2-fill"></i>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
};