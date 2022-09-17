import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsCard = ({ route }) => {
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
        <Text style={styles.text}>CEP: {cep}</Text>
        <Text style={styles.text}>UF: {uf}</Text>
        <Text style={styles.text}>Cidade: {localidade}</Text>
        <Text style={styles.text}>DDD: {ddd}</Text>
        <Text style={styles.text}>Bairro: {bairro}</Text>
        <Text style={styles.text}>Complemento: {complemento}</Text>
        <Text style={styles.text}>Logradouro: {logradouro}</Text>
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
  },
});

export default DetailsCard;
