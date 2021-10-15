/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Pick from './src/pick';
import PickCount from './src/pickcount';
import PickResult from './src/pickresult';
import PlaceLevel from './src/place';
import WinNum from './src/winnum';

class Number {
  constructor($num){
    this.number = $num
  }

  get color(){
    if(this.number > 0 && this.number <11) {
      return "yellow"
    }
    // .... more codes
    // getColor() 사용 시 num.getColor();
    // get color() 사용 시 num.color 사용 가능, 이 점은 get color() 사용 시 초기 리턴된 값이 캐시 됨
  }
  
  // compare 코드 
  compareTo(num){
    if(typeof num === "number"){
      return this.number === num;
    }
    return this.number === this.num.number
  }
}

class App extends Component {
  state = {
    appName: 'My Lotto',
    goodNum: [3, 7, 23, 26, 34, 43],
    bonus: 8,
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    fourthPlace: 0,
    fifthPlace: 0,
    pickTimes: 0,
    cost: 0,
    pickNums: [],
  };
  
  createNumbers = () => {
    // 숫자 랜덤 생성
    // while 을 사용 하는 방법
    while(newNums.length < 7){
      const n = Math.floor(Math.random() * 45) + 1;
      if(!newNums.find(obj => obj.compareTo(n))){ //찾지 못 했을 경우에만 추가함
        newNums.push(new Number(n));
      }
    }

    // for을 사용하는 방법
    for (let i = 0; i < 6; i++) {
      const num = new Number(Math.floor(Math.random() * 45) + 1);
      newNums.push(num);
      for (let j = 0; j < i; j++) {
        // compare method 사용
        if (newNums[i].compareTo(newNums[j])) {
          newNums.pop();
          i--;
        }
      }
    }
    // 순자 정렬
    newNums.sort((a, b) => {
      return a.number - b.number;
    });
    return newNums;
  }

  pickNum = n => {
    let PlaceCount = [0, 0, 0, 0, 0];
    for (let x = 0; x < n; x++) {
      // 횟수에 따른 반복문
      let newNums = this.createNumbers();
      let equalCount = 0;
      let bonusbool = false;

      
      this.setState({
        pickNums: newNums,
      });
      this.setState(prevState => {
        return {
          pickTimes: prevState.pickTimes + 1,
        };
      });
      this.setState(prevState => {
        return {
          cost: prevState.cost + 1000,
        };
      });
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (this.state.goodNum[i] === newNums[j]) {
            equalCount = equalCount + 1;
          }
        }
      }
      if (equalCount === 6) {
        PlaceCount[0] = PlaceCount[0] + 1;
        this.setState(prevState => {
          return {
            firstPlace: prevState.firstPlace + 1,
          };
        });
      } else if (equalCount === 5) {
        for (let y = 0; y < 6; y++) {
          if (newNums[y] === this.state.bonus) {
            bonusbool = true;
            PlaceCount[1] = PlaceCount[1] + 1;
            this.setState(prevState => {
              return {
                secondPlace: prevState.secondPlace + 1,
              };
            });
          }
        }
        if (!bonusbool) {
          PlaceCount[2] = PlaceCount[2] + 1;
          this.setState(prevState => {
            return {
              thirdPlace: prevState.thirdPlace + 1,
            };
          });
        }
      } else if (equalCount === 4) {
        PlaceCount[3] = PlaceCount[3] + 1;
        this.setState(prevState => {
          return {
            fourthPlace: prevState.fourthPlace + 1,
          };
        });
      } else if (equalCount === 3) {
        PlaceCount[4] = PlaceCount[4] + 1;
        this.setState(prevState => {
          return {
            fifthPlace: prevState.fifthPlace + 1,
          };
        });
      } else {
      }
    }
    if (n !== 1) {
      return PlaceCount;
    }
  };

  render() {
    return (
      <View style={styles.mainView}>
        <WinNum wonnum={this.state.goodNum} bonusnum={this.state.bonus} />
        <PlaceLevel
          firstplace={this.state.firstPlace}
          secondplace={this.state.secondPlace}
          thirdplace={this.state.thirdPlace}
          fourplace={this.state.fourthPlace}
          fifthplace={this.state.fifthPlace}
        />
        <PickCount pickcount={this.state.pickTimes} money={this.state.cost} />
        <Pick picklotto={this.pickNum} />
        <PickResult
          picklotto={this.pickNum}
          pickcount={this.state.pickTimes}
          picknum={this.state.pickNums}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    margin: 20,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
  },
});

export default App;
