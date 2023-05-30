import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 100,
    paddingBottom: 50,
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 92,
    color: "#118319",
    fontWeight: 700,
    borderColor: "#41da4b",
    borderLeftWidth: 30,
    borderRightWidth: 30,
    marginBottom: 30,
  },
  boxwrapper: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    borderColor: "#41da4b",
    borderLeftWidth: 20,
    borderRightWidth: 20,
  },
  boxBtns: {
    width: 600,
    marginBottom: 20,
  },
  btn: {
    borderRadius: 10,
    padding: 15,
    border: "3px solid #00000055",
    boxShadow: "0 0 20px 3px #000000dd",
    transition: "all 0.2s",
  },
  btnTxtStyle: {
    fontSize: 50,
    textAlign: "center",
    color: "white",
  },
  btnPrimary: {
    backgroundColor: "#2096f3",
  },
  btnDanger: {
    backgroundColor: "#f03232",
  },
  btnSuccess: {
    backgroundColor: "#22bb0f",
  },
  img: {
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    borderColor: "#41da4b",
    borderWidth: 2,
    borderRadius: 15,
    boxShadow: "0 0 15px 2px black",
  },
  imgBoxs: {
    margin: 10,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  imgBox: {
    width: "50%",
    height: 320,
    padding: 15,
  },
  imgBGC: {
    // backgroundColor: "#add8e661",
  },
});
