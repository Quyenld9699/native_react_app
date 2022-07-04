import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem(props) {
    const { item, onPress } = props;
    return (
        <TouchableOpacity onPress={() => onPress(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333" />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        marginLeft: 10,
    },
});
