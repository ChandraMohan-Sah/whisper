import "./editProfileDetail.css"

export const EditProfileDetail = () => {
  const style = {
    color:'teal'
  }


  return (
    <>


      <div class="edit-profile-detail">
        <p style={style}>Your Name</p>

        <div class="name-edit-box">
          <input type="text" placeholder=" " value="Chandra Mohan Sah" autocomplete="off" />
            <i class="ri-pencil-fill"></i>
        </div>
      </div>

      <div class="edit-profile-detail">
        <p style={style}>About</p>

        <div class="name-edit-box">
          <input type="text" placeholder="Write About Yourself ..." value=" " autocomplete="off" />
            <i class="ri-pencil-fill"></i>
        </div>
      </div>


    </>
  )
};


