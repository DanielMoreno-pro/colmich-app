import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Reservacion from "../screens/Reservacion";

const Stack = createStackNavigator();

export default function MaestroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="reservacion"
        component={Reservacion}
        options={{ title: "Reservacioon" }}
      />
    </Stack.Navigator>
  );
}
