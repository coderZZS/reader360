import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import { allPage, tabbarPage } from '../pages'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

interface Route {
    name: string
    component: React.FC
    option: StackNavigationOptions
    tabbarOption?: BottomTabNavigationOptions
}

const commonOption: StackNavigationOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
}

const tabbarOption = {
    home: {
        title: '首页',
    },
    mine: {
        title: '我的',
    },
}

const routes: Route[] = Object.keys(allPage).map((name) => {
    return {
        name,
        component: allPage[name],
        option: {
            ...commonOption,
        },
    }
})

export const tabbarRoutes: Route[] = Object.keys(tabbarPage).map((name) => {
    const route: Route = {
        name,
        component: allPage[name],
        option: {
            ...commonOption,
        },
        tabbarOption: {
            ...tabbarOption[name],
            headerShown: false,
        },
    }
    return route
})

export default routes
