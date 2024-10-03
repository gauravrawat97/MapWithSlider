import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import dataSet from "../assets/jsons";
import RailComponent from "../components/Rail";
const HomeScreen = () => {
  const [getData, setData] = React.useState({});
  React.useEffect(() => {
    setData(dataSet?.landing);
  }, []);
  return (
    <ScrollView>
      {!!getData?.data?.cars_sections[0]?.cars?.length && (
        <RailComponent listData={getData?.data?.cars_sections[0]?.cars} />
      )}
      {!!getData?.data?.cars_sections[0]?.cars?.length && (
        <RailComponent listData={getData?.data?.cities} type={"city"} />
      )}

      {!!getData?.data?.cars_sections[0]?.cars?.length && (
        <RailComponent listData={getData?.data?.cars_sections[0]?.cars} />
      )}

      {!!getData?.data?.cars_sections[0]?.cars?.length && (
        <RailComponent listData={getData?.data?.cars_sections[0]?.cars} />
      )}
    </ScrollView>
  );
};
export default HomeScreen;
