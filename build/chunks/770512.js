/** Chunk was on 66382 **/
/** chunk id: 770512, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk857614 = require("./857614.js"),
  Chunk329022 = require("./329022.js"),
  Chunk291413 = require("./291413.js");
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