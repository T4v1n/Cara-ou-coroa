import React, { useState } from 'react';
import { Text, View, Button, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from './FormStyle';

// Normalmente você importaria as imagens verdadeiras
// Substitua estes caminhos pelos caminhos das suas imagens
const caraImage = require('../../assets/images/cara.png');
const coroaImage = require('../../assets/images/coroa.png');

const CaraCoroa = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState("cara");
  const [resultado, setResultado] = useState(null);
  const [imagemResultado, setImagemResultado] = useState(null);
  const [totalJogos, setTotalJogos] = useState(0);
  const [vitoriasUsuario, setVitoriasUsuario] = useState(0);
  const [vitoriasMaquina, setVitoriasMaquina] = useState(0);

  const realizarSorteio = () => {
    // Sorteia cara (0) ou coroa (1)
    const sorteio = Math.floor(Math.random() * 2);
    const resultadoSorteio = sorteio === 0 ? "cara" : "coroa";
    
    // Atualiza o resultado e a imagem
    setResultado(resultadoSorteio);
    setImagemResultado(sorteio === 0 ? caraImage : coroaImage);
    
    // Incrementa o contador de jogos
    setTotalJogos(prevTotal => prevTotal + 1);
    
    // Verifica quem ganhou
    if (resultadoSorteio === escolhaUsuario) {
      setVitoriasUsuario(prev => prev + 1);
    } else {
      setVitoriasMaquina(prev => prev + 1);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cara ou Coroa</Text>
      
      <Text style={styles.subtitle}>Escolha sua opção:</Text>
      <Picker
        selectedValue={escolhaUsuario}
        style={styles.picker}
        onValueChange={(itemValue) => setEscolhaUsuario(itemValue)}
      >
        <Picker.Item label="Cara" value="cara" />
        <Picker.Item label="Coroa" value="coroa" />
      </Picker>
      
      <Button 
        title="Realizar Sorteio" 
        onPress={realizarSorteio} 
        color="#4e9af1" 
      />
      
      {imagemResultado && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>
            Resultado: {resultado === "cara" ? "Cara" : "Coroa"}
          </Text>
          <Image 
            source={imagemResultado}
            style={styles.moedaImagem}
            resizeMode="contain"
          />
          <Text style={styles.resultadoTexto}>
            {resultado === escolhaUsuario ? "Você acertou!" : "Você errou!"}
          </Text>
        </View>
      )}
      
      <View style={styles.estatisticasContainer}>
        <Text style={styles.estatisticasTitulo}>Estatísticas:</Text>
        <Text style={styles.estatisticasItem}>Total de jogos: {totalJogos}</Text>
        <Text style={styles.estatisticasItem}>Suas vitórias: {vitoriasUsuario}</Text>
        <Text style={styles.estatisticasItem}>Vitórias da máquina: {vitoriasMaquina}</Text>
        {totalJogos > 0 && (
          <Text style={styles.estatisticasItem}>
            Taxa de acerto: {((vitoriasUsuario / totalJogos) * 100).toFixed(1)}%
          </Text>
        )}
      </View>
    </View>
  );
};

export default CaraCoroa;