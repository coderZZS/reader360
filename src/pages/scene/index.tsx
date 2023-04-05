import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { ActivityIndicator } from '@ant-design/react-native'

export default () => {
    const [loading, setLoading] = useState<boolean>(true)

    return (
        <View style={style.sceneContainer}>
            <WebView
                style={style.webViewContainer}
                source={{ uri: 'https://www.bilibili.com/' }}
                onLoadEnd={() => setLoading(false)}
            />
            {loading && (
                <View style={style.loadingContainer}>
                    <ActivityIndicator text="玩命加载中..." size="large" animating={loading} />
                </View>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    sceneContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        position: 'relative',
    },
    webViewContainer: {
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
})
