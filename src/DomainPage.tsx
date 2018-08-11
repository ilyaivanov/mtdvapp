import * as React from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { selectSelectedDomain } from "./state/selectors";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Domain, Skill } from "./types";
import { selectSkill } from "./state/actions";
import SkillCard from "./components/SkillCard";

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
    const { selectedDomain: { skills } } = this.props;

    return (
      <ScrollView>
        {
          skills.map(skill => <SkillCard onPress={() => this.onPress(skill)} key={skill.title} skill={skill}/>)
        }
      </ScrollView>
    );
  }
}

const mapState = (state) => ({ selectedDomain: selectSelectedDomain(state) });

export default connect(mapState, { selectSkill })(DomainPage);