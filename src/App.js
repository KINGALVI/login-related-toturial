import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './Firebase/Firebase';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({})
  const Provider = new GoogleAuthProvider();

  const HandeleGoogleSignIn = () => {
    signInWithPopup(auth, Provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.log('Error:', error);
      })
  }

  const HandleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        user.email ?
          <button onClick={HandleGoogleSignOut}>
            GO OUT GOOGLE
          </button>
          :
          <button onClick={HandeleGoogleSignIn}>GO TO GOOGLE</button>
      }

      {
        user.email &&
        <div>
          <br />
          <img src={user.photoURL} alt="" />
          <p>User Name : {user.displayName}</p>
        </div>
      }
    </div>
  );
}
export default App;
