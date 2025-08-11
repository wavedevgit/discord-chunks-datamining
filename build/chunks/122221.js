/** Chunk was on 21153 **/
/** chunk id: 122221, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js");
let a = function(e) {
  var t = e.direction,
    r = (0, o.default)({
      default: {
        picker: {
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          transform: "translate(-9px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
        }
      },
      vertical: {
        picker: {
          transform: "translate(-3px, -9px)"
        }
      }
    }, {
      vertical: "vertical" === t
    });
  return n.createElement("div", {
    style: r.picker
  })
}