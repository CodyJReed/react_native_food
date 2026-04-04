import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const SearchBar = () => {

    return (
        <View style={styles.viewStyle}>
            <TextInput
            placeholder="Search"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#ccc",
        padding: 4,
        borderRadius: 6
    }
})

export default SearchBar