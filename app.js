  import React, { useEffect, useState } from 'react';
  import { StyleSheet, Text, View, Image } from 'react-native';

  const pessoa = { nome: 'Fabio', idade: 20, cidade: 'RJ', faixa: 'Roxa', avatar:
  require('./assets/img/icon.jpg') };

  function getHora() {
    const horaAtual = new Date().getHours();

      if (horaAtual >= 5 && horaAtual <= 12) {
        return 'Bom dia';
      } else if (horaAtual >= 12 && horaAtual < 18) {
        return 'Boa tarde';
      } else {
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

    const ExibirPessoa = ({ nome, idade, cidade, faixa}) => {
      return (
        <View style={styles.container}>
          <Image source={pessoa.avatar} style={styles.avatar} />
          <Text>Nome: {nome}</Text>
          <Text>Idade: {idade}</Text>
          <Text>Cidade: {cidade}</Text>
          <Text>Faixa: {faixa}</Text>
        </View>
      );
    };
    export default function App() {
      const [introducao, setIntroducao] = useState('');

      useEffect(() => {
        setIntroducao(getHora());
    }, []);
      return (
        <View style={styles.appContainer}>
          <IntroducaoPersonalizada introducao={introducao} nome={pessoa.nome}
    style={styles.IntroducaoPersonalizada} />
          <ExibirPessoa {...pessoa} />
        </View>
      );
    }
    const styles = StyleSheet.create({
      appContainer: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
      },
      introducaoContainer: {
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
      },
      IntroducaoPersonalizada: {
        backgroundColor: 'white',
        padding: 10,
      },
      container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      avatar: {
        width: 300,
        height: 300,
        borderRadius: 500,
        marginBottom: 10,
      }
    });
    
    
