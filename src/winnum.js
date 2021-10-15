/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WinNum = props => {
  return (
    <View style={styles.winView}>
      <Text style={styles.mainText}>당첨번호: {props.wonnum.join()}</Text>
      <Text style={styles.mainText}>보너스번호: {props.bonusnum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  winView: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10,
    paddingLeft: 20,
    margin: 10,
    width: '100%',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
  },
});

export default WinNum;
