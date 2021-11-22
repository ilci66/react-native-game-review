import React, { useState } from 'react';
import * as Font from 'expo-font'
import Home from './screens/home';
// this runs when the app is loading in when given a function it runs that function as well
// so If for example my text uses a font, fonts will load before the app 
import { AppLoading } from 'expo';


const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  if(fontsLoaded){
    return (
      <Home />
    );
  }else{
    return(
      <AppLoading 
        //starts downloading here 
        startAsync={getFonts}
        // what to do on finish
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}