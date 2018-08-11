import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, domain }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.center, { backgroundColor: domain.color }]}
  >
    <Text style={styles.title}>{domain.title}</Text>
    <Text>{domain.skills.length} skills</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24
  }
});
