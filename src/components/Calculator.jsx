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
  const [dotMode, setDotMode] = useState(true);

  const [equalMode, setEqualMode] = useState(false);

  const handleTap = (type, value) => {
    const current = parseFloat(currVal);
    const previous = parseFloat(prevVal);

    if (currVal === 0 && dotMode && (type === 'number')) {
      if (type === 'dot') {
        setCurrVal(`${currVal}${value}`);
        setDotMode(false);
      }
      if (equalMode) {
        setEqualMode(false);
        // return;
      }
      setCurrVal(value);
    } else if (currVal === 0 && dotMode && (type === 'dot')) {
      if (type === 'number') {
        setCurrVal(`${currVal}${value}`);
        setDotMode(false);
      }
      setCurrVal(value);
      if (type === 'dot') {
        setCurrVal(`${currVal}${value}`);
        setDotMode(false);
      }
    } else if (currVal === 0 && dotMode && (type === 'equal')) {
      setEqualMode(true);
      setCurrVal(0);
    } else if (currVal && dotMode && (type === 'number')) {
      if (type === 'dot') {
        setCurrVal(`${currVal}${value}`);
        setDotMode(false);
      }
      setCurrVal(value);
      if (type === 'number') {
        setCurrVal(`${currVal}${value}`);
        setDotMode(false);
      }
    } else if (currVal && dotMode && (type === 'dot')) {
      setCurrVal(`${currVal}${value}`);
    } else if (!resultVal && dotMode && (type === 'number' || 'dot')) {
      setResultVal(false);
      // setCurrVal(value);
      setCurrVal(`${currVal}${value}`);
      setDotMode(false);
    } else if (resultVal && currVal) {
      setResultVal(false);
      // setCurrVal(0);
    } else if (currVal && !resultVal && !dotMode && (type === 'number')) {
      setCurrVal(`${currVal}${value}`);
    } else if (currVal && !resultVal && dotMode && (type === 'number')) {
      setCurrVal(`${currVal}${value}`);
    }

    if (type === 'operator') {
      setOperator(value);
      setPrevVal(currVal);
      setCurrVal(0);
      setDotMode(true);
    }

    if (type === 'clear') {
      setCurrVal(0);
      setOperator(null);
      setPrevVal(null);
      setResultVal(false);
      setDotMode(true);
    }

    if (type === 'posneg') {
      setCurrVal(`${parseFloat(currVal) * -1}`);
      setResultVal(true);
    }

    if (type === 'percentage') {
      // setCurrVal(`${parseFloat(currVal) * 0.01}`);
      setCurrVal(`${Math.floor(((currVal) * 0.01) * 10 ** 4) / 10 ** 4}`);
      setResultVal(true);
      setDotMode(false);
    }

    if (type === 'equal') {
      setCurrVal(currVal);
      if (operator === '+') {
        setCurrVal(previous + current);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
        setDotMode(true);
        setEqualMode(true);
      }

      if (operator === '/') {
        setCurrVal(`${Math.floor((previous / current) * (10 ** 4)) / 10 ** 4}`);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
        setDotMode(true);
        setEqualMode(true);
      }

      if (operator === '-') {
        setCurrVal(previous - current);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
        setDotMode(true);
        setEqualMode(true);
      }

      if (operator === '*') {
        setCurrVal(`${Math.floor((previous * current) * (10 ** 4)) / 10 ** 4}`);
        setOperator(null);
        setPrevVal(null);
        setResultVal(true);
        setDotMode(true);
        setEqualMode(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.value} maxlength="10">{currVal}</Text>
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
        <CalButton text="." onPress={() => handleTap('dot', '.')} />
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
