import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import app from './Firebase/Firebase';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  /* How can we use third party authentication for login or regester method*/

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

  /* How can we use normal authentication for login or regester method*/

  const HandleRegister = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    console.log(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log('error : ', error)
      })
  }

  const HandelEmailchange = event => {
    console.log(event.target.value)
  }

  const HandelPasswordchange = event => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      {/* How can we use third party authentication for login or regester method*/}
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
      <br />
      {/* How can we use normal authentication for login or regester method*/}
      <br />
      <form onSubmit={HandleRegister}>
        <input onBlur={HandelEmailchange} type="email" name="email" id="" placeholder="Your Email" required/>
        <br />
        <input onBlur={HandelPasswordchange} type="password" name="password" id="" placeholder='Your Password' required/>
        <br />
        <button type="submit">Register</button>
      </form>

    </div>
  );
}
export default App;
