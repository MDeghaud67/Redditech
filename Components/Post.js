import React from 'react'
import { View, Text, Button, Image } from 'react-native'
// import { getKarmaFromApi } from "../API/RedditApi";
// import { suscribe } from "../API/RedditApi";

const Post = (props) => {
    //const post = this.props.post
    return (
        <View>
            <Image
                source={{uri: "image"}}
            />
            <Text>{props.name}</Text>
            <Text>{props.title}</Text>
            <Text>{props.numberOfSuscriber}</Text>
            <Text>{props.description}</Text>
            <Button 
                title="Suscribe"
                //onPress={}
            />
            <Button 
                title="Unsuscribe"
                //onPress={}
            />
        </View>
    )
}

export default Post