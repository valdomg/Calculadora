import { useState } from "react";
import { Text, View, StyleSheet, Switch} from "react-native";
import { ThemeContext } from "./context/ThemeContext";
import { myColors } from "./styles/Colors";

export default function Index() {
  
  const [theme, setTheme] = useState('light');
  /*CONST AGORA É EM CIMA*/
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: myColors.light,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  return (
    <ThemeContext.Provider value={theme}>
    <View
      style={theme=== 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Switch
        value={theme==='light'}
        onValueChange={() => setTheme(theme==='light'? 'dark':'light')}
      />
    </View>
    </ThemeContext.Provider> 
  );


}
