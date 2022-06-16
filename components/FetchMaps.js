import {
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { useState, useEffect } from 'react';

const FetchMaps = ({ navigation }) => {
  const [maps, setMaps] = useState(null);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/maps/')
      .then((response) => response.json())
      .then((result) => {
        setMaps(result.data);
      });
  }, []);

  return (
    <FlatList
      data={maps}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.navigate('Selected Map', {
              displayName: item.displayName,
              fullBackgroundImg: item.splash,
              miniMapImg: item.displayIcon,
            });
          }}
        >
          <Image source={{ uri: item.listViewIcon }} style={styles.img} />
          <Text style={styles.text}>{item.displayName}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(map) => map.uuid}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 5,
  },
  img: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default FetchMaps;
