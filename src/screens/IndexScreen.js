import React, {useContext} from 'react';
import { View,Text,StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import {Context as BlogContext } from '../context/BlogContext';
import { FontAwesome5 } from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) => {
  
  const {state, addBlogPost,deleteBlogPost} = useContext(BlogContext);

  return<View>
  
  <Button title="Add Post" onPress={addBlogPost} />
  <FlatList
   data={state}
  keyExtractor={blogPost =>blogPost.title} 
  renderItem={({ item }) =>{
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Show',{id: item.id})}>
      <View style={styles.row}>
        <Text style={styles.title}>{item.title}-{item.id}</Text>
        <TouchableOpacity onPress={()=> deleteBlogPost(item.id) }>
        <FontAwesome5 style={styles.icon} name="trash"    />
        </TouchableOpacity>
      </View>
      </TouchableOpacity>)
    }}/>
</View>
  
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'grey'

  },
  title:{
    fontSize:18
  },
  icon:{
    fontSize:24
  }
});

export default IndexScreen