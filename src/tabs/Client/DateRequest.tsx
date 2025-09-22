import React from "react";
import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";


type DateRequestNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "DateRequest"
>;

export default function DateRequest() {
    const navigation = useNavigation<DateRequestNavigationProp>();
    const[selectDate, setSelectDate] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Agora, qual a data dessa reunião?</Text>

            <Calendar
            onDayPress={(day) => setSelectDate(day.dateString)}
            markedDates={{
                [selectDate]: {selected: true, selectedColor: "#fff", textColor: "#0047BA"},
            }}
            theme={{
                backgroundColor: "#0047BA",
                calendarBackground: "#0047BA",
                textSectionTitleColor: "#fff",
                selectedDayBackgroundColor: "#0047BA",
                todayTextColor: "#fff",
                monthTextColor: "#fff",
                arrowColor: "#fff",
                textMonthFontWeight: "bold",
                textDayFontSize: 16,
            }}
            />

            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoginClient")} 
            >
                <Text style={styles.buttonText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0047BA",
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 14,
        borderRadius: 30,
        marginTop: 20,
        marginHorizontal: 50,
    },
    buttonText: {
        color: "#0047BA",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});