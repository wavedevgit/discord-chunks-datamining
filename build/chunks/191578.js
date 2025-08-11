/** Chunk was on 21153 **/
/** chunk id: 191578, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js"),
  Chunk329022 = require("./329022.js"),
  Chunk116850 = require("./116850.js");
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