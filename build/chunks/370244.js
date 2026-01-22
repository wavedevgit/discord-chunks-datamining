/** Chunk was on 47950 **/
/** chunk id: 370244, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk702068 = require("./702068.js");
let i = function(e) {
  var t = e.onClick,
    r = e.hsl,
    i = (0, o.default)({
      default: {
        swatches: {
          marginTop: "20px"
        },
        swatch: {
          boxSizing: "border-box",
          width: "20%",
          paddingRight: "1px",
          float: "left"
        },
        clear: {
          clear: "both"
        }
      }
    });
  return n.createElement("div", {
    style: i.swatches
  }, n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.A, {
    hsl: r,
    offset: ".80",
    active: .1 > Math.abs(r.l - .8) && .1 > Math.abs(r.s - .5),
    onClick: t,
    first: true
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.A, {
    hsl: r,
    offset: ".65",
    active: .1 > Math.abs(r.l - .65) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.A, {
    hsl: r,
    offset: ".50",
    active: .1 > Math.abs(r.l - .5) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.A, {
    hsl: r,
    offset: ".35",
    active: .1 > Math.abs(r.l - .35) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.A, {
    hsl: r,
    offset: ".20",
    active: .1 > Math.abs(r.l - .2) && .1 > Math.abs(r.s - .5),
    onClick: t,
    last: true
  })), n.createElement("div", {
    style: i.clear
  }))
}