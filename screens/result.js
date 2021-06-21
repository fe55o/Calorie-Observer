import {Button} from 'react-native-paper'
import React,{useState} from 'react';
import { StyleSheet, Text, View , Modal,StatusBar,AsyncStorage} from 'react-native';

const result = (Props) => { 


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
    const data = Props.route.params.data

    console.log(data)
    useEffect(()=> {

        load();
    },[])
    const load = async ()=>{

        try{
    setAge(await AsyncStorage.getItem("age"))
    setWeight(await AsyncStorage.getItem("weight" ))
    setHeight(await AsyncStorage.getItem("height" ))
    setTargetWeight(await AsyncStorage.getItem("target" ))
    setDays(await AsyncStorage.getItem("days"))
    setGender(await AsyncStorage.getItem("gender" ))
    setCheck (await AsyncStorage.getItem("check"))
    setCheck2 (await AsyncStorage.getItem("check2"))
    setCheck3 (await AsyncStorage.getItem("check3"))
    setCheck4 (await AsyncStorage.getItem("check4"))

console.log(Check)
            }
            catch(err){

            alert(err)

            }
        }

//calorie-yielding nutrients (carbohydrate, fat, and protein)
    const calc =()=>{
        if(Check === 'true')
        {

        }

        if(Check2 === 'true')
        {

        }

        if(Check3 === 'true')
        {

        }

        if(Check4 === 'true')
        {

        }

    }

return(
<View style = {styles.root}>

            <Text style={styles.text}> why on earth would you eat that IDIOT !!!!</Text>

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
        margin:10,
        //textAlign: 'center',
        color: '#EDC28F',
    },
})

export default result