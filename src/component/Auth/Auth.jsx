import { useState } from "react";
import { app } from "../../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(auth?.currentUser?.providerData);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signUP = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign Up successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Sign In successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  const SignOut = async () => {
    try {
      await signOut(auth);
      console.log("Sign Out  Successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Goole signIn SuccessFully completed");
    } catch (error) {
      console.log("Google Signin " + error.message);
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={signUP}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
        <button onClick={SignOut}>Sign Out</button>
        <button onClick={SignInWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  );
};

export default Auth;
