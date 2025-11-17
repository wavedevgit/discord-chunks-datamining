/** Chunk was on 66382 **/
/** chunk id: 31848, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk857614 = require("./857614.js"),
  Chunk329022 = require("./329022.js"),
  Chunk894064 = require("./894064.js");
let l = function(e) {
  var t = e.colors,
    r = e.onClick,
    l = e.onSwatchHover,
    s = (0, o.default)({
      default: {
        swatches: {
          marginRight: "-10px"
        },
        swatch: {
          width: "22px",
          height: "22px",
          float: "left",
          marginRight: "10px",
          marginBottom: "10px",
          borderRadius: "4px"
        },
        clear: {
          clear: "both"
        }
      }
    });
  return n.createElement("div", {
    style: s.swatches
  }, (0, a.Z)(t, function(e) {
    return n.createElement(i.m4, {
      key: e,
      color: e,
      style: s.swatch,
      onClick: r,
      onHover: l,
      focusStyle: {
        boxShadow: "0 0 4px " + e
      }
    })
  }), n.createElement("div", {
    style: s.clear
  }))
}