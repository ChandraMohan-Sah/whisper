import "./profileFriendHeader.css"

export const ProfileFriendHeader = () => {

  const style = {
    fontSize: '13px'
  }

  return (
    <div className="profile-friend-header">
      <div class="user-friend">
        <p>ⓘ Friends </p>
        <br/>
        <div class="friend-info">
          <p style={style}>👥 24 friends</p>
          
          <p style={style}> ⋮ 4 mutual</p>
        </div>
      </div>
      
      <div class="events">
        <p>Events</p>
        <i class="ri-article-line"></i>
      </div>

    </div>
  )
};



