import { useState } from "react";
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../../utils/firebase/firebase.utils";

import InputForm from "../input-form/input-form.component";
import Button from "../button/button.component";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const formFieldsObj = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(formFieldsObj);
    const { email, password } = formFields;


    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(formFieldsObj);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign In with your email & password</span>
            <form onSubmit={handleSubmit} >
                <InputForm label="Email" name="email" type="email" required onChange={handleChange} value={email} />

                <InputForm label="Password" name="password" type="password" required onChange={handleChange} value={password} />

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;