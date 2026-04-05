import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.viewStyle}>
      <Feather name="search" size={30} />
      <TextInput
        placeholder="Search"
        style={{
          fontSize: 18,
          flex: 1,
        }}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#eee",
    paddingHorizontal: 2,
    borderRadius: 6,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SearchBar;
