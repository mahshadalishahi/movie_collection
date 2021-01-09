import {Text, View} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import MovieItem from '../../components/MovieItem';
import SearchInput from '../../components/SearchInput';
import MainLayouts from '../../layouts/MainLayout';
import {getMovies} from '../../services/movies';

function HomeScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  async function searchPress(search) {
    setLoading(true);
    const {results} = await getMovies({search});
    if (results) {
      setMovies(results);
    }
    setLoading(false);
  }

  return (
    <MainLayouts title="Home">
      <View>
        <SearchInput search={searchPress} loading={loading} />
        <View style={styles.category_row}>
          <TouchableOpacity
            style={styles.category_box}
            onPress={() => navigation.navigate('CategoriesScreen')}>
            <Text style={styles.category}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category_box}
            onPress={() => navigation.navigate('MoviesScreen')}>
            <Text style={styles.category}>Movies</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={movies}
          renderItem={MovieItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </MainLayouts>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  category_row: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    display: 'flex',
  },
  category_box: {
    backgroundColor: '#ed4156',
    borderRadius: 5,
    width: 100,
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 15,
  },
  category: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
