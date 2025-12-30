import { useState } from "react";
import { signUpWithEmailAndPassword,createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

import InputForm from "../input-form/input-form.component";
import Button from "../button/button.componentt";

const formFieldsObj = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(formFieldsObj);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords isn't fit")
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
        setFormFields({...formFields, [name]: value})        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputForm label="Display Name" name="displayName" onChange={handleChange} value={displayName}/>

                <InputForm label="Email" name="email" onChange={handleChange} value={email}/>

                <InputForm label="Password" name="password" onChange={handleChange} value={password}/>

                <InputForm label="Confirm Password" name="confirmPassword" onChange={handleChange} value={confirmPassword}/>

                <Button type="submit" classe="inverted">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;