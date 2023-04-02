import { View, Text } from '@ant-design/react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { LayoutProvider, RecyclerListView, DataProvider } from 'recyclerlistview'

type ViewType = {
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
    let { width } = Dimensions.get('window')
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
            switch (type) {
                case ViewTypes.HALF_LEFT:
                    dim.width = width / 2
                    dim.height = 160
                    break
                case ViewTypes.HALF_RIGHT:
                    dim.width = width / 2
                    dim.height = 160
                    break
                case ViewTypes.FULL:
                    dim.width = width
                    dim.height = 140
                    break
                default:
                    dim.width = 0
                    dim.height = 0
            }
        }
    )

    const _rowRenderer = (type: number | string, data: any) => {
        //You can return any view here, CellContainer has no special significance
        switch (type) {
            case ViewTypes.HALF_LEFT:
                return (
                    <View>
                        <Text>FULL {data}</Text>
                    </View>
                )
            case ViewTypes.HALF_RIGHT:
                return (
                    <View>
                        <Text>FULL {data}</Text>
                    </View>
                )
            case ViewTypes.FULL:
                return (
                    <View>
                        <Text>FULL {data}</Text>
                    </View>
                )
            default:
                return null
        }
    }

    let _dataProvider = new DataProvider((r1, r2) => {
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
