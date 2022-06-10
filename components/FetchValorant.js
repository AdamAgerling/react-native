import { FlatList, View, Button, Image, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const FetchValorant = ({ navigation }) => {
  const [agents, setAgents] = useState(null);

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then((response) => response.json())
      .then((result) => {
        setAgents(result.data);
      });
  }, []);

  return (
    <FlatList
      data={agents}
      renderItem={({ item }) =>
        item.isPlayableCharacter === true && (
          <View style={styles.container}>
            <Image source={{ uri: item.displayIcon }} style={styles.img} on />
            <Button
              onPress={() => navigation.navigate('Agent')}
              title={item.displayName}
              style={styles.text}
            ></Button>
          </View>
        )
      }
      keyExtractor={(agent) => agent.uuid}
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
    width: 150,
    height: 150,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FetchValorant;

{
  /* <FlatList
      data={agents}
      renderItem={({ item }) =>
        item.isPlayableCharacter === true && (
          <View
            style={styles.container}
            onPress={() =>
              navigation.navigate('Agent', { name: item.displayName })
            }
          >
            <Image source={{ uri: item.displayIcon }} style={styles.img} />
            <Text style={styles.text}>{item.displayName}</Text>
          </View>
        )
      }
      keyExtractor={(agent) => agent.uuid}
    />
  ); */
}
