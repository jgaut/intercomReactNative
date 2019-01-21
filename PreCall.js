import React from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native';

class PreCallScreen extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
    connected : false
    }

    this.socket = new WebSocket("ws://82.251.99.8:8887");
    this.socket.onopen = () => {
      this.setState({connected:true})
    };
    this.socket.onmessage = (e) => {
      // a message was received
      console.log(e.data);
      //callback_jg-861
      a=e.data.split("_");
      console.log(a[0]);
      if(a[0]=="callback"){
        //Linking.openURL('https://appr.tc/r/'+a[1]);
        const {navigate} = this.props.navigation;
        navigate('Call', {idRoom: a[1]});
      }
    };
  }

  static navigationOptions = {
    header: null
  };

  updateText = () => {
  /*  Auth.signIn(this.state.email, this.state.password).then(user => console.log(user)).catch(err => console.log(err));*/
  }

  componentWillMount(){
  }

  launch(){
  }

  render() {
    return (
     <View style={styles.form}>
<TouchableOpacity onPress={ ()=>{ 
if( this.state.connected ) {
  this.socket.send("call_me");
}
}}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Connecté ? {this.state.connected?"oui":"non"}</Text>
            </View>
          </TouchableOpacity>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  form: {
    padding: 60, 
    backgroundColor: '#f5fcff',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  input: {
    height: 26, 
    fontSize: 20, 
    color: '#000', 
    borderBottomWidth: 1, 
    borderBottomColor: '#555' 
  },
  label: {
    paddingTop: 30,

    color: 'black'
  },
  button: {    
    padding: 20,
    backgroundColor: '#2196F3',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white'
  }
});

export default PreCallScreen;
