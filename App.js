import { useState } from "react";
import { Alert, FlatList, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import Header from "./layout/Header";

export default function App() {
    const [todos, setTodos] = useState([
        { text: "buy coffee", key: "1" },
        { text: "create app", key: "2" },
        { text: "somethink", key: "3" },
    ]);

    const pressItemHandler = (key) => {
        setTodos((prev) => {
            return prev.filter((todo) => todo.key != key);
        });
    };

    const submitTodo = (text) => {
        if (text.length > 3) {
            setTodos((prev) => {
                return [{ text: text, key: Math.random().toString() }, ...prev];
            });
        } else {
            Alert.alert("Ngan qua!", "Must be larger than 3 charactor", [{ text: "Understood", onPress: () => console.log("alert closed") }]);
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log("Dissmiss keyboard");
            }}
        >
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitTodo={submitTodo} />
                    <View style={styles.list}>
                        <FlatList data={todos} renderItem={({ item }) => <TodoItem item={item} onPress={pressItemHandler} />} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        // <SandBox />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
});
