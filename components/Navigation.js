import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FetchValorant from './FetchValorant';
import FetchMaps from './FetchMaps';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Agents" component={FetchValorant} />
      <Tab.Screen name="Maps" component={FetchMaps} />
    </Tab.Navigator>
  );
};

export default Navigation;

// const styles = StyleSheet.create({
//   test: {
//     zIndex: 3,
//     elevation: 3,
//   },
// });
