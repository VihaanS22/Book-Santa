import React, { Component } from 'react'; 
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
 import AppHeader from '../components/SantaClaus.js'; 
 import db from '../config'; 
 import firebase from 'firebase';

export default class WelcomeScreen extends Component{

    constructor(){ 
        super(); 
        this.state={ 
            emailId : '', 
            password: '' 
        } 
    }

    userSignUp = (emailId, password) =>{ 
        firebase.auth().createUserWithEmailAndPassword(emailId, password) 
        .then((response)=>{ 
            return Alert.alert("User Added Successfully") }) 
            .catch(function(error) { 
                // Handle Errors here. 
                var errorCode = error.code; 
                var errorMessage = error.message; 
                return Alert.alert(errorMessage) 
            }); 
        }

        userLogin = (emailId, password)=>{ 
            firebase.auth().signInWithEmailAndPassword(emailId, password) 
            .then(()=>{ 
                return Alert.alert("Successfully Logged In") }) 
                .catch((error)=> { 
                    var errorCode = error.code; 
                    var errorMessage = error.message; 
                    return Alert.alert(errorMessage) 
                }) }

render(){
        return (
            <View>

            <View>
                <AppHeader/>
              <Text>Greetings to BookSanta</Text>

            </View>
<View>
        <TextInput
            placeholder = "enter email"
            keyboardType = "email-address"
            onChangeText={(text)=>{ 
                this.setState({ emailId: text })
                 }}
            />

<TextInput
            secureTextEntry = {true} 
            placeholder = "enter password"
            onChangeText={(text)=>{ 
                this.setState({ password: text })
                 }}
            />

<TouchableOpacity
 onPress={()=>{
     this.userLogin(this.state.emailId ,this.state.password)}}
>
<Text>Login</Text>
    </TouchableOpacity>

<TouchableOpacity
 onPress={()=>{
     this.userSignUp(this.state.emailId ,this.state.password)}}
>
    <Text>Sign Up</Text>
</TouchableOpacity>
 
 </View>

</View>
          );

    }
  
}