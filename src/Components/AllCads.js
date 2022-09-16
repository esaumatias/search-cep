import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Divider } from "@react-native-material/core";

const AllCads = ({ ceps, listOrder }) => {
  return listOrder
    ? ceps.map((cepDetail, index) => (
        <Card
          key={index}
        >
          <Card.Content>
            <Text>CEP: {cepDetail.cep}</Text>
            <Text>UF: {cepDetail.uf}</Text>
            <Text>Cidade: {cepDetail.localidade}</Text>
          </Card.Content>
          <Divider
            style={{ marginTop: 60 }}
            leadingInset={16}
            color="#f7dd52"
          />
        </Card>
      ))
    : ceps.map((cepDetail, index) => (
        <Card
          key={index}
        >
          <Card.Content>
            <Text>CEP: {cepDetail.cep}</Text>
            <Text>Cidade: {cepDetail.localidade}</Text>
            <Text>
              {cepDetail.logradouro.length !== 0
                ? `Endereço: ${cepDetail.logradouro}`
                : "Cep único!"}
            </Text>
          </Card.Content>
          <Divider
            style={{ marginTop: 60 }}
            leadingInset={16}
            color="#f7dd52"
          />
        </Card>
      ));
};

export default AllCads;
