/* eslint-disable */
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "../styles/SliderEntry.style";

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const {
      data: { illustration, index },
      even,
      currentIndex
    } = this.props;

    return (
      <Image
        source={{ uri: illustration }}
        style={[styles.image, currentIndex === index ? styles.isActive : {}]}
      />
    );
  }

  render() {
    const {
      data: { name, description, duration },
      even
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.slideInnerContainer}
        onPress={this.props.setData}
      >
        <View style={styles.shadow} />
        <View
          style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        >
          {this.image}
          <View style={styles.cardInfo}>
            <Text style={styles.cardDuration}>{duration}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <View style={styles.profileArea}>
              <View style={styles.avata}>
                <Image
                  source={require("../../assets/images/feeds/oval.jpg")}
                  style={styles.avata}
                />
              </View>
              <Text style={styles.avataName}>{name}</Text>
            </View>
          </View>
        </View>
        {/* <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}
        >
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        </View> */}
      </TouchableOpacity>
    );
  }
}
