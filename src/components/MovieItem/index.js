/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

const MovieItem = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text>{item.title}</Text>
        <Text>Rate: {item.rating}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.tag}>tags: </Text>
        {item.tags.map((tag, key) => (
          <Text key={key} style={styles.tag}>
            {tag},
          </Text>
        ))}
      </View>
    </View>
  );
};

MovieItem.propTypes = {
  item: PropTypes.object,
};

export default MovieItem;

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
    paddingTop: 10,
    paddingBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  tag: {
    marginRight: 5,
  },
});
