import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { selectLevel } from "./utils";

export default class extends React.Component<any> {
  render() {
    const { navigation } = this.props;
    const skills = navigation.state.params.skills;

    return (
      <View>
        {
          skills.map(skill => <SkillCard onPress={() => navigation.navigate('SkillPage', {skill})} key={skill.title} skill={skill} />)
        }
      </View>
    );
  }
}

const SkillCard = ({ skill, onPress }: { skill, onPress: () => void }) => <TouchableOpacity
  onPress={onPress}
  style={[s.container, { backgroundColor: 'white' }]}>
  <Text style={{ textAlign: "center", fontSize: 24, paddingBottom: 10 }}>{skill.title}</Text>
  <Text>Current level: <Text style={{ fontWeight: "bold" }}>{selectLevel(skill.levels)}</Text></Text>
</TouchableOpacity>;

const s = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5
  }
});
