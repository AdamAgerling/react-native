import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SafeViewAndroid from './components/SafeViewAndroid';
import FetchValorant from './components/FetchValorant';
import SelectedAgent from './components/SelectedAgent';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FetchValorant} />
          <Stack.Screen name="Selected Agent" component={SelectedAgent} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
