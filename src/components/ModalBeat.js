/* eslint-disable */
import React, { Component } from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles, { colors } from "../styles/modal.style";
import { Container, Content, Icon, Button } from "native-base";
import Image from "react-native-remote-svg";

export default class modalBeat extends Component {
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
              <View style={styles.beatClose}>
                <TouchableOpacity onPress={this.props.setModal}>
                  <Image
                    source={require("../../assets/images/beat/delete.svg")}
                    style={styles.close}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.notiTopTitle}>
                <Text style={styles.notiTitleLabel}>비트</Text>
              </View>
              <View style={styles.notiClose}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/beat/select.svg")}
                    style={styles.close}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contentsBeat}>
              <View style={styles.beatItems}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/beat/hot.svg")}
                    style={styles.beatImage}
                  />
                </TouchableOpacity>
                <Text style={styles.beatLabel}>인기</Text>
              </View>
              <View style={styles.beatItems}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/beat/fast.svg")}
                    style={styles.beatImage}
                  />
                </TouchableOpacity>
                <Text style={styles.beatLabel}>빠른</Text>
              </View>
              <View style={styles.beatItems}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/beat/slow.svg")}
                    style={styles.beatImage}
                  />
                </TouchableOpacity>
                <Text style={styles.beatLabel}>느린</Text>
              </View>
              <View style={styles.beatItems}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/beat/normal.svg")}
                    style={styles.beatImage}
                  />
                </TouchableOpacity>
                <Text style={styles.beatLabel}>노멀</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
