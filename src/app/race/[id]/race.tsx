import { ActivityIndicator, FlatList, Text } from 'react-native';
import React from 'react';
import RankingListItem from '../../../components/RankingListItem';
import { useGlobalSearchParams } from 'expo-router';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query MyQuery($id: String!) {
    raceRankings(race: $id) {
      response {
        position
        time
        team {
          id
          name
        }
        driver {
          id
          image
          name
        }
      }
    }
  }
`;

const RaceRankings = () => {
  const { id } = useGlobalSearchParams();
  const { data, loading } = useQuery(query, { variables: { id: String(id) } });

  if (loading) {
    return <ActivityIndicator />;
  }

  const raceRankings = data?.raceRankings?.response;

  if (!raceRankings) {
    return <Text>Something went wrong!</Text>;
  }

  return (
    <FlatList
      data={raceRankings}
      renderItem={({ item }) => <RankingListItem item={item} />}
    />
  );
};

export default RaceRankings;
