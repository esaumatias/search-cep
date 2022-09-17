import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ITEMsCard = ({ route, navigation }) => {
  const {
    bairro,
    cep,
    complemento,
    ddd,
    localidade,
    logradouro,
    uf,
    titlePage,
  } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>PÁGINA DE DETALHES</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>
          {titlePage ? "Listagen UF - Cidade" : "Listagen Cidade - Logradouro"}
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("ITEM", { item: `CEP: ${cep}`, titlePage: true })
          }
        >
          CEP: {cep}
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("ITEM", { item: `UF: ${uf}`, titlePage: false })
          }
        >
          UF: {uf}
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("ITEM", { item: `Cidade: ${localidade}`, titlePage: true })
          }
        >
          Cidade: {localidade}
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("ITEM", { item: `DDD: ${ddd}`, titlePage: true })
          }
        >
          DDD: {ddd}
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("ITEM", { item: `Bairro: ${bairro}`, titlePage: true })
          }
        >
          Bairro: {bairro}
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("ITEM", { item: `Complemento: ${complemento}`, titlePage: true })
          }
        >
          Complemento: {complemento}
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("ITEM", { item: `Logradouro: ${logradouro}`, titlePage: true })
          }
        >
          Logradouro: {logradouro}
        </Text>
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
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 5,
    textDecorationLine: "underline"
  },
});

export default ITEMsCard;
