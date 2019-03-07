/* eslint-disable */
import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "../styles/index.style";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth / 1.8 + itemHorizontalMargin * 2;

const entryBorderRadius = 4;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: "transparent",
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  imageContainerEven: {
    backgroundColor: colors.black
  },
  isActive: {
    borderRadius: entryBorderRadius,
    borderColor: "#ffffff",
    borderWidth: 3
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  cardInfo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-around",
    margin: 8
  },
  cardDuration: {
    flex: 3,
    textAlign: "right",
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "NotoSansKR-Regular"
  },
  cardDescription: {
    flex: 2,
    justifyContent: "space-between",
    textAlign: "left",
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "NotoSansKR-Regular"
  },
  profileArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  avata: {
    flex: 1,
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    borderRadius: 12
  },
  avataName: {
    flex: 3,
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "NotoSansKR-Regular",
    textAlign: "left"
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius
    // backgroundColor: "white"
  },
  radiusMaskEven: {
    // backgroundColor: colors.black
  },
  textContainer: {
    justifyContent: "center",
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius
  },
  textContainerEven: {
    backgroundColor: colors.black
  },
  title: {
    color: colors.black,
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5
  },
  titleEven: {
    color: "white"
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: "italic"
  },
  subtitleEven: {
    color: "rgba(255, 255, 255, 0.7)"
  }
});
