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

const CardComponent = ({
  imageUrl,
  carName,
  dailyPrice,
  monthlyPrice,
  weeklyPrice,
}) => {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  const railPressed = () => {
    navigation.navigate("DetailScreen");
  };

  return (
    <TouchableOpacity
      onPress={railPressed}
      style={[styles.mainContainer, { width: width * 0.8 }]}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imgStyle}
        resizeMode="stretch"
        imageStyle={styles.imgContainer}
      />
      <View style={{ padding: 5 }}>
        <View>
          <Text style={styles.titleStyle}>{carName}</Text>
          <View style={{ flexDirection: "row", marginVertical: 6 }}>
            {labels?.map((carFeatures, index) => (
              <Labels details={carFeatures} key={index} />
            ))}
          </View>
        </View>
        <HorizontalLine />

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.leftText}>Weekly Price: {weeklyPrice}</Text>
            <Text style={styles.leftText}>Monthly Price: {monthlyPrice}</Text>
          </View>
          <View>
            <Text style={styles.amtStyle}>{dailyPrice}/day</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
export default CardComponent;
