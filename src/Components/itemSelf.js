import React from "react";
import { View, Text, StyleSheet } from "react-native";

const itemSelf = ({ route }) => {
  const {
    item,
    titlePage
  } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {titlePage ? "Listagen UF - Cidade" : "Listagen Cidade - Logradouro"}
        </Text>
        <Text style={styles.text} >{item}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10,
  },
});

export default itemSelf;
