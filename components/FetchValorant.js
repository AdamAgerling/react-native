import {
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
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
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              navigation.navigate('Agent', {
                //Broad info
                itemUuid: item.uuid,
                displayName: item.displayName,
                fullPortrait: item.fullPortraitV2,
                description: item.description,

                //Abilities Icon
                abilityOneImg: item.abilities[0].displayIcon,
                abilityTwoImg: item.abilities[1].displayIcon,
                abilityThreeImg: item.abilities[2].displayIcon,
                abilityUltimateImg: item.abilities[3].displayIcon,

                // Abilities Info
                abilityOneName: item.abilities[0].displayName,
                abilityTwoName: item.abilities[1].displayName,
                abilityThreeName: item.abilities[2].displayName,
                abilityUltimateName: item.abilities[3].displayName,

                // Abilities description
                abilityOneDesc: item.abilities[0].description,
                abilityTwoDesc: item.abilities[1].description,
                abilityThreeDesc: item.abilities[2].description,
                abilityUltimateDesc: item.abilities[3].description,
              });
            }}
          >
            <Image source={{ uri: item.displayIcon }} style={styles.img} />
            <Text style={styles.text}>{item.displayName}</Text>
          </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default FetchValorant;
