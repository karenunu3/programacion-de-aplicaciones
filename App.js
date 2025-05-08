import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calculadora IMC</Text>
      <Image style={styles.imagen} source={{uri: "https://institutotraversari.edu.ec/wp-content/uploads/2025/01/ISTPET-ORIGINAL.jpg"}}/>
      <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Peso(kg):'></TextInput>
      <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Ingrese su Altura(m):'></TextInput>
      <Button title='Calcular' onPress={()=>{Alert.alert("Información","Felicidades, es tu primer Alerta"); }}>
       
       </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width:100,
    height:50
  },
  textInput:{
    borderColor:"#000000",
    borderRadius:1,
    borderWidth:1
  }
});
