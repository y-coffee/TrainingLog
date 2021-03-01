import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Dimensions,
} from 'react-native';
import {
  string, func,
} from 'prop-types';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 11;

export default function CalButton(props) {
  const {
    onPress, text, size, theme,
  } = props;

  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondaey);
    textStyles.push(styles.textSecondaey);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 25,
  },
  textSecondaey: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: buttonWidth - 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: buttonWidth,
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'center',
  },
  buttonSecondaey: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#F0AC19',
  },
});

CalButton.propTypes = {
  onPress: func.isRequired,
  text: string.isRequired,
  size: string,
  theme: string,
};

CalButton.defaultProps = {
  size: null,
  theme: null,
};
