import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
    return(
        <Tabs
               screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e'
                },
                headerShadowVisible: false,
                headerTintColor: '#ffffff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
               }}
             >
            
            <Tabs.Screen
             name="index"
             options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} color={color} size={24} />
                ),
             }}
            />

            <Tabs.Screen
             name="about"
             options={{
                title: 'About',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'information-variant-circle' : 'information-variant-circle-outline'} color={color} size={24} />
                ),
             }}
             />

             <Tabs.Screen
             name="toDoList"
             options={{
                title: 'List',
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={ focused ? "clipboard-list" : 'clipboard-list-outline'} size={24} color={color} />
                ),
             }}
             />
             
             </Tabs>
    );
}

