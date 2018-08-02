import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { selectLevel } from "./utils";
import { connect } from "react-redux";
import { selectSelectedDomain } from "./state/selectors";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Domain, Skill } from "./types";
import { selectSkill } from "./state/actions";

interface Props {
  selectSkill: (skill: Skill) => void;
  selectedDomain: Domain;
  navigation: NavigationScreenProp<NavigationState>
}

class DomainPage extends React.Component<Props> {
  onPress = (skill) => {
    this.props.selectSkill(skill);
    this.props.navigation.navigate("SkillPage");
  };

  render() {
    const { navigation, selectedDomain } = this.props;
    const skills = selectedDomain.skills;

    return (
      <View>
        {
          skills.map(skill => <SkillCard onPress={() => this.onPress(skill)} key={skill.title} skill={skill}/>)
        }
      </View>
    );
  }
}

const SkillCard = ({ skill, onPress }: { skill, onPress: () => void }) => <TouchableOpacity
  onPress={onPress}
  style={[s.container, { backgroundColor: "white" }]}>
  <Text style={{ textAlign: "center", fontSize: 24, paddingBottom: 10 }}>{skill.title}</Text>
  <Text>Current level: <Text style={{ fontWeight: "bold" }}>{selectLevel(skill.levels)}</Text></Text>
</TouchableOpacity>;

const s = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5
  }
});

const mapState = (state) => ({ selectedDomain: selectSelectedDomain(state) });

export default connect(mapState, { selectSkill })(DomainPage);