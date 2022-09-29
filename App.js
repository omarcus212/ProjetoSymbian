/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
 import RegisterCliente from './src/telas/RegisterCliente';
 import Input from './src/componets/input';


const App = () =>{
  
  return(
    <> 
    <RegisterCliente/>
    </>
    
    
  );

}

export default App;
