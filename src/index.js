/* eslint-disable */
import React, { Component } from "react";
import AppNavigator from "./navigation/AppNavigator";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import allReducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(thunk))
);

console.log("store: ", store.getState());
export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      "NotoSansKR-Light": require("../assets/fonts/NotoSansKR-Light-Hestia.otf"),
      "NotoSansKR-Medium": require("../assets/fonts/NotoSansKR-Medium-Hestia.otf"),
      "NotoSansKR-Regular": require("../assets/fonts/NotoSansKR-Regular-Hestia.otf"),
      "NotoSansKR-Bold": require("../assets/fonts/NotoSansKR-Bold-Hestia.otf"),
      Roboto: require("native-base/Fonts/Roboto.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
