/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const PickResult = props => {
  return (
    <View style={styles.resultView}>
      <ScrollView onMomentumScrollBegin={() => props.picklotto(1)}>
        <Text style={styles.mainText}>{props.pickcount}회 당첨결과</Text>
        {props.picknum.map((item, idx) => (
          <Text key={idx}>{item}</Text>
        ))}
        {/* <Text style={styles.numlist}>{props.picknum.}</Text> */}
        {/* <Text style={styles.numlist}>{props.picknum.join()}</Text> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  resultView: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
  },
  mainText: {
    fontSize: 20,
  },
  numlist: {
    backgroundColor: '#eee',
    fontSize: 20,
  },
});

export default PickResult;
