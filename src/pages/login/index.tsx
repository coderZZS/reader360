import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default () => {
    const router = useNavigation<StackNavigationProp<any>>()

    const loginHandle = () => {
        router.replace('main')
    }

    return (
        <View style={style.container}>
            <Text style={style.txt}>小红书</Text>
            <Pressable
                style={({ pressed }) => [
                    style.loginBtn,
                    pressed && {
                        ...style.loginBtnPressed,
                    },
                ]}
                onPress={loginHandle}
            >
                <Text style={style.loginTxt}>微信登录</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        position: 'relative',
    },
    txt: {
        color: 'pink',
        fontWeight: 'bold',
        fontSize: 60,
        position: 'relative',
        top: '30%',
    },
    loginBtn: {
        width: 280,
        height: 60,
        backgroundColor: 'green',
        borderRadius: 30,
        position: 'absolute',
        bottom: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBtnPressed: {
        opacity: 0.9,
    },
    loginTxt: {
        color: '#fff',
        fontSize: 24,
    },
})
