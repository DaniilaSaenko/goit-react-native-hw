import { Image, StyleSheet, View } from "react-native";

export const Avatar = ({ source, style, ...props }) => {
  return (
    <View style={[styles.containerAv, style]}>
      <Image source={source} style={styles.imageAv} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerAv: {
    overflow: "hidden",

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  imageAv: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },
});
