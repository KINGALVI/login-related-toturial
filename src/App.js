import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './Firebase/Firebase';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({})
  const GoogleProvider = new GoogleAuthProvider();

  const GithubProvider = new GithubAuthProvider();

  const HandeleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.log('Error : ', error);
      })
  }

  const HandelGithubSignIn = () => {
    signInWithPopup(auth, GithubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })

      .catch(error => { console.log('Error : ', error) });
  }

  const HandelSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        user.uid ?
          <div>
            <button onClick={HandelSignOut}>
              SIGN OUT
            </button>
          </div>
          :
          <div>
            <button onClick={HandeleGoogleSignIn}>SIGN IN GOOGLE</button>
            <button onClick={HandelGithubSignIn}>GIT-HUB SIGN IN</button>
          </div>
      }

      {
        user.uid &&
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
