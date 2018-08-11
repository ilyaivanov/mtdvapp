import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { markCurrentSkill, toggleSkill } from "./utils";
import { connect } from "react-redux";
import { selectSelectedSkill } from "./state/selectors";
import { Skill } from "./types";

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

interface Props {
  skill: Skill
}

interface State {
  skill?: Skill
}

class SkillPage extends React.Component<Props, State> {
  state = {
    skills: undefined,
    skill: undefined
  };

  static getDerivedStateFromProps(props, state) {
    //ugly state creation, extract this into redux state
    if (!state.skill)
      return { skill: props.skill };
    return null;
  };

  toggleDone = level => {
    const newLevels = toggleSkill(this.state.skill.levels, level);
    const newSkill = {
      ...this.state.skill,
      levels: newLevels
    };
    console.log(newSkill, level);
    this.setState({ skill: newSkill });
  };

  render() {
    const marked = markCurrentSkill(this.state.skill.levels);
    return <View>
      <Text style={{ fontSize: 26, textAlign: "center", paddingTop: 10 }}>{this.state.skill.title}</Text>
      <View style={{}}>
        {marked.map(skill => <Row style={skill.isDone ? s.done : skill.isCurrent ? s.current : undefined}
                                  onPress={() => this.toggleDone(skill)} key={skill.title}
                                  title={skill.title} description={skill.description}/>)}
      </View>
    </View>;
  }
}

const mapState = (state) => ({
  skill: selectSelectedSkill(state)
});

export default connect(mapState)(SkillPage);
const s = StyleSheet.create({
  done: {
    backgroundColor: "#D1E6C9"
  },
  current: {
    backgroundColor: "#FFF0C1"

  }
});