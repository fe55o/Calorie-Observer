import React,{useState} from 'react';
import { StyleSheet, Text, View , Image, FlatList, Modal,StatusBar} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import Home from './Home'

const Register = ()=> {
    const [Age,setAge] = useState("")
    const [Weight,setWeight] = useState("")
    const [Height,setHeight] = useState("")
    const [TargetWeight,setTargetWeight] = useState("")
    const [Days,setDays] = useState("")

  //   this.state = {
  //     country: 'uk'
  // }
    return(
        <View style = {styles.root}>
      {/* <StatusBar
        backgroundColor="#61dafb" /> */}
{/* 
<DropDownPicker
    items={[
        {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
        {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
        {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={(item) => this.setState.bind(this)({
        country: item.value
    })}
/> */}


    <TextInput style = {styles.input}
      label="Age"
      value={Age}
      mode= "outlined"
      keyboardType="number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setAge(text)}
    />
    <TextInput style = {styles.input}
      label="Weight (Kg)"
      value={Weight}
      mode= "outlined"
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setWeight(text)}
    />
    <TextInput style = {styles.input}
      label="Height"
      value={Height}
      mode= "outlined"
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setHeight(text)}
    />
    <TextInput style = {styles.input}
      label="Target Weight"
      value={TargetWeight}
      mode= "outlined"
      keyboardType= "number-pad"
      theme = {Home.theme}
      onChangeText={text => setTargetWeight(text)}
    />
        <TextInput style = {styles.input}
      label="How many days?"
      value={Days}
      mode= "outlined"
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setDays(text)}
    />

            <View style = {{alignItems:'center'}}>
          <Button icon="upload" 
          mode="contained" 
          style={styles.savebutton}
          >
            Save Info
          </Button>

        </View>
        </View>
    )

}

const styles = StyleSheet.create({
    root:{
        flex : 1,
    },
    input: {
        margin: 10
    },
    savebutton:{
      height: 40,
      width: 180,
      borderRadius:90,
       justifyContent:'center',
      backgroundColor:"#f49898",
       marginTop:20
  },
})
export default Register