import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const contacts = [
  {
    uid: 1,
    name: 'Somnath Tyagi',
    status: 'Just an ordinary developer',
    imageUrl:
      'data:image/jpeg;base64,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',
  },
  {
    uid: 2,
    name: 'Tanay Patil',
    status: 'Sakht Launda 💀',
    imageUrl:
      'https://media.licdn.com/dms/image/D5603AQF2M__yb4fvfw/profile-displayphoto-shrink_200_200/0/1694921827827?e=2147483647&v=beta&t=e-1vAL4o4vxGQYYM7Ly_GQhGmjTVayxViNlfvHUTL1o',
  },
  {
    uid: 3,
    name: 'Shailendra Parihar',
    status: 'Making your GPay smooth 🤣',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CWhMakOsYgRNhavvZJLkXBIU26TiBOqpiQ&s',
  },
  {
    uid: 4,
    name: 'Satwik Tiwari',
    status: 'Ignoring Person 🤦‍♂️, Kya kare iska',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQEUfaxx040pEQ/profile-displayphoto-shrink_200_200/0/1706110181429?e=2147483647&v=beta&t=DtqQzhwpHL-gmDtpVaBdLH4gSE_jS72WG5M1uqVsSMg',
  },
];

export default function ContactLists() {
  return (
    <View>
      <Text style={styles.contactListHeading}>ContactLists</Text>
      <ScrollView style={styles.contactContainer}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View style={styles.contact} key={uid}>
            <Image source={{uri: imageUrl}} style={styles.contactImage} />
            <View style={styles.contactNameAndStatus}>
              <Text style={styles.contactName}>{name}</Text>
              <Text style={styles.contactStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contactListHeading: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  contactImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactStatus: {
    fontSize: 16,
    color: 'gray',
  },
  contact: {
    flexDirection: 'row',
    padding: 10,
    gap: 15,
  },
  contactNameAndStatus: {},
  contactContainer: {
    margin: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});
