import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Notifications({ navigation }) {
    return (
      <View style={styles.container}>
          <Text>Texto</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }

})

export default Notifications