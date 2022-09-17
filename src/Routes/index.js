import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../Screens/index';
import DetailsCard from '../Components/DetailsCard';
import itemSelf from '../Components/itemSelf';

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
            headerStyle: { backgroundColor: "#f7dd52" },
            headerTintColor: "#202020",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <MainStack.Screen
          name="DETAIL"
          component={DetailsCard}
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#f7dd52" },
            headerTintColor: "#202020",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <MainStack.Screen
          name="ITEM"
          component={itemSelf}
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#f7dd52" },
            headerTintColor: "#202020",
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
