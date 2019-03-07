import { StyleSheet } from "react-native";

export const colors = {
  black: "#1a1917",
  gray: "#888888",
  background1: "#00000000",
  background2: "#000000"
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  container: {
    flex: 1
    // backgroundColor: colors.background1
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  topBarContainer: {
    backgroundColor: "transparent",
    padding: 15,
    zIndex: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
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
    alignItems: "center",
    justifyContent: "space-around"
  },
  recButton: {
    width: 40,
    height: 40
  },
  searchButton: {
    width: 32,
    height: 32
  },
  notiButton: {
    width: 32,
    height: 32
  },
  avataButton: {
    width: 32,
    height: 32,
    backgroundColor: "transparent",
    borderRadius: 16
  },
  exampleContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  cardDeckview: {},
  feedArea: {
    flexDirection: "row",
    justifyContent: "center"
  },
  feedcontents: {
    paddingHorizontal: 12,
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "NotoSansKR-Regular",
    textShadowColor: "#80000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  exampleContainerDark: {
    backgroundColor: colors.black
  },
  exampleContainerLight: {
    backgroundColor: "white"
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  titleDark: {
    color: colors.black
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "center"
  },
  slider: {
    marginTop: 15,
    overflow: "visible" // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  },
  mainBG: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
