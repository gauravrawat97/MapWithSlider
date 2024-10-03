import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapsView = ({ markersData }) => {
  const { width } = Dimensions.get("window");
  const getMarkersPoints = () => {
    if (markersData?.length) {
      const getMarkers = markersData?.map((marker) => ({
        id: marker?.name,
        price: marker?.monthly_price,
        coordinate: {
          latitude: marker?.latitude,
          longitude: marker?.longitude,
        },
      }));
      return getMarkers;
    }
    return [];
  };
  const [markers, _] = useState(getMarkersPoints);
  const [selectedMarker, setSelectedMarker] = useState({});

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
  };
  return (
    <View style={styles.container}>
      {markersData?.length && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: markersData?.[0]?.latitude,
            longitude: markersData?.[0]?.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              onPress={() => handleMarkerPress(marker)}
            >
              <View
                style={[
                  styles.customMarker,
                  selectedMarker?.id === marker.id && styles.selectedMarker,
                ]}
              >
                <Text
                  style={[
                    styles.markerText,
                    selectedMarker?.id === marker.id &&
                      styles.selectedMarkerText,
                  ]}
                >
                  {marker.price}
                </Text>
              </View>
            </Marker>
          ))}
        </MapView>
      )}
      {!!Object.keys(selectedMarker).length && (
        <View style={[styles.markerDetailContainer, { width: width - 16 }]}>
          <Text>Sample Placeholder</Text>

          <Text>{selectedMarker?.id}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  customMarker: {
    borderRadius: 16,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  markerText: {
    color: "black",
  },
  selectedMarker: {
    backgroundColor: "red",
  },
  selectedMarkerText: {
    color: "white",
  },
  markerDetailContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
  },
});

export default MapsView;
