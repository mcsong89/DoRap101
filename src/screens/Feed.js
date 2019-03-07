/* eslint-disable */
import React, { Component } from "react";
import {
  Alert,
  Platform,
  View,
  ImageBackground,
  ScrollView,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Video, LinearGradient } from "expo";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "../styles/SliderEntry.style";
import Camera from "./Camera";
import SliderEntry from "../components/SliderEntry";
import ModalNotice from "../components/ModalNotice";
import ModalProfile from "../components/ModalProfile";
import styles, { colors } from "../styles/index.style";
import { ENTRIES1, ENTRIES2 } from "../static/entries";
import { scrollInterpolators, animatedStyles } from "../utils/animations";
import { Container, Content, Icon, Button } from "native-base";
import Image from "react-native-remote-svg";

const IS_ANDROID = Platform.OS === "android";
const SLIDER_1_FIRST_ITEM = 0;
var first_data = null;

export default class Feed extends Component {
  static navigationOptions = {
    tabBarVisible: false
    // tabBarIcon: ({ tintColor }) => (
    //   <Icon name="ios-home" style={{ color: tintColor }} />
    // )
  };
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      presentData: "",
      isSelected: [], // redux로 선택된 항목의 피드들만 가져오게 관리하기
      currentIndex: 0,
      profilemodalVisible: false,
      noticemodalVisible: false
    };
  }

  componentDidMount() {
    if (this.state.presentData === "") {
      first_data = setTimeout(() => {
        this.setState({
          presentData: ENTRIES2[0].illustration
        });
      }, 3000);
    }
  }

  componentWillUnmount() {}

  _setData(item, index) {
    this.setState({
      presentData: item.illustration,
      currentIndex: index
    });
  }

  _renderItem = ({ item, index }) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        setData={this._setData.bind(this, item, index)}
        currentIndex={this.state.currentIndex}
      />
    );
  };

  // swipe(n) {
  //   swiper = this.refs.swiper;
  //   if (swiper) swiper.scrollBy(n || 1);
  // }
  renderTopBar() {
    return (
      <View style={styles.topBarContainer}>
        <View style={styles.topBarInner}>
          <View style={styles.topBarLeft}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Camera")}
            >
              <Image
                source={require("../../assets/images/feeds/dorap.svg")}
                style={styles.recButton}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topBarRight}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/feeds/finder.svg")}
                style={styles.searchButton}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setNoticeModalVisible(true);
              }}
            >
              <Image
                source={require("../../assets/images/feeds/notification_badge.svg")}
                style={styles.notiButton}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setProfileModalVisible(true);
              }}
            >
              <Image
                source={require("../../assets/images/feeds/oval.jpg")}
                style={styles.avataButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  setProfileModalVisible(visible) {
    this.setState({ profilemodalVisible: visible });
  }

  setNoticeModalVisible(visible) {
    this.setState({ noticemodalVisible: visible });
  }

  momentumExample() {
    return (
      <View>
        <Carousel
          data={ENTRIES2}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          enableMomentum
          activeSlideAlignment="start"
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          activeAnimationType="spring"
          activeAnimationOptions={{
            friction: 4,
            tension: 40
          }}
        />
      </View>
    );
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    const example = this.momentumExample();

    return (
      <Container>
        <StatusBar
          // translucent
          // backgroundColor="rgba(0, 0, 0, 0.3)"
          // barStyle="light-content"
          hidden={true}
        />
        <SafeAreaView style={styles.safeArea}>
          <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
            {/* <Swiper
              ref="swiper"
              loop={false}
              showsPagination={false}
              index={1}
              scrollEnabled={this.state.outerScrollEnabled}
            > */}
            {/* <View style={{ flex: 1 }}>
                <Camera/>
              </View> */}
            <ImageBackground
              source={{ uri: this.state.presentData }}
              style={styles.mainBG}
            >
              {/* <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          shouldPlay
          isLooping
          style={styles.mainBG}
        /> */}
              {this.renderTopBar()}
              <View style={styles.exampleContainer}>
                {this.gradient}
                <View style={styles.feedArea}>
                  <Text style={styles.feedcontents}>추천</Text>
                  <Text
                    style={[
                      styles.feedcontents,
                      { color: "rgba(255, 255, 255, 0.5)" }
                    ]}
                  >
                    인기
                  </Text>
                  <Text
                    style={[
                      styles.feedcontents,
                      { color: "rgba(255, 255, 255, 0.5)" }
                    ]}
                  >
                    팔로잉
                  </Text>
                </View>
                <View style={styles.cardDeckview}>
                  {/* redux로 선택된 항목의 피드들만 가져오게 관리하기 */}
                  {example}
                </View>
              </View>
              <ModalNotice
                isVisible={this.state.noticemodalVisible}
                setModal={() => {
                  this.setState({ noticemodalVisible: false });
                }}
              />
              <ModalProfile
                isVisible={this.state.profilemodalVisible}
                setModal={() => {
                  this.setState({ profilemodalVisible: false });
                }}
              />
            </ImageBackground>
            {/* </Swiper> */}
          </Content>
        </SafeAreaView>
      </Container>
    );
  }
}
