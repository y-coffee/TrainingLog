import React from 'react';
import { View } from 'react-native';
import {
  array, func, object, oneOfType,
} from 'prop-types';

export default function Row(props) {
  const { children } = props;

  return (
    <View style={{ flexDirection: 'row' }}>{children}</View>
  );
}

Row.propTypes = {
  children: oneOfType([
    func,
    object,
    array])
    .isRequired,
};
