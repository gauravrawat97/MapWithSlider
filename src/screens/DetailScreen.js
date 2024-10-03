import * as React from "react";
import { View, StyleSheet } from "react-native";
import dataSet from "../assets/jsons";

import BottomSheet from "@gorhom/bottom-sheet";
import DetailRailComponent from "../components/DetailRail";
import MapView from "../components/MapView";
const DetailScreen = () => {
  const bottomSheetRef = React.useRef(null);

  const snapPoints = React.useMemo(() => ["5%", "100%"], []);

  const [getData, setData] = React.useState({});
  React.useEffect(() => {
    setData(dataSet?.result);
  }, []);

  return (
    <View style={styles.container}>
      {getData?.data?.cars?.length && (
        <MapView markersData={getData?.data?.cars} />
      )}
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <DetailRailComponent listData={getData?.data?.cars} />
        </View>
      </BottomSheet>
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
