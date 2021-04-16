import React,{useState} from 'react';
import { StyleSheet, Text, View , Image, FlatList, Modal} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';

const CreateEmployee = ()=> {
    const [Age,setAge] = useState("")
    const [Weight,setWeight] = useState("")
    const [Height,setHeight] = useState("")
    const [TargetWeight,setTargetWeight] = useState("")
    const [Days,setDays] = useState("")
    const [modal,setModal] = useState(false)
    this.state = {
      country: 'uk'
  }
    return(
        <View style = {styles.root}>

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
/>


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
      //theme = {{colors:""}}
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

    
  <Button icon="upload" mode="contained" onPress={() => setModal(true)}>
    Press me
  </Button>

        <Modal
        animationType="slide"
        transparent= {false}
        visible={modal}
        onRequestClose={()=>{
            setModal(false)
        }}
        >
            <View>
            <Button icon="camera" mode="contained" onPress={() => setModal(false)}>
     cancel
    </Button>
            </View>
        </Modal>
        </View>
    )

}

const styles = StyleSheet.create({
    root:{
        flex : 1
    },
    input: {
        margin: 10
    }
})
export default CreateEmployee