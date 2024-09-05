import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BackButton from '../../BackButton'

const ChattingHeader = ({ navigation },props) => {
    return (
        <View style={styles.container}>

            {/* Back button , DP Image and User name container */}
            <View style={styles.flex}>

                {/* Back button */}
                <BackButton navigation={navigation}/>

                {/* DP Image */}
                <TouchableOpacity style={{ width: 40, height: 40, marginRight: 10}} >
                    <Image source={require('../../../assets/amandp.jpg')} style={{ width: '100%', height: '100%', borderRadius: 25, marginRight: 5 }} />
                </TouchableOpacity>

                {/* User name container */}
                <TouchableOpacity style={{paddingVertical:10,width:150,height:40 }} onPress={() => navigation.navigate('ChattingInfo')}>
                <Text style={{ color: 'white', fontSize: 15, fontWeight: '600'}}>Aman raja</Text>
                </TouchableOpacity>

            </View>

            {/* Video Call , Audio Call and menu Icon container */}
            <View style={styles.flex}>

                {/* Video Call */}
                <TouchableOpacity style={{ padding: 2, marginRight: 10}}>
                    <Icon name='video' color={'white'} size={25} />
                </TouchableOpacity>

                {/* Audio Call */}
                <TouchableOpacity style={{ padding: 2, marginRight: 10 }}>
                    <Icon name='phone' color={'white'} size={25} />
                </TouchableOpacity>

                {/* Menu Icon */}
                <TouchableOpacity style={styles.Icons}>
                    <Icon name='dots-vertical' color={'white'} size={25} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChattingHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#03232e',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    flex:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    Icons:{
        padding: 2, 
        marginRight: 5 
    }
})