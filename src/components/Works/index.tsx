import { Toast } from '@ant-design/react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import defaultImg from '../../assets/images/default.jpg'

export interface WorksPropsType {
    title: string
    content?: string
    imgURI?: string
    id?: string | number
}

interface PropsType {
    renderData: WorksPropsType
}

const DEFAULT_TITLE = '默认标题'

export default ({ renderData }: PropsType) => {
    const { title, imgURI, id } = renderData
    const router = useNavigation<StackNavigationProp<any>>()

    const pressHandle = () => {
        if (!id) return Toast.info('缺少id，无法查看')
        router.push('scene')
    }
    return (
        <Pressable style={style.worksContainer} onPress={pressHandle}>
            {imgURI ? (
                <Image
                    style={style.img}
                    source={{
                        uri: imgURI,
                    }}
                />
            ) : (
                <Image style={style.img} source={defaultImg} />
            )}
            <View style={style.title}>
                <Text style={style.titleTxt} numberOfLines={2}>
                    {title || DEFAULT_TITLE}
                </Text>
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    worksContainer: {
        width: '96%',
        height: '100%',
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    img: {
        width: '100%',
        height: '100%',
    },
    title: {
        width: '100%',
        padding: 5,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#00000020',
    },
    titleTxt: {
        color: '#fff',
    },
})
