import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const pessoa = { nome: 'Fabio', idade: 20, cidade: 'RJ', avatar:
require('./assets/img/icon.png') };

function getHora() {
  const horaAtual = new Date().getHours();

    if (horaAtual >= 5 && horaAtual <= 12) {
      return 'Bom dia';
    } else if (horaAtual >= 12 && horaAtual < 18) {
      return 'Boa tarde';
    } else if (horaAtual >= 18 && horaAtual <= 4) {
      return 'Boa noite';
    }
}

function IntroducaoPersonalizada({ introducao = "Seja bem-vindo", nome = "Usuário", style}) {
  return (
    <View style={[styles.introducaoContainer, style]}>
      <Text>{introducao}, {nome}!</Text>
    </View>
  );
};
  const Introducao = ({ nome }) => {
    return (
      <View style={styles.container}>
        <Text>Olá, {nome}!</Text>
      </View>
    );
  };

  const ExibirPessoa = ({ nome, idade, cidade}) => {
    return (
      <View style={styles.container}>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Cidade: {cidade}</Text>
      </View>
    );
  };
  export default function App() {
    return (
      <View style={styles.appContainer}>
        <IntroducaoPersonalizada introducao="Bom dia" nome={pessoa.nome}
        style={styles.IntroducaoPersonalizada} />
        <Introducao nome={pessoa.nome} />
        <ExibirPessoa {...pessoa} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#120a8f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    introducaoContainer: {
      alignItems: 'center',
      marginBottom: 10,
      padding: 10,
    },
    IntroducaoPersonalizada: {
      backgroundColor: 'lightblue',
      padding: 10,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
