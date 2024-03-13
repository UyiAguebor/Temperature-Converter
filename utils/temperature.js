const UNITS = {
  celcius: "°C",
  farahniet: "°F",
};

function converTemperatureTo(temperature, unitTo) {
  if (unitTo == UNITS.celcius) {
    return (temperature - 32) / 1.8;
  } else if (unitTo === UNITS.farahniet) {
    return temperature * 1.8 + 32;
  } else {
    throw new Error("Invalid unit");
  }
}

export function isIceTemperature(temperature, unit) {
    if (unit == UNITS.celcius) {
      return temperature <= 0;
    } else if (unit == UNITS.farahniet) {
      return temperature <= 32;
    } else {
      throw new Error("invalid unit");
    }
}

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.farahniet : UNITS.celcius;
}
export { UNITS, converTemperatureTo, getOppositeUnit };
