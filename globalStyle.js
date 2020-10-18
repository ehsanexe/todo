import {useFonts,DancingScript_400Regular,} from '@expo-google-fonts/dancing-script'
import { AppLoading } from 'expo';

export default function globalStyle(){


    let [fontsLoaded] = useFonts({
      DancingScript_400Regular,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }
}

const globaltyles = StyleSheet.create({

    text: {
        marginLeft: 10,
        color: 'white',
        fontFamily: 'DancingScript_400Regular',
        fontSize: 18
      },

})