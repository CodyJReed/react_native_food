import React from "react";
import { View, StyleSheet, Text } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    return (
        <View style={{
            backgroundColor: "#fff",
            height: "100%",
            padding: 10
        }}>
            <SearchBar/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen