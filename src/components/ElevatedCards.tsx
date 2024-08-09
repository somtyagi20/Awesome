import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.elevatedCards}>Elevated Cards</Text>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>Yeah</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardLittleGreen]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardPink]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardRed]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  elevatedCards: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  container: {
    padding: 8,
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
  cardLittleGreen: {
    backgroundColor: '#50DBB4',
  },
  cardBlue: {
    backgroundColor: '#5DA3FA',
  },
  cardPink: {
    backgroundColor: '#FFC0CB',
  },
  cardGreen: {
    backgroundColor: '#C5E1A5',
  },
});
