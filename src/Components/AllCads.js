import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Divider } from "@react-native-material/core";

const AllCads = ({ navigation, listCeps, listOrder }) => {
  return listOrder
    ? listCeps.map((cep, index) => (
        <Card
          key={index}
          onPress={() =>
            navigation.navigate("DETAIL", { ...cep, titlePage: true })
          }
        >
          <Card.Content>
            <Text style={styles.text}>CEP: {cep.cep}</Text>
            <Text style={styles.text}>UF: {cep.uf}</Text>
            <Text style={styles.text}>Cidade: {cep.localidade}</Text>
          </Card.Content>
          <Divider
            style={{ marginTop: 25 }}
            leadingInset={16}
            color="#f7dd52"
          />
        </Card>
      ))
    : listCeps.map((cep, index) => (
        <Card
          key={index}
          onPress={() => navigation.navigate("DETAIL", cep)}
        >
          <Card.Content>
            <Text style={styles.text}>CEP: {cep.cep}</Text>
            <Text style={styles.text}>Cidade: {cep.localidade}</Text>
            <Text style={styles.text}>
              {cep.logradouro.length !== 0
                ? `Endereço: ${cep.logradouro}`
                : "Cep único!"}
            </Text>
          </Card.Content>
          <Divider
            style={{ marginTop: 25 }}
            leadingInset={16}
            color="#f7dd52"
          />
        </Card>
      ));
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default AllCads;
