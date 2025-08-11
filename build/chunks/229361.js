/** Chunk was on 21153 **/
/** chunk id: 229361, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js"),
  Chunk329022 = require("./329022.js"),
  Chunk566566 = require("./566566.js");
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
  }, (0, a.Z)(l, function(e, o) {
    return n.createElement(i.Z, {
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