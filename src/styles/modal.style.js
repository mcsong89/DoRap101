import { StyleSheet, Dimensions, Platform } from "react-native";

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
  noticeContainer: {
    flex: 1,
    backgroundColor: "#1e1430"
  },
  notiTopbarContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    margin: 14
  },
  profileContainer: {
    flex: 1,
    flexDirection: "column"
  },
  contentsContainer: {
    flex: 2
  },
  empty: {
    flex: 1
  },
  beatClose: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  contentsBeat: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12
  },
  beatItems: {
    alignItems: "center"
  },
  beatLabel: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "NotoSansKR-Medium"
  },
  beatImage: {
    width: 32,
    height: 32
  },
  notiTopTitle: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  notiClose: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  notiTitleLabel: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "NotoSansKR-Medium"
  },
  close: {
    width: 32,
    height: 32
  },
  contentsItem: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    margin: 12
  },
  contentsFollowing: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  contentsmyNoti: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  notifollowingLabel: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "NotoSansKR-Medium"
  },
  myNotiLabel: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "NotoSansKR-Medium"
  },
  topBarLeft: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topBarRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  notice: {
    width: 32,
    height: 32
  },
  settings: {
    width: 32,
    height: 32
  },
  profileImage: {
    alignItems: "center"
  },
  photo: {
    width: 76,
    height: 76,
    backgroundColor: "transparent",
    borderRadius: 38,
    marginTop: 16
  },
  crown: {
    position: "absolute",
    width: 32,
    height: 32,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  changePhoto: {
    position: "absolute",
    width: 24,
    height: 24,
    flexDirection: "row",
    alignItems: "flex-end",
    right: 0,
    bottom: 0,
    backgroundColor: "transparent"
  },
  avataInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16
  },
  avatName: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "NotoSansKR-Regular"
  },
  ranking: {
    color: "#3dfd59",
    fontSize: 14,
    fontFamily: "Roboto"
  },
  avataDescription: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 4
  },
  profileItems: {
    alignItems: "center"
  },
  profileCount: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "NotoSansKR-Regular"
  },
  profileItemsLabel: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 12,
    fontFamily: "NotoSansKR-Regular"
  },
  gridView: {
    marginTop: 20,
    flex: 1
  },
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: "transparent",
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
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  }
});
