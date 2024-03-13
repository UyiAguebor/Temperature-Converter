import { StyleSheet, TextInput, View, Text } from "react-native";
import { UNITS } from "../utils/temperature";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={s.root}>
      <TextInput
        maxLength={4}
        style={s.input}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={function (text) {
          onChange(text);
        }}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}


const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 20,
    paddingLeft: 20,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    padding: 25,
    fontSize: 30,
  },
});
