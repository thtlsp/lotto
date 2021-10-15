/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Pick = props => {
  return (
    <View style={styles.pick}>
      <Text
        style={styles.buttonRow_1}
        onPress={() => alert('자동 5회\n' + props.picklotto(5).join('/'))}>
        5회 자동
      </Text>
      <Text
        style={styles.buttonRow_2}
        onPress={() => alert('자동 10회\n' + props.picklotto(10).join('/'))}>
        10회 자동
      </Text>
      <Text
        style={styles.buttonRow_3}
        onPress={() => alert('자동 50회\n' + props.picklotto(50).join('/'))}>
        50회 자동
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pick: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonRow_1: {
    flexDirection: 'row',
    backgroundColor: '#84e785',
    padding: 10,
    margin: 5,
  },
  buttonRow_2: {
    flexDirection: 'row',
    backgroundColor: '#26BE27',
    padding: 10,
    margin: 5,
  },
  buttonRow_3: {
    flexDirection: 'row',
    backgroundColor: '#3D753D',
    padding: 10,
    margin: 5,
  },
});

export default Pick;
