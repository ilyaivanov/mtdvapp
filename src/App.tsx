import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import DomainPage from "./DomainPage";
import SkillPage from "./SkillPage";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
import DomainCard from "./components/DomainCard";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./state/reducer";
import { selectDomain } from "./state/actions";
import { selectDomains } from "./state/selectors";

class App extends React.Component<any> {
  render() {
    const { navigate } = this.props.navigation;
    const onPress = (domain) => navigate("Domain", { domain: domain, color: domain.color, skills: domain.skills });
    return (
      <View style={styles.container}>
        {this.props.domains.map(d => (
          <DomainCard key={d.title} domain={d} onPress={() => {
            onPress(d);
            this.props.selectDomain(d);
          }}/>
        ))}
      </View>
    );
  }
}

const AppConnected = connect(selectDomains, { selectDomain })(App);

const Stack = createStackNavigator({
  A: {
    screen: AppConnected,
    navigationOptions: ({ navigation }) => ({
      title: "Achievements"
    })
  },
  Domain: {
    screen: DomainPage,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.domain.title
    })
  },
  SkillPage: {
    screen: SkillPage
  }
});

const store = createStore(reducer, composeWithDevTools());

export default () => (
  <Provider store={store}>
    <Stack/>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
