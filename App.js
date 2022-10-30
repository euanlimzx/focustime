import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'
import {FocusHistory} from './src/features/FocusHistory'
import {fontSizes,spacing} from './src/utils/sizes';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject}/>
        <FocusHistory history={history}/>
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject)=>{
            setHistory([...history,subject])
          }}
          clearSubject={()=>setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    //flex 1 means that u fill the whole of the parent, which in this case is view/the entire screen
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //if platform.os === ios, 50 pixels, else, 100 pixels.
  },
});
