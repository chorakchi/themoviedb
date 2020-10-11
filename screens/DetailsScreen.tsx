import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Details } from "../components/modules/Details";

export default function TabTwoScreen({ route, navigation }) {
  const { id } = route.params;
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MoviesList");
          }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <Details movieId={id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    width: "80%",
  },
});
