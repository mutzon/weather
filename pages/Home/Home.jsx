import { s } from "./Home.style";
import { View } from "react-native";
import { Txt } from "../../Components/Txt/Txt";
import { MeteoBasic } from "../../Components/MeteoBasic/MeteoBasic";

export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic></MeteoBasic>
      </View>
      <View style={s.searchbar_container}>
        <Txt>SearchBar test</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt style={s.txt}>Advanced Weather info</Txt>
      </View>
    </>
  );
}
