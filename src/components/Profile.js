import '../profile.css';
function Profile(props) {
    return (
        <div className="profile">
            <img src={props.profile_pic} alt="profile pic" className="profile-pic"/>
        </div>
    );
}

export default Profile;