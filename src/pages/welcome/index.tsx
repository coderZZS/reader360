import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default () => {
    const router = useNavigation<StackNavigationProp<any>>()

    const toHome = () => {
        setTimeout(() => {
            router.replace('login')
        }, 3000)
    }
    useEffect(() => {
        toHome()
    }, [])

    return (
        <View style={style.container}>
            <Text style={style.txt}>wellcom</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    txt: {
        color: 'pink',
        fontWeight: 'bold',
        fontSize: 60,
        position: 'relative',
        top: '30%',
    },
})
