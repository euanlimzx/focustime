import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject,onTimerEnd }) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Current Task:</Text>
        <Text style={{ fontStyle: 'italic' }}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.darkGrey}
          style={{ height: spacing.sm }}
        />
      </View>
      <View>
        <Timing onChangeTime={setMinutes} style={styles.timerWrapper} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            size={80}
            onPress={() => setIsStarted(true)}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="stop"
            size={80}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton title="end" size={55} onPress={() => clearSubject()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 10,
    paddingTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingTop:spacing.xxl
  },
  timerWrapper: {
    flex: 0.1,
  },
  clearWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: spacing.xxl,
  },
});
