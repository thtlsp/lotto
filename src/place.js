/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlaceLevel = props => {
  return (
    <View style={styles.placeView}>
      <Text style={styles.mainText}>당첨 횟수</Text>
      <Text style={styles.mainText}>
        1등 : {props.firstplace} 2등: {props.secondplace}
      </Text>
      <Text style={styles.mainText}>
        3등 : {props.thirdplace} 4등: {props.fourplace}
      </Text>
      <Text style={styles.mainText}>5등 : {props.fifthplace}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeView: {
    flex: 2,
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

export default PlaceLevel;
