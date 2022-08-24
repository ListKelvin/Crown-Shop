import {  signInWithGooglePopUp ,creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"


const SignIn =()=>{


    const logGoogleUser = async ()=>{
        const {user} = await  signInWithGooglePopUp();
       const userDocRef= await creatUserDocumentFromAuth(user)
    }
    return(
        <>
            <h1>sign-in</h1>
            <button onClick={
                logGoogleUser
            }> sign-in with google pop up</button>

            <SignUpForm/>
            </>
    )
}

export default SignIn

