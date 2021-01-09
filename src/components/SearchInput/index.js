import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';
import MainInput from '../MainInput';
import MainButton from '../MainButton';

const SearchInput = ({search, loading}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.row}>
      <MainInput
        placeholder="search"
        itemStyle={styles.input}
        onChangeText={(text) => setSearchText(text)}
      />
      <MainButton
        title="search"
        style={styles.search_btn}
        disabled={!searchText}
        loading={loading}
        onPress={() => search(searchText)}
      />
    </View>
  );
};

SearchInput.propTypes = {
  search: PropTypes.func,
  loading: PropTypes.bool,
};

export default SearchInput;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    flex: 3,
  },
  search_btn: {
    flex: 1,
    marginLeft: 5,
  },
});
