import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../../utils/firebase/firebase.utils";
import SignUp from "../../sign-up/sign-up.ccomponent";

const signIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign In with google popup</button>
        <SignUp />
    </div>
  );
}

export default signIn;
