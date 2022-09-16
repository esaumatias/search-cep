import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../Screens/index';

const MainStack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer initialRouteName="Home">
      <MainStack.Navigator>
        <MainStack.Screen
          name="BUSCA CEP"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#c6ab31" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
