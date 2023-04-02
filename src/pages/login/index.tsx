import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button, InputItem } from '@ant-design/react-native'

interface InputData {
    username: string
    password: string
}

export default () => {
    const router = useNavigation<StackNavigationProp<any>>()

    const loginHandle = () => {
        router.replace('main')
    }

    const [inputData, setInputData] = useState<InputData>({
        username: '152 1306 4486',
        password: '123',
    })

    const handleChange = (val: string, key: keyof InputData) => {
        setInputData((state) => {
            let ret = { ...state }
            ret[key] = val
            return ret
        })
    }

    const [disabled, setDisabled] = useState<boolean>(true)
    useEffect(() => {
        if (inputData.username.trim().length === 13 && inputData.password.length) {
            return setDisabled(false)
        }
        setDisabled(true)
    }, [inputData])

    return (
        <View style={style.container}>
            <View style={style.timeContainer}>
                <Text style={style.time}>0 . 0</Text>
            </View>
            <View style={style.inputContainer}>
                <InputItem
                    type="phone"
                    clear
                    style={style.input}
                    placeholderTextColor="#ffffff90"
                    value={inputData?.username}
                    onChange={(val) => handleChange(val, 'username')}
                    placeholder="请输入账号"
                />
                <InputItem
                    type="password"
                    clear
                    style={style.input}
                    placeholderTextColor="#ffffff90"
                    value={inputData?.password}
                    onChange={(val) => handleChange(val, 'password')}
                    placeholder="请输入密码"
                />
            </View>

            <Button
                type="ghost"
                disabled={disabled}
                onPress={loginHandle}
                activeStyle={style.activeLoginBtnStyle}
                style={style.loginBtn}
                styles={{
                    ghostDisabledRawText: {
                        color: '#ffffff50',
                    },
                    ghostDisabledRaw: {
                        borderColor: '#ffffff50',
                    },
                    ghostRawText: {
                        color: '#ffffff',
                    },
                }}
            >
                Login
            </Button>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#2b2f33',
        position: 'relative',
    },
    loginBtn: {
        width: '56%',
        marginTop: 50,
        marginLeft: 15,
        borderColor: '#fff',
    },
    activeLoginBtnStyle: {
        backgroundColor: '#ffffff90',
    },
    inputContainer: {
        width: '60%',
        marginTop: 80,
    },
    input: {
        borderColor: '#fff',
        color: '#fff',
    },
    timeContainer: {
        width: 100,
        height: 60,
        backgroundColor: '#fff',
        marginTop: 80,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    time: {
        fontSize: 48,
        flex: 1,
        textAlign: 'center',
        lineHeight: 60,
    },
})
