import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, Image, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

const Auth = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
        }
    };
    return (
        <View>
            <Button title="Choose a profile picture" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Username"
            />
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Description"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
            />
            <Button
                title="Submit"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
textArea: {
    height: 150,
    //justifyContent: "flex-start",
    borderColor: "#333333",
    borderWidth: 1,
    padding: 10
},
tinyLogo: {
    width: 50,
    height: 50,
    },
});

export default Auth