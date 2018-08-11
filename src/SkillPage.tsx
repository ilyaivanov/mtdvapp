import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { markCurrentSkill } from "./utils";
import { connect } from "react-redux";
import { selectSelectedSkill } from "./state/selectors";
import { Level, Skill } from "./types";
import { toggleDone } from "./state/actions";
import SkillRow from "./components/SkillRow";

interface Props {
  skill: Skill;
  levels: Level[];
  toggleDone: (levelId: string) => void;
}

class SkillPage extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 26, textAlign: "center", paddingTop: 10 }}>
          {this.props.skill.title}
        </Text>
        <View>
          {this.props.levels.map(level => (
            <SkillRow
              style={
                level.isDone ? s.done : level.isCurrent ? s.current : undefined
              }
              onPress={() => this.props.toggleDone(level.id)}
              key={level.title}
              title={level.title}
              description={level.description}
            />
          ))}
        </View>
      </View>
    );
  }
}

const mapState = state => {
  const skill = selectSelectedSkill(state);
  return {
    skill,
    levels: markCurrentSkill(skill.levels)
  };
};

export default connect(
  mapState,
  { toggleDone }
)(SkillPage);

const s = StyleSheet.create({
  done: {
    backgroundColor: "#D1E6C9"
  },
  current: {
    backgroundColor: "#FFF0C1"
  }
});
