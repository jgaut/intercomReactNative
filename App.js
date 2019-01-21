import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import PreCallScreen from './PreCall';
import CallScreen from './Call';

class AppScreen extends React.Component {

  constructor(...args) {
    super(...args);
  }

  static navigationOptions = {
    header: null
  };

  updateText = () => {
  /*  Auth.signIn(this.state.email, this.state.password).then(user => console.log(user)).catch(err => console.log(err));*/
  }

  componentWillMount(){
    this.launch();
  }

  launch(){
    const {navigate} = this.props.navigation;
    navigate('PreCall');
  }

  render() {
    return (
     <View></View>
    );
  }
}

const AppNavigator = createStackNavigator({
  App: {screen: AppScreen},
  PreCall: {screen: PreCallScreen},
  Call: {screen: CallScreen}
},
{
    headerMode: 'none'}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
