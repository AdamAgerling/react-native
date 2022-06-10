import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NavbarComponent = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.heading}>Problem hela vägen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  },
});

export default NavbarComponent;
