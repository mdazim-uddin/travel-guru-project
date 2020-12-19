// import React, { useState } from 'react';
// import {Form,Button,Container,Row,Col } from 'react-bootstrap'
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../../firebase.config';
// import { useContext } from 'react';
// import {UserContext} from '../../App'
// import { useHistory, useLocation } from 'react-router-dom';

// const Login = () => {
// const [user,setUser]=useState({
//   // isSignedInUser = false,
//   // newUser=false,
//   name:'',
//   email:'',
//   password:'',
//   photo:'',
//   error:'',
//   success:false,
// })
//   if(firebase.apps.length ===0){
//     firebase.initializeApp(firebaseConfig);
//   }
//  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
// const history = useHistory()
// const location = useLocation()
// const { from } = location.state || { from: { pathname: "/" } };


// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const provider = new firebase.auth.FacebookAuthProvider();
// const GoogleSignIn = () => {
// firebase.auth().signInWithPopup(googleProvider).then(function(result) {
//    const {displayName,email} = result.user;
//    const signdeInUser = {name:displayName,email}
//    setLoggedInUser(signdeInUser)
//    history.replace(from)
//   }).catch(function(error) {
//     console.log(error)
//   });
// }

// const facebookSignIn=()=>{
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     var token = result.credential.accessToken;
//     var user = result.user;
//     console.log(user);
//   }).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.error(errorCode, errorMessage);
//   });
// }

// const handleChange=(e) => {
// let isFormValid=true;
// if(e.target.name === "email"){
//   isFormValid =/\S+@\S+\.\S+/.test(e.target.value)
// }

// if(e.target.name === "password"){
// const isPasswordValid =e.target.value.length>6;
// const passwordHasNumber=/\d{1}/.test(e.target.value)
// isFormValid=isPasswordValid && passwordHasNumber
// }

// if(isFormValid){
// const newUserInfo ={...user}
// newUserInfo[e.target.name]=e.target.value;
// setUser(newUserInfo)
// }
// }


// const handleSubmit=(e)=>{
//   if(user.email && user.password){
//     firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
//     .then((res) => {
//       const newUserInfo = {...user};
//           newUserInfo.error=' ';
//           newUserInfo.success = true;
//           setUser(newUserInfo)
//      console.log(res)
//     })
//     .catch((error) => {
//       const newUserInfo ={...user};
//        newUserInfo.error = error.message;
//        newUserInfo.success = false;
//        setUser(newUserInfo)
//     });
//   }
// e.preventDefault();
// }
//     return (
//         <div className="form-area">
//             <Container>
//                 <Row>
//                     <Col md={6}>
//     <input type="checkbox" name="new user"></input>
//     <label for="new User">new User signe up </label>
//    <Form onSubmit={handleSubmit}>
//   <Form.Group controlId="formBasicEmail">
//   <Form.Label>first name</Form.Label>
//     <Form.Control type="text"  onChange={handleChange} name="name" placeholder="your first name" required />
//      <Form.Label>last name</Form.Label>
//     <Form.Control type="text" placeholder="your last name" required /> 
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" required/>
//     <Form.Text className="text-muted">
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" required/>
//     {/* <Form.Label> Confirm Password</Form.Label>
//     <Form.Control type="password" placeholder="Confirm  Password" required /> */}
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     create an account
//   </Button>
//   <p>Already have an account ?<span>Login</span></p>
// </Form>
//   <p style={{color: 'red'}}>{user.erroe}</p>
//   {
//     user.success && <p style={{color: 'green'}}>user created succesfullay</p>
//   }
// <div className="google">
//         <small>or</small>
//         <div className="google-sign">
//         <button onClick={GoogleSignIn}> Continue  with Google</button>
//         </div>
//         <div className="facebook-sign">
//         <button onClick={facebookSignIn}>facebook login</button>
//         </div>
// </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default Login;