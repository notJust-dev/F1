import { Text, View, StyleSheet, Image } from 'react-native';

import raceRankingResponse from '../../assets/data/race-rankings.json';
const raceRankings = raceRankingResponse.data.raceRankings.response;

type RankingListItemProps = {
  item: (typeof raceRankings)[0];
};

export default function RankingListItem({ item }: RankingListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.position}>{item.position}</Text>
      <Image source={{ uri: item.driver.image }} style={styles.driverImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.driver.name}</Text>
        <Text>{item.team.name}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  position: {
    fontFamily: 'F1-Wide',
    width: 45,
    textAlign: 'center',
  },
  name: {
    fontFamily: 'F1-Bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    backgroundColor: 'gainsboro',
    paddingVertical: 3,
    paddingHorizontal: 10,

    borderRadius: 10,
    overflow: 'hidden',

    color: 'dimgray',
    fontWeight: '500',
    marginTop: 5,
  },
  driverImage: {
    height: 60,
    aspectRatio: 1,
    marginRight: 10,
  },
});
