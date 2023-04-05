import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { LayoutProvider, RecyclerListView, DataProvider } from 'recyclerlistview'
import Works, { WorksPropsType } from '../Works'

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

interface PropsType {
    height?: number
    width?: number | string
    paddingBottom?: number
    renderData?: WorksPropsType[]
}

export default ({ paddingBottom = 0, height = 266, width: containerWidth = '100%', renderData = [] }: PropsType) => {
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
            dim.height = height - paddingBottom
        }
    )

    const _rowRenderer = (_type: number | string, data: WorksPropsType) => {
        return (
            <View style={[style.itemConatiner, { paddingBottom: paddingBottom, width: containerWidth }]}>
                <Works renderData={data} />
            </View>
        )
    }

    const _dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2
    })

    const [state] = useState<HomeState>({
        dataProvider: _dataProvider.cloneWithRows(renderData),
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

const style = StyleSheet.create({
    itemConatiner: {
        alignItems: 'center',
    },
})
