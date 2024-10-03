import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Labels from "./Labels";
import { labels } from "../assets/jsons/labels";
import HorizontalLine from "./HorizontalLine";

const DestinationCard = ({ imageUrl, placeName }) => {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const railPressed = () => {
    navigation.navigate("DetailScreen");
  };
  return (
    <TouchableOpacity
      onPress={railPressed}
      style={[styles.mainContainer, { width: width * 0.4 }]}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imgStyle}
        resizeMode="stretch"
        imageStyle={styles.imgContainer}
      />
      <View style={{ padding: 5, alignItems: "center" }}>
        <Text style={styles.titleStyle}>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgContainer: { borderTopLeftRadius: 8, borderTopRightRadius: 8 },

  imgStyle: {
    width: "100%",
    height: 150,
  },
  mainContainer: {
    borderRadius: 8,
    marginHorizontal: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  titleStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  amtStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  leftText: {
    fontSize: 10,
    color: "black",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default DestinationCard;
