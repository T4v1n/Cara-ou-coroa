import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  resultadoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  resultadoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  moedaImagem: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  estatisticasContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  estatisticasTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  estatisticasItem: {
    fontSize: 16,
    marginVertical: 5,
    color: '#555',
  },
});

export default styles;