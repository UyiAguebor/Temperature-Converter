import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
export function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text style={s.buttonTxt}> Convert to {unit} </Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  button: {
    backgroundColor:"black",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 30,
    width: 250,
  },
  buttonTxt: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
});
