import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ResultsDetail = ({item}) => {
  return (
    <View>
      <Image source={{
        uri: item.image_url
      }} style={styles.imageStyle}/>
      <Text style={styles.nameStyle}>{item.name}</Text>
      <Text>{item.rating} Starts, {item.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ResultsDetail