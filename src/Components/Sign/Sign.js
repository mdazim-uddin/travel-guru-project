import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './Signin.css'
import { useContext } from 'react';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
const Sign = () => {

const [newUser,setNewUser]=useState(true)
    const [user,setUser]=useState({
  // isSignedInUser = false,
  
  name:'',
  email:'',
  password:'',
//   photo:'',
  error:'',
  success:false,
})

const handleNewUser =()=>{
  setNewUser(!newUser);

}



  if(firebase.apps.length ===0){
 firebase.initializeApp(firebaseConfig);
 }
 const [loggedInUser,setLoggedInUser]=useContext(UserContext)
const history = useHistory()
const location = useLocation()
const { from } = location.state || { from: { pathname: "/shop" } };

//  email & password submit area  start
const handleBlur=(e)=>{
    let isFormValid=true;
if(e.target.name === "email"){
  isFormValid =/\S+@\S+\.\S+/.test(e.target.value)
}

if(e.target.name === "password"){
const isPasswordValid =e.target.value.length>6;
const passwordHasNumber=/\d{1}/.test(e.target.value)
isFormValid=isPasswordValid && passwordHasNumber
}

if(isFormValid){
const newUserInfo ={...user}
newUserInfo[e.target.name]=e.target.value;
setUser(newUserInfo)
}
}


//  email & password submit area  ends


//  from submit  start
const handleSubmit=(e)=>{
  console.log(newUser,user)
  if(!newUser){
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            .then((res) => {
              const newUserInfo = {...user};
              console.log(res)
                  newUserInfo.error=' ';
                 newUserInfo.success = true;
                 console.log(newUserInfo)
                  setUser(newUserInfo)
                  setNewUser(newUserInfo)
                  setLoggedInUser(newUserInfo)
                history.replace(from)
            })
            .catch((error) => {
              const newUserInfo ={...user};
               newUserInfo.error = error.message;
               newUserInfo.success = false;
               setUser(newUserInfo)
               console.log(error)
            });
  }
    if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
            .then((res) => {
              const newUserInfo = {...user};
                  newUserInfo.error=' ';
                 newUserInfo.success = true;
                 console.log(newUserInfo)
                  setUser(newUserInfo)
                  // setNewUser(newUserInfo)
                  setLoggedInUser(newUserInfo)
                history.replace(from)
            })
            .catch((error) => {
              const newUserInfo ={...user};
               newUserInfo.error = error.message;
               newUserInfo.success = false;
               setUser(newUserInfo)
               console.log(error)
            });
          }
        e.preventDefault();
}

//  from submit  ends
//  googleSignin start
const googleprovider = new firebase.auth.GoogleAuthProvider();
const provider = new firebase.auth.FacebookAuthProvider();
//  googleSignin
 const GoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleprovider)
    .then(function(result) {
        const {displayName,email} = result.user;
        const signdeInUser = {name:displayName,email}
        setLoggedInUser(signdeInUser)
        history.replace(from)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage,errorCode)
      });
 }
//  googleSignin end

 const fbSignIn=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      const {displayName,email} = result.user;
        const signdeInUser = {name:displayName,email}
        console.log(signdeInUser)
        setLoggedInUser(signdeInUser)
        history.replace(from)

      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage,errorCode)
      });
 }


 



    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="form-area">
                    <div className="form-text">
                        <h3>Create an account</h3>
    
                    </div>
                    <div className="form-input">
            {/* <input type="checkbox" name="new" id=""></input>
            <label for="new">log in</label> */}
                        <form onSubmit={handleSubmit}>
                 {newUser && <>

                   <label for="name">First Name</label>
                   <input type="text" name="name" onBlur={handleBlur} id="name" className="form-control" placeholder="first name" required/>
                                 <label for="last">Last Name</label>
                   <input type="text" id="last" className="form-control" placeholder="last name" />
                 </>
                 }
         <label for="email">Username or Email</label>
<input type="email" name="email"  onBlur={handleBlur} id="email" className="form-control" placeholder="your email" required />
         <label for="Password">Password</label>
<input type="password" name="password"  onBlur={handleBlur} id="Password" className="form-control" placeholder="your Password" required/>
{newUser &&
  <>
  <label for="confirm">Confirm Password</label>
<input type="password" id="confirm" className="form-control" placeholder="confirm Password" />
</>
}
<input o type="submit"class="form-control" value="submit" />		
                    <div className="login-area">
                      {newUser ?(<span>All ready have an account?
                          <button onClick={handleNewUser} >login</button>
                      </span>):
                          <span> you dont have an account?
                          <button onClick={handleNewUser} >sign up</button>
                      </span>
                      }
                    </div>
                        </form>
             <p style={{color: 'red'}}>{user.erroe}</p>
             {
                user.success && <p style={{color: 'green'}}>user created succesfullay</p>
             }
                    </div>
                </div>

                <div className="g-f-area">
                    <small>or</small>
                    <div className="button-are">
                        
                        <button  onClick={GoogleSignIn}><i class="fab fa-google"></i>continue with google</button>
                    </div>
                    <div className="button-are">	
                  
                        <button   onClick={fbSignIn} ><i class="fab fa-facebook"></i>continue with facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Sign;