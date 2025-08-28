/** Chunk was on web.js **/
/** chunk id: 47760, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  VK: () => a,
  e: () => o
});
var Chunk44315 = require("./44315.js"),
  Chunk874893 = require("./874893.js");
require("./231338.js");

function a(e) {
  let {
    angle: t,
    colors: n
  } = e;
  return "linear-gradient(".concat(t, "deg, ").concat(n.map(e => {
    let {
      token: t,
      stop: n
    } = e;
    return "".concat((0, r.Lq)(t), " ").concat(n, "%")
  }).join(", "), ")")
}
let o = e => i.yW[e]