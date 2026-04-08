import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import SearchBar from "../components/SearchBar";

import useBusinesses from "../hooks/useBusinesses";
import ResultsList from "../components/ResultsList";

const filterResultsByPrice = (price, results = []) => {
  if (!price || results.length === 0) {
    return [];
  }

  return results.filter((r) => r.price === price);
};

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useBusinesses();

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
      <ResultsList header="Cost Effective" results={filterResultsByPrice("$", results)}/>
      <ResultsList header="Bit Pricer" results={filterResultsByPrice("$$", results)}/>
      <ResultsList header="Big Spender" results={filterResultsByPrice("$$$", results)}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
