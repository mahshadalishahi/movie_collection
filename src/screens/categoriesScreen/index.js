import {Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import CategoryItem from '../../components/CategoryItem';
import MainLayouts from '../../layouts/MainLayout';
import {getCategories} from '../../services/categories';

function CategoriesScreen({navigation}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const {results} = await getCategories();
      if (results) {
        setCategories(results);
      }
    })();
  }, []);

  return (
    <MainLayouts title="Categories" back>
      {!categories.length ? (
        <Spinner color="#ed4156" size={15} />
      ) : (
        <FlatList
          data={categories}
          renderItem={({item}) => (
            <CategoryItem
              item={item}
              onPress={() =>
                navigation.navigate('MoviesScreen', {tags: item.name})
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </MainLayouts>
  );
}

export default CategoriesScreen;
