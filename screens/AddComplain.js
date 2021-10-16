import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';





export default class AddComplaint extends React.Component{
  render(){
    return(
    <View>
      <Text style={styles.header}>AddComplaint</Text>
      <Text style={styles.parag}>Add Complaint</Text>
      <TouchableOpacity style={styles.backb} onPress={() => {this.props.navigation.navigate('HomeScreen')}}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:'blue',
    justifyContent:'center',
    textAlign:'center',
    height:50,
    textAlignVertical:'center',
    fontSize:30,
    fontWeight:'bold',
  },
  parag:{
    marginTop:20,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    marginLeft:5,
    marginRight:5
  },
  backb:{
    marginTop:100,
    backgroundColor:'blue',
    width:50,
    height:20,
    textAlign:'center',
    borderRadius:10
  }
})