import {Card,FAB} from 'react-native-paper'
import React from 'react';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';
import CreateEmployee from "./createEmployee"




const Home = ()=> {
    const data = [
        {id:1, Age:30, Weight: 100 },

    ]
    
    // const render_list = ((item)=>{
    //     return(
    //         <Card style = {styles.mycard} key= {item.id}>
                
    //         <View style= {styles.cardview}>


    //             <View>
    //             <Text style = {styles.text}>Your Age : {item.Age}</Text>
    //             <Text style = {styles.text}>Gender : {item.Gender}</Text>
    //                 <Text style = {styles.text}>Your Age : {item.Age}</Text>
    //                 <Text style = {styles.text}>Your Weight : {item.Weight}</Text>
    //             </View>
    //         </View>
    //         </Card>
    //     )

    // })
  return (
        <View style = {styles.container}>

                <Image
                 style = {styles.background_image}
            source={{uri : "data:image/png;base64,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"}}>
                </Image>
            <View style = {styles.cardview}>
            <Text style = {styles.text}>Welcome to </Text>
             <Text style = {styles.name}>Calorie Observer</Text> 
             </View>
            {/* {render_list} */}
            {/* <FlatList
            data = {data}
            renderItem={({item})=>{
                return render_list(item)           }
            }
            // keyExtractor = {item => '${item.id}'}
            /> */}
                    <FAB
                        style={styles.fab}
                        small= {false}
                        icon="plus"
                        label = "Regiser Data"

                        theme = {{colors: {accent:"#f49898"}}}
                        onPress={()=>{console.log("pressed")}}
                    />
        </View>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mycard: {
      margin: 6,
    },  

    name: {
        fontSize:20,
        //textAlign: 'center',
        fontStyle: "italic",
        fontWeight: 'bold',
        color: '#f49898',
    },
    myimage:{
        width:60,
        height:60,
        borderRadius: 30

    },
    cardview:{
        flexDirection: 'row',
        padding:10,
        marginTop:10,
        justifyContent: 'center'
 // <-- the magic

    },
    text:{
        fontSize: 20,
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
    }
    })
export default Home