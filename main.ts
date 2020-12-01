let tempF = input.temperature(TemperatureUnit.Fahrenheit)
if (tempF >= 10) {
    light.setPixelColor(5, light.rgb(0, 255, 0))
} else if (tempF <= -4) {
    light.setPixelColor(5, light.rgb(0, 0, 255))
} else {
    light.setPixelColor(5, light.rgb(255, 0, 0))
}

console.log("Temperature (F): " + input.temperature(TemperatureUnit.Fahrenheit))
