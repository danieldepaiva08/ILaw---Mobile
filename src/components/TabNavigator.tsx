import React from "react";
import {View, StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { House, Calendar, User} from "phosphor-react-native";

import HomePrincipal from '../tabs/Lawyer/Home';
import Agenda from '../tabs/Lawyer/Agenda';
import Profile from '../tabs/Lawyer/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
           <Tab.Navigator
           screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "relative",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#fff",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                height:60,
                shadowColor: "#000",
                shadowOffSet: {width: 0, height: 4},
                shadownOpacity: 0.1,
                shadowRadius: 4,
                elevation: 8,
            },
            tabBarIcon : ({color, focused}) => {
                let IconComponent: any;

                if(route.name === "Home") IconComponent = House;
                else if(route.name === "Agenda") IconComponent = Calendar;
                else if(route.name === "Perfil") IconComponent = User;

                return (
                    <View style={styles.iconContainer}>
                        <IconComponent 
                        size={28}
                        color={focused ? "#004AAd": "gray"}
                        weight={focused ? "fill" : "regular"}
                        />
                    </View>
                );
            },
           })}
           >
            <Tab.Screen name="Home" component={HomePrincipal} />
            <Tab.Screen name="Agenda" component={Agenda} />
            <Tab.Screen name="Perfil" component={Profile} />
            </Tab.Navigator>
        );
    }

    const styles = StyleSheet.create({
        iconContainer: {
            alignItems: "center",
            justifyContent: "center",
            top: Platform.OS === "ios" ? 10: 0,
        },
    });
