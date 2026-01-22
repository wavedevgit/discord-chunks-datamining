/** Chunk was on web.js **/
/** chunk id: 644235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FK: () => a,
  PC: () => s
});
var Chunk374994 = require("./374994.js"),
  Chunk185928 = require("./185928.js");
require("./818348.js");

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
    return "".concat((0, r.nt)(t, {
      saturation: 1
    }), " ").concat(n, "%")
  }).join(", "), ")")
}
let s = e => i.dP[e]