/* eslint-disable */
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Modal from "react-native-modal";
import styles, { colors } from "../styles/modal.style";
import { Container, Content, Icon, Button } from "native-base";
import Image from "react-native-remote-svg";
import ModalNotice from "./ModalNotice";
import { FlatGrid, SectionGrid } from "react-native-super-grid";
import { ENTRIES1, ENTRIES2 } from "../static/entries";

export default class modalProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticemodalVisible: false
    };
  }

  renderFlatGrid() {
    // const items = [
    //   { name: "TURQUOISE", code: "#1abc9c" },
    //   { name: "EMERALD", code: "#2ecc71" },
    //   { name: "PETER RIVER", code: "#3498db" },
    //   { name: "AMETHYST", code: "#9b59b6" },
    //   { name: "WET ASPHALT", code: "#34495e" },
    //   { name: "GREEN SEA", code: "#16a085" },
    //   { name: "NEPHRITIS", code: "#27ae60" },
    //   { name: "BELIZE HOLE", code: "#2980b9" },
    //   { name: "WISTERIA", code: "#8e44ad" },
    //   { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    //   { name: "SUN FLOWER", code: "#f1c40f" },
    //   { name: "CARROT", code: "#e67e22" },
    //   { name: "ALIZARIN", code: "#e74c3c" },
    //   { name: "CLOUDS", code: "#ecf0f1" },
    //   { name: "CONCRETE", code: "#95a5a6" },
    //   { name: "ORANGE", code: "#f39c12" },
    //   { name: "PUMPKIN", code: "#d35400" },
    //   { name: "POMEGRANATE", code: "#c0392b" },
    //   { name: "SILVER", code: "#bdc3c7" },
    //   { name: "ASBESTOS", code: "#7f8c8d" }
    // ];
    const items = [
      {
        name: "소통머신",
        duration: "0:55",
        description: "Lorem ipsum dolor sit amet",
        illustration: "https://i.imgur.com/SsJmZ9jl.jpg",
        index: 0
      },
      {
        name: "미세민지",
        duration: "0:20",
        description: "Lorem ipsum dolor sit amet et nuncat mergitur",
        illustration: "https://i.imgur.com/5tj6S7Ol.jpg",
        index: 1
      },
      {
        name: "랩과즙",
        duration: "0:59",
        description: "Lorem ipsum dolor sit amet et nuncat",
        illustration: "https://i.imgur.com/pmSqIFZl.jpg",
        index: 2
      },
      {
        name: "나랏말쌈디",
        duration: "1:00",
        description: "Lorem ipsum dolor sit amet et nuncat mergitur",
        illustration: "https://i.imgur.com/cA8zoGel.jpg",
        index: 3
      },
      {
        name: "서울사투리",
        duration: "0:45",
        description: "Lorem ipsum dolor sit amet",
        illustration: "https://i.imgur.com/pewusMzl.jpg",
        index: 4
      },
      {
        name: "다이아마잌크",
        duration: "0:57",
        description: "Lorem ipsum dolor sit amet et nuncat",
        illustration: "https://i.imgur.com/l49aYS3l.jpg",
        index: 5
      },
      {
        name: "랩본좌",
        duration: "0:25",
        description: "Lorem ipsum dolor sit amet",
        illustration: "https://i.imgur.com/SsJmZ9jl.jpg",
        index: 6
      },
      {
        name: "민지짱",
        duration: "0:23",
        description: "Lorem ipsum dolor sit amet et nuncat mergitur",
        illustration: "https://i.imgur.com/5tj6S7Ol.jpg",
        index: 7
      },
      {
        name: "후리스타일",
        duration: "0:49",
        description: "Lorem ipsum dolor sit amet et nuncat",
        illustration: "https://i.imgur.com/pmSqIFZl.jpg",
        index: 8
      },
      {
        name: "랩종대왕",
        duration: "1:00",
        description: "Lorem ipsum dolor sit amet et nuncat mergitur",
        illustration: "https://i.imgur.com/cA8zoGel.jpg",
        index: 9
      },
      {
        name: "부산폭격기",
        duration: "0:15",
        description: "Lorem ipsum dolor sit amet",
        illustration: "https://i.imgur.com/pewusMzl.jpg",
        index: 10
      }
    ];

    return (
      <ScrollView>
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({ item, index }) => (
            <View style={styles.slideInnerContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.illustration }}
                  style={styles.image}
                />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardDuration}>{item.duration}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                  <View style={styles.profileArea}>
                    <View style={styles.avata}>
                      <Image
                        source={require("../../assets/images/feeds/oval.jpg")}
                        style={styles.avata}
                      />
                    </View>
                    <Text style={styles.avataName}>{item.name}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }

  render() {
    const { isVisible } = this.props;

    return (
      <View>
        <Modal
          propagateSwipe={true}
          isVisible={isVisible}
          // onSwipeComplete={this.props.setModal}
          // swipeDirection="left"
          onBackButtonPress={this.props.setModal}
          style={{ margin: 0 }}
        >
          <View style={styles.noticeContainer}>
            <View style={styles.notiTopbarContainer}>
              <View style={styles.topBarLeft}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/profile/settings.svg")}
                    style={styles.setting}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.topBarRight}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ noticemodalVisible: true });
                  }}
                >
                  <Image
                    source={require("../../assets/images/profile/notification_badge.svg")}
                    style={styles.notice}
                  />
                </TouchableOpacity>

                <TouchableHighlight onPress={this.props.setModal}>
                  <Image
                    source={require("../../assets/images/profile/delete.svg")}
                    style={styles.close}
                  />
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.profileContainer}>
              <View style={styles.profileImage}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/profile/oval.jpg")}
                    style={styles.photo}
                  />
                  <Image
                    source={require("../../assets/images/profile/composition_small.svg")}
                    style={styles.changePhoto}
                  />
                </TouchableOpacity>
              </View>
              <Image
                source={require("../../assets/images/profile/ranking.svg")}
                style={styles.crown}
              />

              <View style={styles.avataInfo}>
                <Text style={styles.avatName}>랩본좌</Text>
                <Text style={styles.ranking}>1위</Text>
              </View>
              <View style={styles.avataDescription}>
                <View style={styles.views}>
                  <Text style={styles.viewsCount}>93,564,443</Text>
                  <Text style={styles.viewsLabel}>조회수</Text>
                </View>
                <View style={styles.songs}>
                  <Text style={styles.songsCount}>48</Text>
                  <Text style={styles.songsLabel}>작곡수</Text>
                </View>
                <View style={styles.followers}>
                  <Text style={styles.followersCount}>254</Text>
                  <Text style={styles.followersLabel}>팔로워</Text>
                </View>
                <View style={styles.following}>
                  <Text style={styles.followingCount}>1,647</Text>
                  <Text style={styles.followingLabel}>팔로잉</Text>
                </View>
              </View>
            </View>

            <View style={styles.contentsContainer}>
              {this.renderFlatGrid()}
            </View>
          </View>
          {this.state.noticemodalVisible ? (
            <ModalNotice
              isVisible={this.state.noticemodalVisible}
              setModal={() => {
                this.setState({ noticemodalVisible: false });
              }}
            />
          ) : null}
        </Modal>
      </View>
    );
  }
}
