/** Chunk was on web.js **/
/** chunk id: 47760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VK: () => o,
  e: () => a
});
var Chunk900089 = require("./900089.js"),
  Chunk874893 = require("./874893.js");
require("./231338.js");

function o(e) {
  let {
    angle: t,
    colors: n
  } = e;
  return "linear-gradient(".concat(t, "deg, ").concat(n.map(e => {
    let {
      token: t,
      stop: n
    } = e;
    return "".concat((0, r.x3)(t, {
      saturation: 1
    }), " ").concat(n, "%")
  }).join(", "), ")")
}
let a = e => i.yW[e]