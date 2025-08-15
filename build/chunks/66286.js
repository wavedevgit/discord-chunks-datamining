/** Chunk was on 3115 **/
/** chunk id: 66286, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk647438 = require("./647438.js"),
  Chunk782497 = require("./782497.js"),
  Chunk962438 = require("./962438.js");
let i = (0, Chunk782497.handleHover)(function(e) {
  var t = e.hover,
    r = e.color,
    i = e.onClick,
    l = e.onSwatchHover,
    s = {
      position: "relative",
      zIndex: "2",
      outline: "2px solid #fff",
      boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
    },
    u = (0, o.default)({
      default: {
        swatch: {
          width: "25px",
          height: "25px",
          fontSize: "0"
        }
      },
      hover: {
        swatch: s
      }
    }, {
      hover: t
    });
  return n.createElement("div", {
    style: u.swatch
  }, n.createElement(a.m4, {
    color: r,
    onClick: i,
    onHover: l,
    focusStyle: s
  }))
})