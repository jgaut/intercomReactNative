import React from 'react';
import { View, Linking } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

class CallScreen extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
    }
  }

  static navigationOptions = {
    header: null
  };

  updateText = () => {
  /*  Auth.signIn(this.state.email, this.state.password).then(user => console.log(user)).catch(err => console.log(err));*/
  }

  componentWillMount(){
    console.log('idRoom : ' + this.props.navigation.state.params.idRoom);
    
  }

  launch(){
    Linking.openURL('https://appr.tc/r/'+this.props.navigation.state.params.idRoom);
  }

  render() {
    return (
      <View>{this.launch()}</View>
    );
  }
}

export default CallScreen;
