import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton.js';
import {fontSizes,spacing} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject,setSubject]=useState(null)
  console.log(subject)
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={(val)=>(setSubject(val))} label="To-do item:"/>
        <View style={styles.button}>
          <RoundedButton style={styles.button} title="+" size={50} onPress={()=>addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  inputContainer:{
    flexDirection:'row',
    padding:spacing.md,
    justifyContent:'top',
  },
  button:{
    justifyContent:"center",
  },
  textInput:{
    flex:1,
    marginRight:spacing.sm
  }
})