import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Skill } from "./App";

const SkillCard = ({ skill, onPress }: { skill: Skill, onPress: () => void }) => <TouchableOpacity
  onPress={onPress}
  style={[s.container, { backgroundColor: 'white' }]}>
  <Text style={{ textAlign: "center", fontSize: 24, paddingBottom: 10 }}>{skill.title}</Text>
  <Text>Current level: <Text style={{ fontWeight: "bold" }}>{skill.level}</Text></Text>
</TouchableOpacity>;

const s = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5
  }
});

export default class extends React.Component<any> {
  render() {
    const { navigation } = this.props;
    const skills: Skill[] = navigation.state.params.skills;
    const color = navigation.state.params.color;

    return (
      <View>
        {
          skills.map(skill => <SkillCard onPress={() => navigation.navigate('SkillPage')} key={skill.title} skill={skill} />)
        }
      </View>
    );
  }
}