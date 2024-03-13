import { StyleSheet, TextInput, View, Text } from "react-native";

export function DisplayTemperature({ temperature, unit }) {
  return <Text style={s.temperatureTxt}>{temperature} {unit}</Text>;
}

const s = StyleSheet.create({
  temperatureTxt: {
    fontSize: 70,
    color: "white",
  },
});
