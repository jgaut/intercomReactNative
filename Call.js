import React from 'react';
import { View, WebView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

class CallScreen extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
    idRoom : '',
    uri: ''
    }
  }

  static navigationOptions = {
    header: null
  };

  updateText = () => {
  /*  Auth.signIn(this.state.email, this.state.password).then(user => console.log(user)).catch(err => console.log(err));*/
  }

  componentWillMount(){
    this.setState({ idRoom: this.props.navigation.state.params.idRoom});
    console.log(this.props.navigation.state.params.idRoom);
    this.setState({ uri: 'https://appr.tc/r/'+this.state.idRoom});
    console.log(this.state.uri);
  }

  launch(){
  }

  render() {
    return (
     <View>
      <WebView
        source={{uri: this.state.uri}}
        style={{marginTop: 20}}
      />
    </View>
    );
  }
}

export default CallScreen;
