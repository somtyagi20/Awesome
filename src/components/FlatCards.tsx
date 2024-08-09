import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.flatcards}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatcards: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    flexWrap: 'wrap',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRed: {
    backgroundColor: '#EF5354',
  },
  cardBlue: {
    backgroundColor: '#50DBB4',
  },
  cardGreen: {
    backgroundColor: '#5DA3FA',
  },
});
