import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../Colors/color";



const Input = ({ label }) => {


    return (

      

            <View style={StyleInput.formContainer}>

                <Text style={StyleInput.titleLabel}>{label}</Text>

                <View style={StyleInput.viewInput}>

                 <TextInput style={StyleInput.textInput}/>

                </View>

            </View>

        

    );



}

const StyleInput = StyleSheet.create({

   
formContainer:{
    display:"flex",
    height:70,
    marginBottom:20,
   
    
       
},

 titleLabel:{
  color:COLORS.white,
 },
 
 textInput:{
    height:40,
    borderRadius: 0.6,
    color:COLORS.white
   
 },

 viewInput:{
    width:350,
    height:40,
    borderRadius: 2,
    borderColor:COLORS.white,
    borderWidth:2,
    
 }


});

export default Input;