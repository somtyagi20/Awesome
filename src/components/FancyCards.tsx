import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.fancyCards}>Trending Places</Text>
      <View style={styles.cardContainer}>
        <Image
          src={
            'https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.title}>Hawa Mahal</Text>
          <Text style={styles.description}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur
          </Text>
          <Text style={styles.location}>Pink City, Jaipur</Text>
          <Text style={styles.distance}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fancyCards: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardImage: {
    height: 200,
  },
  cardContainer: {
    margin: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  location: {
    fontSize: 10,
    color: 'blue',
    marginVertical: 5,
  },
  distance: {
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 10,
    color: 'black',
    marginVertical: 5,
  },
  cardBody: {
    padding: 10,
  },
});
