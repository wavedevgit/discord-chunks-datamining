/** Chunk was on 47950 **/
/** chunk id: 513608, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk708005 = require("./708005.js");
let i = (0, Chunk205662.handleHover)(function(e) {
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
  }, n.createElement(a.rp, {
    color: r,
    onClick: i,
    onHover: l,
    focusStyle: s
  }))
})