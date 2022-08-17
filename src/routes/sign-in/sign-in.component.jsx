import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import { creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
        </>
    )
}

export default SignIn

