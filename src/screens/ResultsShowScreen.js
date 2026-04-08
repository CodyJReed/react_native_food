import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    try {
      const res = await yelp.get(`/${id}`);
      setResult(res.data);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <View>
      <Text>{result.name}</Text>
      {result.photos.length > 0 && (
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.imageStyle} />
          )}
        />
      )}
      {result.photos.length === 0 && (
         <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
  },
});
