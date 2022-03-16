import React, { useEffect, useState } from 'react'
import { View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import Post from './Post'
// import { searchSubredditFromApi } from "../API/RedditApi";

const post = [
  {
    id: '',
    name: ''
  }
];


const Search = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [subreddit, setSubreddit] = useState([]);
  const getSubreddit = async () => {
    searchSubredditFromApi().then(data => {
      setSubreddit(data.results)
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => { setLoading(false); })
  }
  return (
    <View>
      <TextInput placeholder='Search subreddit'/>
      <Button title='Rechercher' onPress={() => getSubreddit}/>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Post props={item}/>}
        />
      )}
    </View>
  )
}


export default Search