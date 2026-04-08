import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ header, results, navigation }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        contentContainerStyle={{
          marginHorizontal: 10,
          gap: 10,
          marginBottom: 10,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(r) => r.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Results', {
            id: item.id
          })}>
            <ResultsDetail item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default withNavigation(ResultsList);
