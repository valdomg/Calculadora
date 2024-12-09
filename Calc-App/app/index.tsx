import { useState } from "react";
import { Text, View, StyleSheet, Switch} from "react-native";
import { ThemeContext } from "./context/ThemeContext";

export default function Index() {
  const [theme, setTheme] = useState('light');
  return (
    <View
      
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",        
      }}
    >
      
      <Switch
        value={theme==='light'}
        onValueChange={() => setTheme(theme==='light'? 'dark':'light')}
      />

      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
