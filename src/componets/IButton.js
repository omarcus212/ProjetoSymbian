import React from "react";
import {Text, StyleSheet, TouchableOpacity,activeOpacity } from "react-native";
import COLORS from "../Colors/color";



const IButton = ({title, onPress=()=>{}}) => {

  return (


    <TouchableOpacity
      style={StyleButton.button}
      onPress={onPress} activeOpacity={0.5}>
      <Text style={StyleButton.title}>{title}</Text>
    </TouchableOpacity>




  );


}

const StyleButton = StyleSheet.create({

  button: {
    height: 35,
    width: "80%",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius:10,
  },
  title: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: 18,
  },

});
  export default IButton;