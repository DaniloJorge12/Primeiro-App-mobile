import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Danilo está editando o aplicativo</Text>
      <Text>Podemos editar mexendo nos arquivos</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    color: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
