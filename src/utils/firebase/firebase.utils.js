import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from'firebase/auth'
import {getFirestore, doc, getDoc,setDoc} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBlDDBzmZ2TC_zDqdjPOfJE5DjLq3W802M",
    authDomain: "crwn-clothing-db-518d8.firebaseapp.com",
    projectId: "crwn-clothing-db-518d8",
    storageBucket: "crwn-clothing-db-518d8.appspot.com",
    messagingSenderId: "15935712647",
    appId: "1:15935712647:web:030e1614699c82e299b722"
  };

 
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters(
    {
        prompt:"select_account"
    }
  )

  export const auth = getAuth();
  export const signInWithGooglePopUp = ()=> signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const creatUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){

      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef,
          {
            displayName,
            email,
            createdAt
          }
          )
      } catch(err){
        console.log("err creating the user", err.message);

      }
    }
    return userDocRef
  }