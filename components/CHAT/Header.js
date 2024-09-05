import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const Header = ({navigation},props) => {
  return (
    <View style={{ backgroundColor: '#03232e', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15 }}>
      <View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', marginLeft: 10 }}>UnknownChat</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <TouchableOpacity style={{ marginHorizontal: 5, padding: 3,borderRadius:25 }}>
          <Icon name="camera-outline" color={'white'} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 5, padding: 3,borderRadius:25  }}>
          <Icon name="magnify" color={'white'} size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 5, padding: 3 ,borderRadius:25 }} onPress={()=>navigation.navigate('Setting')}>
          <Icon name="dots-vertical" color={'white'} size={25} />
        </TouchableOpacity>


      </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',

  },
})