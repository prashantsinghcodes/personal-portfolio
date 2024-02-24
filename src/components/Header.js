import '../Header.css';
import Profile from './Profile';
import profile_pic from '../profile_pic.jpg';
function Header() {
    return (
        <div className="Header">
            <Profile profile_pic={profile_pic} />
        </div>
    );
}

export default Header;