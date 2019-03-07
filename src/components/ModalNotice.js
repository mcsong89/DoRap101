/* eslint-disable */
import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import Modal from "react-native-modal";
import styles, { colors } from "../styles/modal.style";
import { Container, Content, Icon, Button } from "native-base";
import Image from "react-native-remote-svg";

export default class modalNotice extends Component {
  render() {
    const { isVisible } = this.props;

    return (
      <View>
        <Modal
          isVisible={isVisible}
          // onSwipeComplete={this.props.setModal}
          // swipeDirection="left"
          onBackButtonPress={this.props.setModal}
          style={{ margin: 0 }}
        >
          <View style={styles.noticeContainer}>
            <View style={styles.notiTopbarContainer}>
              <View style={styles.empty} />
              <View style={styles.notiTopTitle}>
                <Text style={styles.notiTitleLabel}>알림</Text>
              </View>
              <View style={styles.notiClose}>
                <TouchableHighlight onPress={this.props.setModal}>
                  <Image
                    source={require("../../assets/images/notice/delete.svg")}
                    style={styles.close}
                  />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.contentsItem}>
              <View style={styles.contentsFollowing}>
                <Text style={styles.notifollowingLabel}>팔로잉</Text>
              </View>
              <View style={styles.contentsmyNoti}>
                <Text style={styles.myNotiLabel}>내 소식</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
