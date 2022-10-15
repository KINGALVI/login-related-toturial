import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './Firebase/Firebase';

const auth = getAuth(app);

function App() {

  const Provider = new GoogleAuthProvider();

  const HandeleGoogleSignIn = () => {
    signInWithPopup(auth, Provider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log('Error:', error);
      })
  }

  return (
    <div className="App">
      <button onClick={HandeleGoogleSignIn}>GO TO GOOGLE</button>
    </div>
  );
}

export default App;
