import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ header, results }) => {
  if (results.length === -0) {
    return null;
  }

  return (
    <View
    >
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        contentContainerStyle={{
          marginHorizontal: 10,
          gap: 10,
          marginBottom: 10
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(r) => r.id}
        renderItem={({ item }) => <ResultsDetail item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10
  },
});

export default ResultsList;
