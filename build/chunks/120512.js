/** Chunk was on 47950 **/
/** chunk id: 120512, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk981735 = require("./981735.js"),
  Chunk708005 = require("./708005.js");
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
  }, (0, a.A)(t, function(e) {
    return n.createElement(i.rp, {
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