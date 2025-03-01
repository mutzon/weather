import { s } from "./Home.style";
import { View } from "react-native";
import { Txt } from "../../Components/Txt";

export function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Txt onPress={() => console.log("Hello")} style={{ fontSize: 70 }}>
          Hello
        </Txt>
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
