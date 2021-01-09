/* eslint-disable react-hooks/exhaustive-deps */
import {useRoute} from '@react-navigation/native';
import {Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import MovieItem from '../../components/MovieItem';
import MainLayouts from '../../layouts/MainLayout';
import {getMovies} from '../../services/movies';

function MoviesScreen() {
  const route = useRoute();
  const params = route.params;
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const {results} = await getMovies(params);
      if (results) {
        setMovies(results);
      }
    })();
  }, []);

  return (
    <MainLayouts title="Movies" back>
      {!Movies.length ? (
        <Spinner color="#ed4156" size={15} />
      ) : (
        <FlatList
          data={Movies}
          renderItem={MovieItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </MainLayouts>
  );
}

export default MoviesScreen;
