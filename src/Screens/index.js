import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

export default function Home() {
  const [cep, setCep] = useState("");

  const maskCep = (cep) => {
    cep = cep.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
    setCep(cep);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          maxLength={9}
          placeholder="Ex.: 59184-000"
          style={styles.input}
          onChangeText={(value) => maskCep(value)}
          value={cep}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonAdd}
          disabled={cep.length !== 9}
        >
          <Text style={styles.textAdd}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInput: {
    backgroundColor: "#75869a",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 20,
    height: 40,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAdd: {
    backgroundColor: "#f7dd52",
    height: 40,
    borderRadius: 5,
    width: "40%",
    marginTop: 10,
  },
  textAdd: {
    color: "#202020",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
  },
});
