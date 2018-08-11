import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { selectLevel } from "../utils";
import * as React from "react";

export default ({ skill, onPress }: { skill; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} style={s.container}>
    <Text style={s.skillTitle}>{skill.title}</Text>
    <Text>
      Current level:{" "}
      <Text style={s.currentSkill}>{selectLevel(skill.levels)}</Text>
    </Text>
  </TouchableOpacity>
);

const s = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    backgroundColor: "white"
  },
  skillTitle: {
    textAlign: "center",
    fontSize: 24,
    paddingBottom: 10
  },
  currentSkill: {
    fontWeight: "bold"
  }
});
