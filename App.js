import React from 'react';
import { Button, Text, View, FlatList, ListItem, TouchableHighlight, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation'; // Version can be specified in package.json

class CoachScreen extends React.Component {
  static navigationOptions = {
    title: 'Coach',
  };
  render() {
    return (
      <FlatList
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[highlighted && {marginLeft: 0}]} />
        )}
        data={[{title: 'Coach one', key: 'item1'}, {title: 'Coach two', key: 'item2'}, {title: 'Coach three', key: 'item3'}]}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, marginTop: 1}}>
              <Text style={Styles.bigBlack}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

class StudentScreen extends React.Component {
  static navigationOptions = {
    title: 'Student',
  };
  render() {
    return (
      <FlatList
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[highlighted && {marginLeft: 0}]} />
        )}
        data={[{title: 'Student one', key: 'item1'}, {title: 'Student two', key: 'item2'}, {title: 'Student three', key: 'item3'}]}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, marginTop: 1}}>
              <Text style={Styles.bigBlack}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

class ScheduleScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <FlatList
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[highlighted && {marginLeft: 0}]} />
        )}
        data={[{title: 'Schedule one', key: 'item1'}, {title: 'Schedule two', key: 'item2'}, {title: 'Schedule three', key: 'item3'}]}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, marginTop: 1}}>
              <Text style={Styles.bigBlack}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  bigBlack: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});

const CoachStack = StackNavigator({
  Coach: { screen: CoachScreen },
  Details: { screen: DetailsScreen },
});

const StudentStack = StackNavigator({
  Student: { screen: StudentScreen },
  Details: { screen: DetailsScreen },
});

const ScheduleStack = StackNavigator({
  Schedule: { screen: ScheduleScreen },
  Details: { screen: DetailsScreen },
});

const TabNav = TabNavigator(
  {
    Coach: { screen: CoachScreen },
    Student: { screen: StudentScreen },
    Schedule: { screen: ScheduleScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Coach') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Student') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Schedule') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const AppNavigator = StackNavigator(
  {
    Coach: { screen: TabNav },
    Student: { screen: TabNav },
    Schedule: { screen: TabNav },
  },
)

export default AppNavigator;
