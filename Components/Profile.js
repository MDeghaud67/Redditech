import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import axios from "axios";

const Profile = ({ navigation }) => {
  const [User, setUser] = useState();
  const token = navigation.getState("token").routes[1].params.token;
  console.log(token);

  const api = {
    method: "GET",
    url: "https://oauth.reddit.com/api/v1/me",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    axios
      .request(api)
      .then(function (res) {
        setUser(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {!token ? (
        <View style={{ height: "100%" }}>
          <Button
            title="connection"
            icon={{
              name: "login",
              size: 15,
              color: "white",
            }}
            style={{ height: "50%" }}
            color="#ffa31a"
            onPress={() => navigation.navigate("Connection")}
          />
        </View>
      ) : User ? (
        <View>
          <Image style={styles.tinyLogo} source={{ uri: User.icon_img }} />
          <Text>{User.name}</Text>
          <Text>{User.subreddit.display_name_prefixed}</Text>
          <Text>{User.total_karma} karma</Text>
          <Text>{User.subreddit.public_description}</Text>
          <Text>{User.subreddit.subscribers} subscribers</Text>
        </View>
      ) : (
        <View>
          <Image
            style={styles.tinyLogo}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Text></Text>
          <Text></Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default Profile;
