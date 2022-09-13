import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Button title="Send" />
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
    title: string
}

function Button(props: ButtonProps) {
    return(
        <TouchableOpacity style={styles.sendButton}>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'red',
    fontSize: 22
  },

  sendButton: {
    backgroundColor: 'green',
    padding: 19
  }
});
