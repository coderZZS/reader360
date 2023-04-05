import { View, Text } from '@ant-design/react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { LayoutProvider, RecyclerListView, DataProvider } from 'recyclerlistview'

interface ViewType {
    FULL: number
    HALF_LEFT: number
    HALF_RIGHT: number
}

const ViewTypes: ViewType = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2,
}

interface HomeState {
    dataProvider: DataProvider
    data: any[]
}

export default () => {
    const { width } = Dimensions.get('window')
    const _layoutProvider = new LayoutProvider(
        (index) => {
            if (index % 3 === 0) {
                return ViewTypes.FULL
            } else if (index % 3 === 1) {
                return ViewTypes.HALF_LEFT
            } else {
                return ViewTypes.HALF_RIGHT
            }
        },
        (type, dim) => {
            dim.width = width
            dim.height = 160
        }
    )

    const _rowRenderer = (type: number | string, data: any) => {
        return (
            <View>
                <Text>FULL {data}</Text>
            </View>
        )
    }

    const _dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2
    })

    const [state] = useState<HomeState>({
        dataProvider: _dataProvider.cloneWithRows([1, 2, 3]),
        data: [],
    })

    return (
        <RecyclerListView
            layoutProvider={_layoutProvider}
            dataProvider={state.dataProvider}
            rowRenderer={_rowRenderer}
        />
    )
}
