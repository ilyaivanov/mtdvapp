import * as React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { markCurrentSkill, toggleSkill } from "./utils";

const Row = ({ title, description, onPress, style }) => <TouchableOpacity onPress={onPress} style={[style, {
  flexDirection: "row",
  margin: 10,
  padding: 5,
  borderRadius: 5
}]}>
  <View style={{ width: 50, marginRight: 10, alignItems: "center", justifyContent: "center" }}>
    <Text>{title}</Text>
  </View>
  <View style={{ flex: 1 }}>
    <Text>{description}</Text>
  </View>
</TouchableOpacity>;

export default class SkillPage extends React.Component {
  state = {
    skills: undefined
  };

  static getDerivedStateFromProps(props, state) {
    //ugly state creation, extract this into redux state
    if (!state.skills)
      return { skills: props.navigation.state.params.skill.levels };
    return null;
  };

  toggleDone = skill => {
    const newSkills = toggleSkill(this.state.skills, skill);
    console.log(newSkills, skill);
    this.setState({ skills: newSkills });
  };

  render() {
    const marked = markCurrentSkill(this.state.skills);
    return <View>
      <Text style={{ fontSize: 26, textAlign: "center", paddingTop: 10 }}>Craftsmanship</Text>
      <View style={{}}>
        {marked.map(skill => <Row style={skill.isDone ? s.done : skill.isCurrent ? s.current : undefined}
                                  onPress={() => this.toggleDone(skill)} key={skill.title}
                                  title={skill.title} description={skill.description}/>)}
      </View>
    </View>;
  }
}
const s = StyleSheet.create({
  done: {
    backgroundColor: "#D1E6C9"
  },
  current: {
    backgroundColor: "#FFF0C1"

  }
});