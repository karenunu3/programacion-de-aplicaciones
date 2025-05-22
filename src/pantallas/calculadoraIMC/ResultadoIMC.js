// ResultadoIMC.js
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ResultadoIMC = ({ imc, categoria, onVolver }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Resultado del IMC</Text>

        <Text style={styles.valorIMC}>{imc}</Text>
        <Text style={[styles.categoria, categoriaColor(categoria)]}>
          {categoria}
        </Text>

        <TouchableOpacity style={styles.button} onPress={onVolver}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const categoriaColor = (categoria) => {
  if (categoria.includes('Bajo')) return { color: '#F472B6' };
  if (categoria.includes('Normal')) return { color: '#10B981' };
  if (categoria.includes('Sobre')) return { color: '#F59E0B' };
  if (categoria.includes('obesidad')) return { color: '#EF4444' };
  return { color: '#6B7280' };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#FFE4E6',
    padding: 28,
    borderRadius: 20,
    shadowColor: '#F9A8D4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    width: '90%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#BE185D',
    marginBottom: 12,
  },
  valorIMC: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#9D174D',
    marginVertical: 12,
  },
  categoria: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#EC4899',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
