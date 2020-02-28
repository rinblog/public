import React from "react"
import { Link, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { Tslider } from "./tslider";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let tinySlider
    let home

    if (location.pathname === rootPath) {
      header = (
        <div class="nav-area">
            <input class="nav-checkbox" id="nav-input" type="checkbox"></input>
            <label class="nav-icon" for="nav-input"><span></span></label>
            <label class="nav-overlay" for="nav-input"></label>
            <nav class="nav-menu">
                <ul>
                    <select name="select" onchange="location.href=value;">
                        <option value="">--カテゴリー--</option>
                        <option value="./">HOME</option>
                        <option value="http://monocram-lp.sakura.ne.jp/new_esa/?p=496">説明wiki</option>
                    </select>
                </ul>
            </nav>
        </div>
      )
      tinySlider = (
        <div>
          <Tslider></Tslider>
          <div class="customize-tools">
              <ul class="controls" id="customize-controls">
                <li><img src="img/angle-left.png" /></li>
                <li><img src="img/angle-right.png" /></li>
              </ul>
              <ul class="thumbnails" id="customize-thumbnails">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
          </div>
          <script src="./js/tiny-slider.js"></script>
          <script src="./js/tiny-slider-script.js"></script>
        </div>
      )
      home = (
        <p class="pageLink"><a href="./">HOME</a></p>
      )
    } else {
      header = (
        <div class="nav-area">
            <input class="nav-checkbox" id="nav-input" type="checkbox"></input>
            <label class="nav-icon" for="nav-input"><span></span></label>
            <label class="nav-overlay" for="nav-input"></label>
            <nav class="nav-menu">
                <ul>
                    <select name="select" onchange="location.href=value;">
                        <option value="">--カテゴリー--</option>
                        <option value="../">HOME</option>
                        <option value="http://monocram-lp.sakura.ne.jp/new_esa/?p=496">説明wiki</option>
                    </select>
                </ul>
            </nav>
        </div>
      )
      tinySlider = (
        <div></div>
      )
      home = (
        <p class="pageLink"><a href="../">HOME</a></p>
      )
    }
    return (
      <div
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>
          <div id="contents">
            <div id="sub">
              <header>{header}</header>
              <div>
            	  <p class="summary">ページリンク</p>
              </div>
              <div>
                {home}
              </div>
            </div>
            <div id="main">
              {tinySlider}
              {children}
            </div>
          </div>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
