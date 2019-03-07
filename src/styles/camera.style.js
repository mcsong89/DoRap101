/* eslint-disable */
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1917",
    justifyContent: "space-between"
  },
  noPermissions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  topBarContainer: {
    backgroundColor: "transparent",
    padding: 15,
    zIndex: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  recordDuration: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  topBarInner: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around"
  },
  topBarLeft: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topBarRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  close: {
    width: 32,
    height: 32
  },
  topBarFlash: {
    color: "white",
    fontWeight: "bold"
  },
  topBarFacing: {
    width: 32,
    height: 32
  },
  topBarCameraOff: {
    width: 32,
    height: 32
  },
  bottomBarRecordArea: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    bottom: 52
  },
  bottomBarRecordWarp: {
    height: 72,
    width: 72,
    borderWidth: 3,
    borderColor: "#e83215",
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomBarRecordInner: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: "#e83215",
    justifyContent: "center",
    alignItems: "center"
  },
  countDown: {
    height: 64,
    width: 64,
    borderRadius: 32,
    color: "white",
    fontSize: 44,
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    fontFamily: "Roboto"
  },
  bottomBarStop: {
    fontSize: 24,
    color: "#e83215",
    fontWeight: "bold"
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  bottomBarBeatArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 15
  },
  beatPlay: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center"
  },
  beatName: {
    marginLeft: 8
  },
  play_list: {
    flex: 1,
    alignItems: "flex-end"
  },
  enabledTouch: {},
  disabledTouch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 15
  }
});
