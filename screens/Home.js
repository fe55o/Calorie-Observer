import {Card,FAB, Button,ActivityIndicator} from 'react-native-paper'
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View , Image, FlatList, Modal, AsyncStorage ,RefreshControl } from 'react-native';
import { Entypo,FontAwesome5,FontAwesome,MaterialCommunityIcons,Feather,Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Register from "./Register"


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}



const Home = (Props)=> {

    const [refreshing, setRefreshing] = React.useState(false);
    const [modal,setModal] = useState(false)
    const [loading, setLoading] = useState(false);
    const [Age,setAge] = useState("")
    const [Weight,setWeight] = useState("")
    const [Height,setHeight] = useState("")
    const [TargetWeight,setTargetWeight] = useState("")
    const [Days,setDays] = useState("")
    const [Gender, setGender] = useState("");
    const [Diseases, setDiseases] = useState("None");
    const [Routine, setRoutine] = useState("Move a little");
 

    const load = async ()=>{

        try{
           const data = await AsyncStorage.getItem("data")
           setAge(await AsyncStorage.getItem("age"))
           setWeight(await AsyncStorage.getItem("weight" ))
           setHeight(await AsyncStorage.getItem("height" ))
           setTargetWeight(await AsyncStorage.getItem("target" ))
           setDays(await AsyncStorage.getItem("days"))
           setGender(await AsyncStorage.getItem("gender" ))
           setDiseases (await AsyncStorage.getItem("diseases"))

           console.log("here is your data "+Age);


        //   if(Age !== null){setAge(Age)}
        //   if(Weight !== null){setWeight(Weight)}
        //   if(Height !== null){setHeight(Height)}
        //   if(TargetWeight !== null){setTargetWeight(TargetWeight)}
        //   if(Days !== null){setDays(Days)}
        //   if(Gender !== null){setGender(Gender)}
        //   if(Diseases !== null){setDiseases(Diseases)}
        //   if(Routine !== null){setRoutine(Routine)}
      
        }
        catch(err){
      
          alert(err)
        
        }
      }
      useEffect(()=> {

        load();
    },[])


    const pickFromGallery = async ()=> {
      console.log("in the gallery")

  const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted){
          console.log("Granted")
                 let data = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  // aspect: [1, 1],
                  quality: 1,
                });
            console.log(data)

            if(!data.cancelled){
                let newfile = {uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name: `test.${data.uri.split(".")[1]}`}
                handleUpload(newfile);
              }
        }else {
          console.log(" not Granted")
  
            // Alert.alert("you need to give us the premission in order to upload image")
        }
  }
  const pickFromCamera = async ()=> {
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
  
        if (granted){
                 let data = await ImagePicker.launchCameraAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  // aspect: [1, 1],
                  quality: 1,
                });
            console.log(data)
            
            if(!data.cancelled){
                let newfile = {uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name: `test.${data.uri.split(".")[1]}`}
                handleUpload(newfile);
              }
        }else {
            Alert.alert("you need to give us the premission in order to upload image")
        }
  }
  const handleUpload = (image)=>{

//     const data = new FormData()
//     // data.append("file",image)
//     setLoading(true);
//     fetch("https://calorie-observer.azurewebsites.net/api",{
//       method:"post",
//       body: image,

//     }).then(res=>res.json()).
//     then(data=>{
//       console.log(data)
//       console.log("__________________________________")
//       Object.keys(data).forEach(k => (!data[k] && data[k] !== undefined) && delete data[k])
//       console.log(data)

//       setLoading(false)
//       Props.navigation.navigate('result',{data: data});
//     }).
//     catch((error) => {
//       console.log("ERROR "+ error)
//     })
var data =  {
  "calcium":  [
    "156",
    "%",
  ],
  "calorie":  [
    "260",
  ],
  "carbohydrate":  [
    "43",
    "g",
    "14",
    "%",
  ],
  "cholesterol":  [
    "5",
    "mg",
  ],
  "fat":  [
    "8",
    "g",
    "12",
    "%",
  ],
  "fiber":  [
    "1",
    "g",
  ],
  "protein":  [
    "4",
    "g",
  ],
  "saturated":  [
    "3",
    "16",
    "%",
  ],
  "sodium":  [
    "240",
    "mg",
    "10",
    "%",
  ],
  "sugar":  [
    "23",
    "g",
  ],
  "vitamin a":  [
    "o",
    "%",
  ],
  "vitamin c":  [
    "o",
    "%",
  ],
}
Props.navigation.navigate('result',{data: data});
}

const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  load();
  wait(1000).then(() => setRefreshing(false));
}, []);



    
    // load();

  return (
    
        <View style = {styles.container}>

          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            style={styles.refresh}
          >


                <View style={{alignItems:'center',alignContent:'center'}}>
                <Ionicons name="md-barbell-outline" size={150} color="#EDC28F" />
                </View>
            <View style = {styles.cardview}>
            <Text style = {styles.text}>Welcome to </Text>
             <Text style = {styles.name}>Calorie Observer</Text> 
             </View>

            <View style={styles.cardhodler}>
            <Card 
            style={styles.mycard}
            >
                <View style={styles.cardcontent}>
                <FontAwesome name="transgender" size={30} color="#EDC28D" style={{marginRight:10}} />
                <Text style={styles.text}>Gender : {Gender}</Text>
                </View>
            </Card>

            <Card 
            style={styles.mycard}
            >
                <View style={styles.cardcontent}>
                <FontAwesome5 name="weight" size={30} color="#EDC28D" style={{marginRight:10}} />
                <Text style={styles.text}>Weight : {Weight}</Text>

                </View>
            </Card>

        <Modal
        animationType="fade"
        transparent= {true}
        visible={loading}

        >
            <View style= {styles.viewIndicator}>
            {/* {
                loading && */}
              <ActivityIndicator  size= {100} color="#EDC28F" style={styles.activityIndicator}/>
              <Text style={styles.name}> Loading ...</Text>
              {/* } */}

            </View>
        </Modal>

            <Card 
            style={styles.mycard}
            >
                <View style={styles.cardcontent}>
                <Feather name="target" size={30} color="#EDC28D" style={{marginRight:10}} />
                <Text style={styles.text}>Target Weight : {TargetWeight}</Text>

                </View>
            </Card>


            <Card 
            style={styles.mycard}
            >
                <View style={styles.cardcontent}>
                <Entypo name="man" size={30} color="#EDC28D" style={{marginRight:10}}/>
                <Text style={styles.text}>Age : {Age}</Text>

                </View>
            </Card>

            <Card 
            style={styles.mycard}
            >
                <View style={styles.cardcontent}>
                <MaterialCommunityIcons name="human-male-height-variant" size={30} color="#EDC28D" style={{marginRight:10}} />
                <Text style={styles.text}>Height : {Height}</Text>

                </View>
            </Card>        



            </View>

            <View style={styles.buttonview}>
                <Button icon="upload" mode='outlined' 
                theme= {theme} 
                style = {styles.photobutton} 
                onPress= {() => setModal(true)} >
                    Take A Photo
                </Button>
            </View>

            <Modal
        animationType="slide"
        transparent= {true}
        visible={modal}
        onRequestClose={()=>{
            setModal(false)
        }}
        >
            <View style= {styles.modelview}>
              <View style={styles.modalbutton}>
                          <Button icon="camera" theme= {theme}
                           mode="contained" 
                           style={{borderRadius:80}}
                           onPress={pickFromCamera}>
                         Camera
                          </Button>
                          <Button icon="image-area" 
                          style={{borderRadius:80}}
                          theme= {theme} 
                          mode="contained" 
                          onPress={pickFromGallery}>
                          Gallery
                          </Button>

              </View>
              <View style={{alignItems:"center"}}>
            <Button icon="camera"
            mode='outlined' 
            style = {styles.cancelbutton}
            theme= {theme} 
            onPress={() => setModal(false)}
            >
                cancel
                </Button>
                </View>
            </View>
        </Modal>


                    <FAB  onPress = {()=>Props.navigation.navigate('Register Info')}
                        style={styles.fab}
                        small= {false}
                        icon="plus"
                        label = "Regiser Data"

                        theme = {theme}
                    />
        
        </RefreshControl>
        </View>

  )
}

const theme= {
    colors:{
      primary:'#EDC28F',
      accent: '#EDC28F'
    }}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#49426C',
    },
    cardhodler: {
        backgroundColor: '#383459',

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    mycard: {
      margin: 8,

    },  
    buttonview:{

        marginTop: 100,
        alignSelf:'center',
    },

    photobutton:{
            justifyContent:'center',
            borderColor:'#EDC28D',
            borderRadius: 100,
            height: 60,
            width:200 
    },   
    cancelbutton:{
        height: 40,
        width: 180,
        borderRadius:90,
        justifyContent:'center',
        borderColor:'#EDC28F',
        backgroundColor:"#383459",
        marginTop:20
    },

    cardcontent:{
        flexDirection:'row',
        padding: 8,
        backgroundColor:'#383459',
        
    },

    name: {
        fontSize:20,
        //textAlign: 'center',
        fontStyle: "italic",
        fontWeight: 'bold',
        color: '#EDC28D',
    },
    myimage:{
        width:60,
        height:60,
        borderRadius: 30

    },
    cardview:{
        flexDirection: 'row',
        padding:10,
        justifyContent: 'center'

    },
    text:{
        fontSize: 20,
        color:"#fff"
    },
     textview:{
        marginLeft: 10,
        flexDirection: 'column'

     },
        fab: {
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        },
        
    background_image: {
        height: 200 ,
        width: '100%',
    },
    modalbutton:{
        flexDirection: 'row',
        justifyContent:'space-around',
        padding: 10,
        marginTop: 20
  
      },
      modelview:{
        position: "absolute",
        bottom:0,
        height: 150,
        width: '100%',
        backgroundColor: '#383459',
        marginBottom:-5
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
      ActivityIndicator: {

        marginTop:200,
      },
      refresh:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
      },

    })
export default Home