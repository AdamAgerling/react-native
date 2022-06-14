import { SafeAreaView } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SafeViewAndroid from './components/SafeViewAndroid';
import FetchValorant from './components/FetchValorant';
import SelectedAgent from './components/SelectedAgent';
import Navigation from './components/Navigation';
import { NavigationContainer } from '@react-navigation/native';


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FetchMaps from './components/FetchMaps';


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Valorant" component={FetchValorant} />
          <Stack.Screen name="Agent" component={SelectedAgent} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* BottomNAVBAR */}
      {/* <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Maps" component={FetchMaps} />
      <Tab.Screen name="Valorant" component={FetchValorant} />
    </Tab.Navigator>
    </NavigationContainer> */}


    </SafeAreaView>
  );
};

export default App;
