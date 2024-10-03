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
import HorizontalLine from "./HorizontalLine";
import Labels from "./Labels";
import { labels } from "../assets/jsons/labels";

const CardComponent = ({ imageUrl = "", carName = "", price = 0 }) => {
  const { width } = Dimensions.get("window");
  return (
    <View style={[styles.mainContainer, { width: width - 32 }]}>
      <ImageBackground
        imageStyle={styles.imgContainer}
        source={{ uri: imageUrl }}
        style={styles.imgStyle}
        resizeMode="stretch"
      />
      <View style={{ padding: 5 }}>
        <View>
          <Text style={styles.titleStyle}>{carName}</Text>
          <View style={{ flexDirection: "row" }}>
            {labels?.map((carFeatures, index) => (
              <Labels details={carFeatures} key={index} />
            ))}
          </View>
        </View>
        <HorizontalLine />
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.amtStyle}>{price}/day</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  imgStyle: {
    width: "100%",
    height: 240,
  },
  mainContainer: {
    borderRadius: 8,
    borderColor: "grey",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginVertical: 8,
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
});
export default CardComponent;
