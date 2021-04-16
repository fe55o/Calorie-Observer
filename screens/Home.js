import {Card,FAB} from 'react-native-paper'
import React from 'react';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';

const Home = ()=> {
    const data = [
        {id:1, name:"mahmoud", position: "web developer"},
        {id:2, name:"Ahmed", position: "android"},
        {id:3, name:"muhammed", position: "desketop"},
        {id:4, name:"mahmoud", position: "web developer"},
        {id:5, name:"Ahmed", position: "android"},
        {id:6, name:"muhammed", position: "desketop"},
        {id:7, name:"mahmoud", position: "web developer"},
        {id:8, name:"Ahmed", position: "android"},
        {id:9, name:"muhammed", position: "desketop"},
        {id:10, name:"mahmoud", position: "web developer"},
        {id:11, name:"Ahmed", position: "android"},
        {id:12, name:"muhammed", position: "desketop"},
    ]

    const render_list = ((item)=>{
        return(
            <Card style = {styles.mycard} key= {item.id}>
            <View style= {styles.cardview}>
                <Image
                 style = {styles.myimage}
            source ={{ uri : "https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}}>
                </Image>
                <View>
                    <Text style = {styles.text}>{item.name}</Text>
                    <Text style = {styles.text}>{item.position}</Text>
                </View>
            </View>
            </Card>
        )

    })
  return (
        <View>

            {/* {render_list} */}
            <FlatList
            data = {data}
            renderItem={({item})=>{
                return render_list(item)           }
            }
            // keyExtractor = {item => '${item.id}'}
            />
                    <FAB
                        style={styles.fab}
                        small= {false}
                        icon="plus"
                        theme = {{colors: {accent:"gray"}}}
                        onPress={() => console.log('Pressed')}
                    />
        </View>

  )
}

const styles = StyleSheet.create({
    mycard: {
      margin: 6,
    },
    myimage:{
        width:60,
        height:60,
        borderRadius: 30

    },
    cardview:{
        flexDirection: 'row',
        padding:5
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
  })
export default Home