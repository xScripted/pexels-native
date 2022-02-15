
import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import CardImage from "../components/CardImage";

const ImageList = ({ photos, searchTerm }) => {
  const renderItem = ({ item }) => <CardImage image={item} searchTerm={searchTerm} />;

  if (photos.length === 0) return <Text>Loading</Text>;

  return (
    <FlatList
      data={photos}
      style={styles.container}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});

export default ImageList;