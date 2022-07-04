import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>1</Text>
            <Text style={styles.boxTwo}>2</Text>
            <Text style={styles.box3}>3</Text>
            <Text style={styles.box4}>4</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingTop: 40,
        backgroundColor: "#ddd",
    },
    boxOne: {
        backgroundColor: "violet",
        padding: 10,
    },
    boxTwo: {
        backgroundColor: "green",
        padding: 20,
    },
    box3: {
        backgroundColor: "red",
        padding: 30,
    },
    box4: {
        backgroundColor: "blue",
        padding: 40,
    },
});
