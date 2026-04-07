import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import SearchBar from "../components/SearchBar";

import useBusinesses from "../hooks/useBusinesses";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useBusinesses()

  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: "100%",
        padding: 10,
      }}
    >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
