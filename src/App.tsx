import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import Domain from "./Domain";
import domains from './domains';
import SkillPage from "./SkillPage";

const DomainCard = ({ navigate, domain }) => (
  <TouchableOpacity
    onPress={() => navigate("Domain", { domain: domain, color: domain.color, skills: domain.skills })}
    style={[styles.center, { backgroundColor: domain.color }]}
  >
    <Text style={styles.title}>{domain.title}</Text>
    <Text>{domain.skills.length} skills</Text>
  </TouchableOpacity>
);

class App extends React.Component<any> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {domains.map(d => <DomainCard key={d.title} navigate={navigate} domain={d} />)}
      </View>
    );
  }
}

export default createStackNavigator({
  A: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      title: "Achievements"
    })
  },
  Domain: {
    screen: Domain,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.domain.title,
    })
  },
  SkillPage: {
    screen: SkillPage
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 24
  }
});
