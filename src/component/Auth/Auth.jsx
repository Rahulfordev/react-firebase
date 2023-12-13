import { useState } from "react";
import { app } from "../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(auth?.currentUser?.providerData);
  const auth = getAuth(app);

  const signUP = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign Up successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const signIn = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     console.log("Sign In successful");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const SignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     console.log("Sign Out  Successful");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
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
      {/* <button onClick={signIn}>Sign In</button>
      <button onClick={SignOut}>Sign Out</button> */}
    </div>
  );
};

export default Auth;
