import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';
import RaceListItem from '../components/RaceListItem';
import dayjs from 'dayjs';

import racesResponse from '../../assets/data/races.json';
import { Link } from 'expo-router';
const races = racesResponse.data.races.response;

export default function HomeScreen() {
  console.log('Home screen');

  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={sortedRaces.length - index} />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
