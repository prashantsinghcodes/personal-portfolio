import './App.css';
import profile_pic from './profile_pic.jpg';
import './Header.css';
import './profile.css';

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <div className='Header'>
          <img src={profile_pic} alt='profile_pic' className='profile-pic' />
      </div>
      <div className='Body'>
      <div className='table'>
      <table>
        <tbody>
          <tr className='row-style'>
            <td><strong>Full Name</strong></td>
            <td>Prashant Singh</td>
          </tr>
          <tr className='row-style'>
            <td><strong>Current Organization</strong></td>
            <td>Airtel Payments Bank</td>
          </tr>
          <tr className='row-style'>
            <td><strong>Position</strong></td>
            <td>Software Development Engineer - II</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
      <div className='Footer'>

      </div>
    </div>
  );
}

export default App;
