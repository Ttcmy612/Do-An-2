/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

const instructions = Platform.select({
  
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {  text:'' };
  }

  render() {
    return (
      
      <View style={styles.container}>
        
          <StatusBar
           backgroundColor="#7CBEF6"
           barStyle="light-content"
          />
          <Image
            style={styles.logo}
            source={require('./images/LogoEVN.png')} 
          />


          <Text style={styles.instructions}>
            Chỉ số điện cũ:
          </Text>

          <TextInput 
          style={styles.input}
          
          //value={this.state.text}
          />

          <Text style={styles.instructions}>
            Nhập chỉ số điện mới:
          </Text>

          <TextInput
          style={styles.input}
          placeholder='Nhập chỉ số điện vào đây'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />

          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Xong</Text>
          </TouchableOpacity>
        
          <Text style={styles.instructions}>
            Số điện tiêu thụ:
          </Text>

          <TextInput
          style={styles.input}
          //onChangeText={(text) => this.setState({text})}
          //value={this.state.text}
          />
        </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },

  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10
  },

  input:{
    height:48,
    width:180,
    backgroundColor:'rgba(255,255,255,0.7)',
    color:'#2A177B',
    paddingHorizontal:10,
    marginBottom:10

  },
  
  logo:{
    width:150,
    height:150,
    marginBottom:10
  },
  ButtonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:10,
    width:180,
    marginBottom:10
  },
  ButtonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700'
  }

});
