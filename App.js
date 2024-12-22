import { s } from "./App.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { ImageBackground } from "react-native";
import backGroundImg from "./assets/background.png";

export default function App() {
  return (
    <ImageBackground
      imageStyle={s.img}
      style={s.img_background}
      source={backGroundImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home></Home>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
