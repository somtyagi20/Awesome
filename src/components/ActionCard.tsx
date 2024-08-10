import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.actionCards}>ActionCard</Text>
      <View style={styles.cardContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            End-to-End Testing an AI Application with Playwright and GitHub
            Actions
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1723182265951/4998c08a-b4fc-4f24-9036-25f744df1355.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardDescription} numberOfLines={4}>
            LLMs are notoriously finicky. You can try to corral them into an
            API, fine-tune them, lower their temperature, select JSON mode,
            pray, but in the end you may still end up with a hallucination rate
            of 15-20%. Developers expect their code to be deterministic, so this
            is not ideal. Enterprise applications typically have a great number
            of automated tests that can click around and point out even the
            slightest differences in expected behavior.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://jahabeebs.hashnode.dev/end-to-end-testing-an-ai-application-with-playwright-and-github-actions',
              )
            }>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://in.linkedin.com/in/somnath-tyagi-16473b1ab')
            }>
            <Text style={styles.footerText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  actionCards: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 12,
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  cardImage: {
    height: 200,
  },
  cardBody: {
    padding: 10,
  },
  cardDescription: {
    fontSize: 10,
    color: 'black',
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  footerText: {
    fontSize: 15,
    color: '#021526',
    backgroundColor: '#CCD5AE',
    padding: 10,
    borderRadius: 10,
  },
});
