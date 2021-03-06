import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ submitTodo }) {
    const [text, setText] = useState("");
    const changeHandle = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput style={styles.input} placeholder="New todo..." onChangeText={changeHandle} />
            <Button onPress={() => submitTodo(text)} title="add todo" color={"coral"} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});
