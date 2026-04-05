import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";

import SearchBar from "../components/SearchBar";

import { yelpGet } from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    return (
        <View style={{
            backgroundColor: "#fff",
            height: "100%",
            padding: 10
        }}>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => yelpGet(term)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen