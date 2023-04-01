/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { View, StyleSheet, Image, Pressable, Text } from 'react-native'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { tabbarRoutes } from '../../router'

import homeIcon from '../../assets/images/home.png'
import homeSelectIcon from '../../assets/images/home-active.png'
import mineIcon from '../../assets/images/mine.png'
import mineSelectIcon from '../../assets/images/mine-active.png'

const ButtonTab = createBottomTabNavigator()

function getTargetImg(name: string, focused: boolean): any {
    if (name === 'home') return focused ? homeSelectIcon : homeIcon
    if (name === 'mine') return focused ? mineSelectIcon : mineIcon
    return ''
}

const Tabbar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const tabbarStyle = StyleSheet.create({
        tabbarContainer: {
            width: '100%',
            height: 56,
            alignItems: 'center',
            flexDirection: 'row',
        },
        tabbarItem: {
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
        },
        img: {
            width: 32,
            height: 32,
            resizeMode: 'contain',
        },
        txt: {
            fontSize: 14,
        },
        txtActive: {
            fontWeight: 'bold',
            color: 'pink',
        },
    })
    const { routes: stateRoutes, index } = state
    return (
        <View style={tabbarStyle.tabbarContainer}>
            {stateRoutes.map((route, i) => {
                const { options } = descriptors[route.key]
                const label = options.title
                const focused = index === i
                return (
                    <Pressable
                        key={label}
                        style={tabbarStyle.tabbarItem}
                        onPress={() => {
                            navigation.navigate(route.name)
                        }}
                    >
                        <Image style={tabbarStyle.img} source={getTargetImg(route.name, focused)} />
                        <Text style={[tabbarStyle.txt, focused && tabbarStyle.txtActive]}>{label}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}
export default () => {
    return (
        <View style={style.container}>
            <ButtonTab.Navigator tabBar={(props) => <Tabbar {...props} />}>
                {tabbarRoutes.map((route, key) => {
                    return <ButtonTab.Screen name={route.name} key={key} component={route.component} options={route.tabbarOption} />
                })}
            </ButtonTab.Navigator>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
})
