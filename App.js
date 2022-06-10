import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeViewAndroid from './components/SafeViewAndroid';
import FetchValorant from './components/FetchValorant';
import SelectedAgent from './components/selectedAgent';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Valorant" component={FetchValorant} />
          <Stack.Screen name="Agent" component={SelectedAgent} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
