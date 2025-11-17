/** Chunk was on 66382 **/
/** chunk id: 351863, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk857614 = require("./857614.js"),
  Chunk894064 = require("./894064.js");
let i = (0, Chunk857614.handleHover)(function(e) {
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