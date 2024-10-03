import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
const Labels = ({ details }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{details}</Text>
    </View>
  );
};
export default Labels;
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: "lightgrey",
    alignSelf: "flex-start",
    marginRight: 5,
  },
  textStyle: {
    color: "black",
  },
});
