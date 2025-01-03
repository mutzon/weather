import { s } from "./Home.style";
import { Text, View } from "react-native";

export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={s.txt}>Basic Weather info</Text>
      </View>
      <View style={s.searchbar_container}>
        <Text style={s.txt}>SearchBar test</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text style={s.txt}>Advanced Weather info</Text>
      </View>
    </>
  );
}
