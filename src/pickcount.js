/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PickCount = props => {
  return (
    <View style={styles.countView}>
      <Text style={styles.mainText}>추첨횟수: {props.pickcount}</Text>
      <Text style={styles.mainText}>소비금액: {props.money}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  countView: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10,
    margin: 10,
    alignItems: 'center',
    width: '100%',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
  },
});

export default PickCount;
