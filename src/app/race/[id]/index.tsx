import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const RaceDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>RaceDetails: {id}</Text>
    </View>
  );
};

export default RaceDetails;
