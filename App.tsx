/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { StatusBar, AppRegistry } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack'

import routes from './src/router'
const Stack = createStackNavigator()

function App(): JSX.Element {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="home"
                    screenOptions={{
                        cardStyle: {
                            elevation: 1,
                        },
                    }}
                >
                    {routes.map((route, key) => {
                        return (
                            <Stack.Screen
                                name={route.name}
                                key={key}
                                component={route.component}
                                options={{ ...route.option }}
                            />
                        )
                    })}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

AppRegistry.registerComponent('mainApp', () => App)

export default App
