import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import defaultImg from '../../assets/images/default_img.png'

export interface WorksPropsType {
    title: string
    content?: string
    imgURI?: string
}

interface PropsType {
    renderData: WorksPropsType
}

const DEFAULT_TITLE = '默认标题'

export default ({ renderData }: PropsType) => {
    const { title, imgURI } = renderData
    return (
        <View style={style.worksContainer}>
            {imgURI ? (
                <Image
                    source={{
                        uri: imgURI,
                    }}
                />
            ) : (
                <Image source={defaultImg} />
            )}
            <Text>{title || DEFAULT_TITLE}</Text>
        </View>
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
    },
})
