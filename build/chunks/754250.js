/** Chunk was on 3115 **/
/** chunk id: 754250, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk782497 = require("./782497.js"),
  Chunk329022 = require("./329022.js"),
  Chunk58723 = require("./58723.js");
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