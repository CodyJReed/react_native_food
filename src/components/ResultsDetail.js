import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ResultsDetail = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({})

export default ResultsDetail