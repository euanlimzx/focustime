import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import {spacing} from '../utils/sizes';

export const FocusHistory = ({history}) => {

  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
  ,
  title:{
    fontSize:spacing.md,
    padding:spacing.md,
    fontWeight:500
  },
  item:{
    fontSize:spacing.md,
    fontWeight:400,
    paddingLeft:spacing.md
  }

}
)