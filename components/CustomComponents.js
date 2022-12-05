import React from 'react'
import { View, Text,Image,SafeAreaView,ScrollView,Platform } from 'react-native'

import {dogs} from '../data'

const Card = ({name, description,image,size}) => {

    return(
        <View style={{
            backgroundColor:'white',
            borderRadius:10,
            height:526,
            marginBottom:15, 
            padding:10,
            width:350 
        }}>
            <Image 
            style={{
                borderRadius:10, 
                height:420, 
                marginBottom:10,
                width:"100%"  
            }}
            source={{uri: image}} />
            <Text
                
                style={{
                    fontSize:28,
                    fontWeight: 'bold',

                }}>{name}</Text>
            <Text
            style={{
                fontSize:16,
                color:'#848484',
            }}>{description}</Text>
        </View>
    )
}

export default function CustomComponents() {
    
    return (
        <SafeAreaView>
            <ScrollView 
            contentContainerStyle={{marginHorizontal:5}}
            style={{marginTop: Platform.OS === 'android' ? 30 : 0, }}>
                {dogs.map( (dog,index) => <Card key={index} {...dog}/>)}
            </ScrollView>
        </SafeAreaView>
    )
}