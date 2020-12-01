tempF = input.temperature(TemperatureUnit.FAHRENHEIT)

if tempF >= 10:
    light.set_pixel_color(5, light.rgb(0, 255, 0))
elif tempF <= -4:
    light.set_pixel_color(5, light.rgb(0, 0, 255))
else:
    light.set_pixel_color(5, light.rgb(255, 0, 0))
print("Temperature (F): " + input.temperature(TemperatureUnit.FAHRENHEIT))