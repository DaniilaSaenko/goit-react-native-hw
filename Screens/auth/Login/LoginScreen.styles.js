import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 6,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    paddingLeft: 16,
    fontSize: 16,
  },
  form: {
    position: "relative",

    paddingTop: 80,
    paddingBottom: 66,
    backgroundColor: "#fff",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  headerTitle: {
    fontWeight: 500,
    fontSize: 30,
    marginTop: 16,
    color: "#212121",
  },
  registrLink: {
    fontSize: 16,
    color: "#1B4371",
    marginTop: 16,
  },
  inputPasswordWrap: {
    position: "relative",
  },
  passwordShow: {
    position: "absolute",
    right: 0,
    padding: 16,
  },
  showHidePasswordButtonText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
