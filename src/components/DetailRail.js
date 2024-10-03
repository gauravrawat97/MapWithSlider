import * as React from "react";
import { StyleSheet } from "react-native";
import CardComponent from "./DetailCard";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
const DetailRailComponent = ({ listData }) => {
  const renderComponent = ({ item }) => {
    return (
      <CardComponent
        imageUrl={item?.images[0]}
        carName={item?.name}
        price={item?.price}
      />
    );
  };
  return (
    <BottomSheetFlatList
      data={listData}
      renderItem={renderComponent}
      keyExtractor={(item, index) => item?.id?.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
    />
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    flex: 1,
    resizeMode: "contain",
  },
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
});
export default DetailRailComponent;
