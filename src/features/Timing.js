import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.timingButton}>
        <RoundedButton
          style={styles.button}
          size={60}
          title="15"
          onPress={() => onChangeTime(15)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          style={styles.button}
          size={60}
          title="30"
          onPress={() => onChangeTime(30)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          style={styles.button}
          size={60}
          title="45"
          onPress={() => onChangeTime(45)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems:"center"
  },
  Wrapper: {
    paddingTop: spacing.lg,
    flexDirection: 'row',
  },
});
