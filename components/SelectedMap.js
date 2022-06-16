import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const SelectedMap = ({ route }) => {
  const {
    // itemUuid,
    displayName,
    fullBackgroundImg,
    miniMapImg,
  } = route.params;

  return (
    <ScrollView>
      <View style={styles.background}>
        <Text style={styles.heading}> Map: {displayName}</Text>
        <Image style={styles.portrait} source={{ uri: fullBackgroundImg }} />
        <Text style={styles.headertwo}>Minimap Layout</Text>
        <Image style={styles.miniMap} source={{ uri: miniMapImg }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  portrait: {
    width: '100%',
    height: 600,
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
  miniMap: {
    width: '100%',
    height: 500,
  },
  background: {
    backgroundColor: '#ccc',
  },
  headertwo: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SelectedMap;
