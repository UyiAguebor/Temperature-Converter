import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./components/Input";
import { useEffect, useState } from "react";
import { DisplayTemperature } from "./components/DisplayTemperature";
import {
  UNITS,
  converTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return converTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConvert
              unit={currentUnit}
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
