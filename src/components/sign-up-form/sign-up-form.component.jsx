import { useState } from "react";
import { signUpWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

import InputForm from "../input-form/input-form.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";

const formFieldsObj = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(formFieldsObj);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match")
            return;
        }

        try {
            const { user } = await signUpWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(formFieldsObj);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <InputForm label="Display Name" type="text" required name="displayName" onChange={handleChange} value={displayName} />

                <InputForm label="Email" type="email" required name="email" onChange={handleChange} value={email} />

                <InputForm label="Password" type="password" required name="password" onChange={handleChange} value={password} />

                <InputForm label="Confirm Password" type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;
