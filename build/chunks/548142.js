/** Chunk was on 21153 **/
/** chunk id: 548142, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js");
let a = function(e) {
  var t = e.hsl,
    r = (0, o.default)({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)"
        }
      },
      "black-outline": {
        picker: {
          boxShadow: "inset 0 0 0 1px #000"
        }
      }
    }, {
      "black-outline": t.l > .5
    });
  return n.createElement("div", {
    style: r.picker
  })
}