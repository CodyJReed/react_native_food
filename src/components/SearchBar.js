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
        backgroundColor: "#eee",
        padding: 1,
        borderRadius: 6,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default SearchBar