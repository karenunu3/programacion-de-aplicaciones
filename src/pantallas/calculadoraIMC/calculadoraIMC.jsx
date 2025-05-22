import { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './calculadoraIMC.styles';
import { ResultadoIMC } from './ResultadoIMC';

export const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const imc = calcularIMC(peso, altura);
    const categoria = obtenerCategoria(imc);
    setResultado({ imc, categoria });
  };

  const reiniciar = () => {
    setResultado(null);
    setPeso('');
    setAltura('');
  };

  if (resultado) {
    return (
      <ResultadoIMC
        imc={resultado.imc}
        categoria={resultado.categoria}
        onVolver={reiniciar}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Calculadora IMC</Text>
      <Text style={styles.text3}>IMC = Peso (kg) / Altura² (m)</Text>

      <Image
        style={styles.imagen}
        source={{ uri: "https://salud.santander.es/sites/default/files/iconos_actividad_fisica.png" }}
      />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          value={peso}
          onChangeText={setPeso}
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Ingrese su peso"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Altura (m)</Text>
        <TextInput
          value={altura}
          onChangeText={setAltura}
          style={styles.textInput2}
          keyboardType="numeric"
          placeholder="Ingrese su altura"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
};

const calcularIMC = (peso, altura) => {
  let imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
  return imc.toFixed(2);
};

const obtenerCategoria = (imc) => {
  imc = parseFloat(imc);
  if (imc < 18.5) return 'Bajo peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  return 'Obesidad';
};
