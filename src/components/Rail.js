import * as React from "react";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import CardComponent from "./Card";
import DestinationCard from "./DestinationCard";
const RailComponent = ({ listData, type }) => {
  const { width } = Dimensions.get("window");

  const renderComponent = React.useCallback(({ item }) => {
    if (type === "city") {
      return <DestinationCard imageUrl={item?.image} placeName={item?.title} />;
    }
    return (
      <CardComponent
        imageUrl={item?.images[0]}
        carName={item?.name}
        dailyPrice={item?.price}
        monthlyPrice={item?.monthly_price}
        weeklyPrice={item?.weekly_price}
      />
    );
  }, []);
  return (
    <FlatList
      data={listData}
      renderItem={renderComponent}
      keyExtractor={(item, index) => item?.id?.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 20 }}
      snapToAlignment="center"
      snapToInterval={type === "city" ? undefined : width * 0.8 + 20}
      decelerationRate="fast"
      bounces={false}
    />
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    flex: 1,
    resizeMode: "contain",
  },
});
export default RailComponent;
