import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import Deck from "./Deck";
import Title from "./Title";

export default class Home extends Component {
  render() {
    return (
      <div class="container ">
        <div class=" justify-content-center">
          <Title name="Welcome to" title="Davey's Shop" />
        </div>
        <div class="slider-wrapper">
          Selling
          <div class=" slider">
            <div class="slider-text1">Shoes</div>
            <div class="slider-text2">Clothes</div>
            <div class="slider-text3">Bags :)</div>
          </div>
        </div>
        <div id="card">
          <Deck />
        </div>
      </div>
    );
  }
}
