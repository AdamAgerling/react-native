import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SafeViewAndroid from './components/SafeViewAndroid';
import SelectedAgent from './components/SelectedAgent';
import Navigation from './components/Navigation';
import SelectedMap from './components/SelectedMap';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Valorant" component={Navigation} />
          <Stack.Screen name="Selected Agent" component={SelectedAgent} />
          <Stack.Screen name="Selected Map" component={SelectedMap} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
