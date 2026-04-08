import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

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
    <
    >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && (
        <Text
          style={{
            marginHorizontal: 10,
          }}
        >
          {errorMessage}
        </Text>
      )}
      <ScrollView
        
      >
        <ResultsList
          header="Cost Effective"
          results={filterResultsByPrice("$", results)}
        />
        <ResultsList
          header="Bit Pricer"
          results={filterResultsByPrice("$$", results)}
        />
        <ResultsList
          header="Big Spender"
          results={filterResultsByPrice("$$$", results)}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
