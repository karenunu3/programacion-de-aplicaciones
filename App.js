import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const[peso, setPeso]=useState();
  const [altura, setAltura]=useState();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>Calculadora IMC</Text>
      <Image style={styles.imagen} source={{uri: "https://evainstitutotraversari.edu.ec/pluginfile.php/1/theme_lambda/logo/1747146635/Logo01.png"}}/>
      <TextInput onChangeText={(value)=>setPeso(value)} 
      style={styles.textInput} 
      keyboardType='numeric' 
      placeholder='Ingrese su Peso(kg):'></TextInput>
      <TextInput onChangeText={(value)=>{
       setAltura(value);
      console.log(altura);
      }} 
      style={styles.textInput2} 
      keyboardType='numeric' 
      placeholder='Ingrese su Altura(m):'></TextInput>
      <Button title='Calcular' onPress={()=>{Alert.alert("Información", calcularNivelPeso(peso, altura)) }}>
      </Button>
    </View>
  );
}
const calcularIMC=(peso, altura)=>{
  let imc = peso/(altura*altura);
  return imc.toFixed(2);
}
const calcularNivelPeso=(peso, altura)=>{
  let imc= calcularIMC(peso, altura);
  let respuesta="";
if(imc<18.5){
    respuesta = "su IMC es:" +imc+ " Bajo peso";
  }
  if (imc>=18.5 && imc<=24.9){
    respuesta = "su IMC es:"+imc+" peso Normal";
  }
  if(imc>=25 && imc<=29.9){
    respuesta = "su IMC es:"+imc+" Sobre peso";
  }
  if(imc>30){
    respuesta ="su iMC es:"+imc+" obesidad";
  }
  return respuesta;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagen: {
    width: 300,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#1976D2', 
    borderWidth: 2,
  },
  textInput: {
    borderColor: '#1976D2',    
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '90%',
    backgroundColor: '#FFF',   
    color: '#1976D2',
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
  },
  textInput2: {
    borderColor: '#FFEB3B',    
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: '90%',
    backgroundColor: '#FFF',   
    color: '#F57F17',
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',
  },
  text2: {
    color: '#0D47A1',           
    marginVertical: 20,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
    letterSpacing: 0.5,
    textShadowColor: '#BBDEFB',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  alerta1:{
    color: 'red'

  }
});

