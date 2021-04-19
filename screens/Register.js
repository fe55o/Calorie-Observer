import React,{useState} from 'react';
import { StyleSheet, Text, View , Image, FlatList, Modal,StatusBar,Picker} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import Home from './Home'
import { ThemeProvider } from '@react-navigation/native';

const Register = ()=> {
    const [Age,setAge] = useState("")
    const [Weight,setWeight] = useState("")
    const [Height,setHeight] = useState("")
    const [TargetWeight,setTargetWeight] = useState("")
    const [Days,setDays] = useState("")
    const [selectedValue, setSelectedValue] = useState("Male");
    
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

<View style={styles.container}>
  <Text style={styles.text}> Gender :</Text>
          <Picker
            selectedValue={selectedValue}
            mode="dropdown"
            style={styles.picker1}
            itemStyle={{backgroundColor:'#f49898'}}
            theme={theme}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item  label="Male" color='#f49898'  value="Male" />
            <Picker.Item label="Female" color='#f49898' value="Female" />
    
          </Picker>
        </View>
    <TextInput style = {styles.input}
      label="Age"
      value={Age}
      mode= "outlined"
      theme={theme}
      keyboardType="number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setAge(text)}
    />
    <TextInput style = {styles.input}
    theme={theme}
      label="Weight (Kg)"
      value={Weight}
      mode= "outlined"
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setWeight(text)}
    />
    <TextInput style = {styles.input}
    theme={theme}
      label="Height"
      value={Height}
      mode= "outlined"
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setHeight(text)}
    />
    <View style={styles.container}>
  <Text style={styles.text}> Daily Routine :</Text>
          <Picker
            selectedValue={selectedValue}
            mode="dropdown"
            style={styles.picker2}
            theme={theme}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="move a lot" value="move a lot" />
            <Picker.Item label="Move a little" value="Move a little" />
    
          </Picker>
        </View>

    <TextInput style = {styles.input}
    theme={theme}
      label="Target Weight"
      value={TargetWeight}
      mode= "outlined"
      keyboardType= "number-pad"
      onChangeText={text => setTargetWeight(text)}
    />
        <TextInput style = {styles.input}
        theme={theme}
      label="How many days?"
      value={Days}
      mode= "outlined"
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setDays(text)}
    />

<View style={styles.container}>
  <Text style={styles.text}> Diseases :</Text>
          <Picker
            selectedValue={selectedValue}
            mode="dropdown"
            style={styles.picker2}
            theme={theme}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Diabetes" value="Diabetes" />
            <Picker.Item label="Salmonella" value="Salmonella" />
            <Picker.Item label="Heart Disease" value="Heart Disease" />
    
          </Picker>
        </View>

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

const theme= {
  colors:{
    primary:'#f49898',
    accent: '#f49898'
  }}

const styles = StyleSheet.create({
    root:{
        flex : 1,
    },
    text: {
      fontSize:20,
      marginRight:30,
      marginLeft:10,
      //textAlign: 'center',
      color: '#f49898',
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
       marginTop:40
  },
    container: {
    alignItems: "center",
    flexDirection:'row',

  },
  picker1:{
     height: 50, 
     width: 120,
     borderColor:'#f49898',
    //  tintColor:'#f49898',
    //  backgroundColor:"#f49898",

  },
  itemStyles:{
    fontSize:20,
    color:"#f49898",
    backgroundColor:'#f49898'

  },

  picker2:{
    height: 50, 
    width: 150,
    borderColor:'#f49898',
   //  tintColor:'#f49898',
   //  backgroundColor:"#f49898",

 },
})
export default Register