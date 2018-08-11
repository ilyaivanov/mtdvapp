import { Text, TouchableOpacity, View } from "react-native";
import * as React from "react";

export default ({ title, description, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      style,
      {
        flexDirection: "row",
        margin: 10,
        padding: 5,
        borderRadius: 5
      }
    ]}
  >
    <View
      style={{
        width: 50,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>{title}</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text>{description}</Text>
    </View>
  </TouchableOpacity>
);