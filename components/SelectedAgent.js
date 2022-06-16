import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const SelectedAgent = ({ route }) => {
  const {
    // itemUuid,
    displayName,
    fullPortrait,
    description,
    abilityOneImg,
    abilityTwoImg,
    abilityThreeImg,
    abilityUltimateImg,
    abilityOneName,
    abilityTwoName,
    abilityThreeName,
    abilityUltimateName,
    abilityOneDesc,
    abilityTwoDesc,
    abilityThreeDesc,
    abilityUltimateDesc,
  } = route.params;

  return (
    <ScrollView>
      <View style={styles.background}>
        {/* ShowCase */}

        <Text style={styles.heading}> {displayName}</Text>
        <Image style={styles.portrait} source={{ uri: fullPortrait }} />
        <Text style={styles.textDescription}>{description}</Text>

        {/* Abilities */}
        <View style={styles.container}>
          <Text style={styles.headertwo}> Abilities</Text>
          <Text style={styles.text}>{abilityOneName}</Text>
          <Image style={styles.abilityImg} source={{ uri: abilityOneImg }} />
          <Text style={styles.textDescription}>{abilityOneDesc}</Text>
          <Text style={styles.text}>{abilityTwoName}</Text>
          <Image style={styles.abilityImg} source={{ uri: abilityTwoImg }} />
          <Text style={styles.textDescription}>{abilityTwoDesc}</Text>
          <Text style={styles.text}>{abilityThreeName}</Text>
          <Image style={styles.abilityImg} source={{ uri: abilityThreeImg }} />
          <Text style={styles.textDescription}>{abilityThreeDesc}</Text>
          <Text style={styles.text}>{abilityUltimateName}</Text>
          <Image
            style={styles.abilityImg}
            source={{ uri: abilityUltimateImg }}
          />
          <Text style={styles.textDescription}>{abilityUltimateDesc}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  portrait: {
    width: 350,
    height: 500,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  abilityImg: {
    width: 100,
    height: 100,
  },
  background: {
    backgroundColor: '#ccc',
  },
  headertwo: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textDescription: {
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 10,
  },
});

export default SelectedAgent;
