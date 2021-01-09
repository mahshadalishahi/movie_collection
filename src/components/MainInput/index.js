import React from 'react';
import PropTypes from 'prop-types';
import {Input, Item} from 'native-base';
import {StyleSheet} from 'react-native';

const MainInput = ({
  placeholder,
  keyboardType,
  itemStyle,
  onChangeText,
  ...props
}) => {
  return (
    <Item regular style={[styles.input, itemStyle]}>
      <Input
        placeholderTextColor="#828282"
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...props}
      />
    </Item>
  );
};

MainInput.propTypes = {
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  itemStyle: PropTypes.object,
};

export default MainInput;

const styles = StyleSheet.create({
  input: {
    borderColor: '#828282',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});
