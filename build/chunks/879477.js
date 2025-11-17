/** Chunk was on 66382 **/
/** chunk id: 879477, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk857614 = require("./857614.js"),
  Chunk97323 = require("./97323.js");
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
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".80",
    active: .1 > Math.abs(r.l - .8) && .1 > Math.abs(r.s - .5),
    onClick: t,
    first: true
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".65",
    active: .1 > Math.abs(r.l - .65) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".50",
    active: .1 > Math.abs(r.l - .5) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".35",
    active: .1 > Math.abs(r.l - .35) && .1 > Math.abs(r.s - .5),
    onClick: t
  })), n.createElement("div", {
    style: i.swatch
  }, n.createElement(a.Z, {
    hsl: r,
    offset: ".20",
    active: .1 > Math.abs(r.l - .2) && .1 > Math.abs(r.s - .5),
    onClick: t,
    last: true
  })), n.createElement("div", {
    style: i.clear
  }))
}