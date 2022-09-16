import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from "@react-native-material/core";
import { fetchCep } from '../Services/index';

export default function Home() {
  const [cep, setCep] = useState("");
  const [listCeps, setListCeps] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'UF - Cidade', value: 'UF - Cidade'},
    {label: 'Cidade - Logradouro', value: 'Cidade - Logradouro'}
  ]);

  const maskCep = (cep) => {
    setCep(cep);
    cep = cep.replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
    setCep(cep);
  };

  const setCepList = async () => {
    const response = await fetchCep(cep.replace(/\D/g, ""));
    if (response.erro) {
      Alert.alert("Cep Inválido");
    } else {
      setListCeps([...listCeps, response]);
    }
    setCep("");
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
        <Button
          style={styles.buttonAdd}
          onPress={setCepList}
          disabled={cep.length !== 9}
          title="Adicionar"
          variant="outlined"
          color="#202020"
        />
      </View>
      <View>
        <DropDownPicker
          style={styles.dropDown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
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
  dropDown: {
    backgroundColor: "#f7dd52",
    borderRadius: 10,
    width: "44%",
    marginTop: 10,
    alignSelf: "flex-end"
  },
});
