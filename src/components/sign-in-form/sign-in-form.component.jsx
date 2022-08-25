import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopUp, creatUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormField = {
  
    email: '',
    password:''

}
const SignInForm = () =>{
    const [formField,setFormFields] = useState(defaultFormField);
    const { email, password} = formField;
    const signInWithGoogle = async ()=>{
        const {user} = await  signInWithGooglePopUp();
         await creatUserDocumentFromAuth(user)
    }
    console.log(formField);

    const resetFormField = () =>{
        setFormFields(defaultFormField);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response);
            resetFormField();
        } catch(error) {
            switch (error.code){
                case 'auth/user-not-found': 
                    alert("Email does not exits!")
                    break;
                case 'auth/wrong-password':
                    alert("Incorrect password for email");
                    break;
                default:
                    console.log(error);
            }
            console.log("user Sign In encountered an error",error);
          

        }

    }
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({
            ...formField,[name]: value
        })
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account </h2>
            <span> Sign In with Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" required type="email" onChange={handleChange} name='email'value={email}/>
                <FormInput label="Password" required type="password" onChange={handleChange} name='password'   value={password}/>
                <div className="buttons-container">
                    <Button  type="Submit" children="Sign In" />
                    <Button type="button" buttonType="google" children="Google Sign In" onClick={signInWithGoogle}/>
                </div>
                
            
            </form>
        </div>
    )
}

export default SignInForm;