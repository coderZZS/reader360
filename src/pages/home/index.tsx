import { View } from '@ant-design/react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import ScrollList from '../../components/ScrollList'
import { WorksPropsType } from '../../components/Works'
import { MOCK_RENDER_DATA } from '../../mock'

export default () => {
    const [renderData, _setRenderData] = useState<WorksPropsType[]>(MOCK_RENDER_DATA)

    return (
        <View style={style.homeContainer}>
            <ScrollList paddingBottom={12} renderData={renderData} />
        </View>
    )
}

const style = StyleSheet.create({
    homeContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#010409',
        paddingTop: 16,
    },
})
