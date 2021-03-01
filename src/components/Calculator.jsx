import React, { useState } from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';
import CalButton from './CalButton';
import Row from './Row';

export default function Calculator() {
  const [currVal, setCurrVal] = useState(0);
  const [operator, setOperator] = useState(null);
  const [prevVal, setPrevVal] = useState(null);
  const [resultVal, setResultVal] = useState(false);

  const handleTap = (type, value) => {
    if (currVal === 0 && type === 'number') {
      setCurrVal(value);
    } else if (resultVal === true && type === ('number' || 'operator' || 'equal')) {
      setCurrVal(0);
      setResultVal(false);
      setCurrVal(value);
    } else if (currVal && !resultVal && type === 'number') {
      setCurrVal(`${currVal}${value}`);
    }

    if (type === 'operator') {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal(0);
    }

    if (type === 'clear') {
      setCurrVal(0);
      setOperator(null);
      setPrevVal(null);
      setResultVal(false);
    }

    if (type === 'posneg') {
      setCurrVal(`${parseFloat(currVal) * -1}`);
      setResultVal(true);
    }

    if (type === 'percentage') {
      setCurrVal(`${parseFloat(currVal) * 0.01}`);
      setResultVal(true);
    }

    if (type === 'equal') {
      const current = parseFloat(currVal);
      const previous = parseFloat(prevVal);

      if (operator === '+') {
        setCurrVal(previous + current);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
      }

      if (operator === '/') {
        setCurrVal(previous / current);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
      }

      if (operator === '-') {
        setCurrVal(previous - current);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
      }

      if (operator === '*') {
        setCurrVal(previous * current);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.value}>{currVal}</Text>
      <Row>
        <CalButton text="C" theme="secondary" onPress={() => handleTap('clear')} />
        <CalButton text="+/-" theme="secondary" onPress={() => handleTap('posneg')} />
        <CalButton text="%" theme="secondary" onPress={() => handleTap('percentage')} />
        <CalButton text="/" theme="accent" onPress={() => handleTap('operator', '/')} />
      </Row>
      <Row>
        <CalButton text="7" onPress={() => handleTap('number', 7)} />
        <CalButton text="8" onPress={() => handleTap('number', 8)} />
        <CalButton text="9" onPress={() => handleTap('number', 9)} />
        <CalButton text="x" theme="accent" onPress={() => handleTap('operator', '*')} />
      </Row>
      <Row>
        <CalButton text="4" onPress={() => handleTap('number', 4)} />
        <CalButton text="5" onPress={() => handleTap('number', 5)} />
        <CalButton text="6" onPress={() => handleTap('number', 6)} />
        <CalButton text="-" theme="accent" onPress={() => handleTap('operator', '-')} />
      </Row>
      <Row>
        <CalButton text="1" onPress={() => handleTap('number', 1)} />
        <CalButton text="2" onPress={() => handleTap('number', 2)} />
        <CalButton text="3" onPress={() => handleTap('number', 3)} />
        <CalButton text="+" theme="accent" onPress={() => handleTap('operator', '+')} />
      </Row>
      <Row>
        <CalButton text="0" size="double" onPress={() => handleTap('number', 0)} />
        <CalButton text="." onPress={() => handleTap('number', '.')} />
        <CalButton text="=" theme="accent" onPress={() => handleTap('equal')} />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 5,
  },
  value: {
    color: '#ffffff',
    fontSize: 35,
    textAlign: 'right',
    marginRight: 20,
  },
});
