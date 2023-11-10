import { FlatList } from 'react-native';
import React from 'react';
import raceRankingResponse from '../../../../assets/data/race-rankings.json';
import RankingListItem from '../../../components/RankingListItem';
const raceRankings = raceRankingResponse.data.raceRankings.response;

const RaceRankings = () => {
  return (
    <FlatList
      data={raceRankings}
      renderItem={({ item }) => <RankingListItem item={item} />}
    />
  );
};

export default RaceRankings;
