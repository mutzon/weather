import { s } from "./App.style";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home></Home>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
