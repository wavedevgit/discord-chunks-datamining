/** Chunk was on 47950 **/
/** chunk id: 759551, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk981735 = require("./981735.js"),
  Chunk38579 = require("./38579.js");
let l = function(e) {
  var t = e.onClick,
    r = e.onSwatchHover,
    l = e.group,
    s = e.active,
    u = (0, o.default)({
      default: {
        group: {
          paddingBottom: "10px",
          width: "40px",
          float: "left",
          marginRight: "10px"
        }
      }
    });
  return n.createElement("div", {
    style: u.group
  }, (0, a.A)(l, function(e, o) {
    return n.createElement(i.A, {
      key: e,
      color: e,
      active: e.toLowerCase() === s,
      first: 0 === o,
      last: o === l.length - 1,
      onClick: t,
      onSwatchHover: r
    })
  }))
}