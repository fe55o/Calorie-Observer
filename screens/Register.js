import React,{useState} from 'react';
import { StyleSheet,
   Text,
    View ,
     Image,
      FlatList,
       Modal,
       StatusBar,
       Picker,
       AsyncStorage,
       ToastAndroid,
       Platform,
       AlertIOS,
       CheckBox} from 'react-native';

import {TextInput,Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import Home from './Home'
import { ThemeProvider } from '@react-navigation/native';
import { StorageAccessFramework } from 'expo-file-system';
import * as FileSystem from 'expo-file-system';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Register = ()=> {
  
    const [Toast, setToast] = React.useState(false); 
    const [Age,setAge] = useState("")
    const [Weight,setWeight] = useState("")
    const [Height,setHeight] = useState("")
    const [TargetWeight,setTargetWeight] = useState("")
    const [Days,setDays] = useState("")
    const [Gender, setGender] = useState("Male");
    const [Diseases, setDiseases] = useState("None");
    const [Routine, setRoutine] = useState("Move a little");
    const [Check, setCheck] = useState(false);
    const [Check2, setCheck2] = useState(false);
    const [Check3, setCheck3] = useState(false);
    const [Check4, setCheck4] = useState(false);
    const [modal,setModal] = useState(false)
    const [Modal2,setModal2] = useState(false)

    setTimeout(() => {

      setModal2(false)
    }, 3000);

const save = async ()=>{
  try{
          setModal2(true)
          console.log("saving data")

          setAge(await AsyncStorage.setItem("age", Age))
          setWeight(await AsyncStorage.setItem("weight" , Weight))
          setHeight(await AsyncStorage.setItem("height" , Height ))
          setTargetWeight(await AsyncStorage.setItem("target",TargetWeight ))
          setDays(await AsyncStorage.setItem("days",Days))
          setGender(await AsyncStorage.setItem("gender" ,Gender))
          setDiseases (await AsyncStorage.setItem("diseases",Diseases))
          setRoutine (await AsyncStorage.setItem("routine",Routine))
          setCheck (await AsyncStorage.setItem("check",String(Check)))
          setCheck2 (await AsyncStorage.setItem("check2",String(Check2)))
          setCheck3 (await AsyncStorage.setItem("check3",String(Check3)))
          setCheck4 (await AsyncStorage.setItem("check4",String(Check4)))
          console.log(String(Check))


            }
  catch(err){
    alert(err)
  }
}


    return(
        <View style = {styles.root}>


<View style={styles.container}>
  <Text style={styles.text}> Gender :</Text>
          <Picker
            selectedValue={Gender}
            mode="dropdown"
            style={styles.picker1}
            itemStyle={{backgroundColor:'#EDC28F'}}
            theme={theme}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          >
            <Picker.Item  label="Male" color='#EDC28F'  value="Male" />
            <Picker.Item label="Female" color='#EDC28F' value="Female" />
    
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
    <TextInput 
    theme={theme}
    style = {styles.input}
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
            selectedValue={Routine}
            mode="dropdown"
            style={styles.picker2}
            theme={theme}
            onValueChange={(itemValue, itemIndex) => setRoutine(itemValue)}
          >
            <Picker.Item label="move a lot" color='#EDC28F' value="move a lot" />
            <Picker.Item label="Move a little" color='#EDC28F' value="Move a little" />
    
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




<Button 
          mode="outlined" 
          style={styles.disease}
          theme= {theme}
          onPress={() => setModal(true)}
          >
            <MaterialCommunityIcons name="bacteria-outline" size={20} color="#EDC28F"  />
            <Text>  Diseases</Text>
          </Button>


        <Modal      
        animationType="slide"
        transparent= {true}
        visible={modal}
        onRequestClose={()=>{
            setModal(false)
        }}
        >
        <View style= {styles.modelview}>


          <View style={{flexDirection:'row', marginBottom:20}}>
            <CheckBox theme={theme} value={Check} onValueChange={ () => setCheck(!Check)}/>
            <Text style={styles.text}> diabetes </Text>
          </View>

          <View style={{flexDirection:'row', marginBottom:20}}>
          <CheckBox theme={theme} value={Check2} onValueChange={ () => setCheck2(!Check2)}/>
          <Text style={styles.text}> blood disorder </Text> #sudiom
          </View>

          <View style={{flexDirection:'row', marginBottom:20}}>
          <CheckBox theme={theme} value={Check3} onValueChange={ () => setCheck3(!Check3)}/>
          <Text style={styles.text}> high blood pressure </Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <CheckBox theme={theme} value={Check4} onValueChange={ () => setCheck4(!Check4)}/>
          <Text style={styles.text}> osteoporosis </Text> #Calcium
          </View>

          <View style={{flexDirection:'row'}}>
          <CheckBox theme={theme} value={Check4} onValueChange={ () => setCheck4(!Check4)}/>
          <Text style={styles.text}> heart Disease </Text> #saturated fats ...
          </View>

          <View style={{flexDirection:'row'}}>
          <CheckBox theme={theme} value={Check4} onValueChange={ () => setCheck4(!Check4)}/>
          <Text style={styles.text}> osteoporosis </Text> #Calcium
          </View>
        </View>
        </Modal>
        <Modal      
        animationType="slide"
        transparent= {true}
        visible={Modal2}
        onRequestClose={()=>{
            setModal(false)
        }}
        >
        <View style= {styles.modelview2}>
          <Text style={{fontSize:16,color:"#49426C"}}>Saving Data ...</Text>

        </View>
        </Modal>

            <View style = {{alignItems:'center'}}>


          <Button icon="upload" 
          mode="contained" 
          style={styles.savebutton}
          onPress={save}
          >
            Save Info
          </Button>

        </View>
        </View>
        
    )

}

const theme= {
  colors:{
    primary:'#EDC28F',
    accent: '#EDC28F'
  }}

const styles = StyleSheet.create({
    root:{
        flex : 1,
        backgroundColor:'#49426C'
    },
    text: {
      fontSize:20,
      marginRight:30,
      marginLeft:10,
      //textAlign: 'center',
      color: '#EDC28F',
  },

    input: {
        margin: 10,
        color:'#EDC28F',
        backgroundColor:'#383459'
    },
    savebutton:{
      height: 40,
      width: 180,
      borderRadius:90,
       justifyContent:'center',
      backgroundColor:"#EDC28F",
       marginTop:40
  },
  disease:{
    justifyContent:'center',
      margin:10,
      borderColor:'#EDC28D',
      borderRadius: 100,
      height: 50,
      width:160 
 
},
  
    container: {
    alignItems: "center",
    flexDirection:'row',

  },
  picker1:{
     height: 50, 
     width: 120,
     borderColor:'#EDC28F',
    //  tintColor:'#f49898',
    //  backgroundColor:"#f49898",

  },
  itemStyles:{
    fontSize:20,
    color:"#EDC28F",
    backgroundColor:'#EDC28F'

  },

  picker2:{
    height: 50, 
    width: 150,
    borderColor:'#EDC28F',
   //  tintColor:'#f49898',
   //  backgroundColor:"#f49898",

 },

 viewIndicator: {
  flexDirection:'column',
  position:'absolute',
  top:0,
  bottom: 0,
  right: 0,
  left:0,
  backgroundColor: "gray",
  justifyContent:'center',
  alignItems: 'center',
  opacity:0.5
},
modelview:{
  justifyContent:'center',
  alignSelf:'baseline',
  position: "absolute",
  bottom:150,
  margin:60,
  padding: 40,
  borderRadius:50,
  borderTopColor: 'pink',
  borderColor:'#EDC28F',
  backgroundColor: '#383459',
},
modelview2:{
  justifyContent:'center',
  alignSelf:'baseline',
  position: "absolute",
  bottom:30,
  marginLeft:140,
  marginRight:140,
  paddingRight: 15,
  paddingBottom:5,
  paddingTop:5,
  paddingLeft:15,
  borderRadius:20,
  backgroundColor: '#f1d0a7',
},
})
export default Register