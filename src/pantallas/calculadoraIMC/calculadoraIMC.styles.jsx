import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', // Fondo lavanda claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  imagen: {
    width: 200,
    height: 100,
    marginBottom: 24,
    borderRadius: 16,
    borderColor: '#EC4899', // Rosa fuerte
    borderWidth: 2,
    shadowColor: '#EC4899',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  textInput: {
    borderColor: '#F9A8D4', // Rosa suave
    borderWidth: 1.8,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    width: '100%',
    backgroundColor: '#FFF1F2', // Rosa muy claro
    color: '#9D174D', // Rosa oscuro para texto
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  textInput2: {
    borderColor: '#FBCFE8', // Rosado pastel
    borderWidth: 1.8,
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    width: '100%',
    backgroundColor: '#FFE4E6', // Fondo rosado suave
    color: '#831843', // Texto intenso
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
  text2: {
    color: '#BE185D', // Rosa fuerte
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Poppins_600SemiBold',
  },
  text3: {
    color: '#9D174D', // Rosado medio
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#DB2777', // Rosa vibrante
    marginBottom: 4,
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  inputGroup: {
    width: '90%',
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#EC4899', // Rosa fuerte
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    shadowColor: '#F472B6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    width: '90%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
  },
});
