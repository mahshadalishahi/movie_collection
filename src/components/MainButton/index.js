import React from 'react';
import PropTypes from 'prop-types';
import {Button, Spinner, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

const MainButton = ({title, onPress, loading, disabled, style, ...props}) => {
  return (
    <Button
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={onPress}
      loading={loading}
      block
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <View style={styles.loading_row}>
          <Spinner color="#fff" size={15} />
          <Text style={styles.loading}>loading...</Text>
        </View>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Button>
  );
};

MainButton.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ed4156',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
  },
  loading_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
  disabledButton: {
    backgroundColor: '#828282',
  },
});
