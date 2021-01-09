import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CategoryItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

export default CategoryItem;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
