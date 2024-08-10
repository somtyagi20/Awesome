import {SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import FlatCards from './src/components/FlatCards';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCards from './src/components/FancyCards';
import ActionCard from './src/components/ActionCard';
import ContactLists from './src/components/ContactLists';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
          <ContactLists/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
