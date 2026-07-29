import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import '@/global.css';
import { GluestackUIProvider } from '@shared/gluestack/ui/gluestack-ui-provider';

export default function RootLayout() {

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: '#FFF',
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          />
        </Stack>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  
  );
}
