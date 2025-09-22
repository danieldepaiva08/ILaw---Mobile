import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeClient from "../tabs/Client/HomeClient";
import ServiceRequestScreen from "../tabs/Client/ServiceRequest";
import DateRequest from "../tabs/Client/DateRequest";
const Stack = createNativeStackNavigator();


export type HomeStackParamList = {
  HomeClient: undefined;
  DateRequest: undefined;
  ServiceRequest: undefined;
};

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeClient" component={HomeClient} />
      <Stack.Screen name="ServiceRequest" component={ServiceRequestScreen} />
      <Stack.Screen name="DateRequest" component={DateRequest} />
    </Stack.Navigator>
  );
}
