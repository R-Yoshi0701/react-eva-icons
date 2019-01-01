import React, { Component } from "react";
import * as eva from "eva-icons";
import styled from "styled-components";

import Body from './components/Body/Body'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ANIMATION_TYPES from './constants/animationTypes';

const Wrapper = styled.div`
  padding: 2em 4em;
  background-color: #f4f4f4;

  max-width: 100vw;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icons: [],
      size: "medium"
    };
  }

  componentWillMount() {
    const icons = Object.keys(eva.icons);
    this.setState({ icons });
  }

  handleSize = (size) => this.setState({size});

  render() {
    const { icons, size } = this.state;

    const config = {
      fill: "#36f",
      size,
      animation: {
        type: ANIMATION_TYPES.PULSE,
        hover: true,
        infinite: false
      }
    };

    return (
      <Wrapper>
        <Header />
        <Body icons={icons} config={config}/>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;