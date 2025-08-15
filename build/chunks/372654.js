/** Chunk was on web.js **/
/** chunk id: 372654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ML: () => s,
  nH: () => l,
  vK: () => d,
  yV: () => a
});
var Chunk180650 = require("./180650.js"),
  Chunk921948 = require("./921948.js");
let a = 1060,
  o = 180,
  s = e => e * (0, i.Z)(),
  l = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : o,
      {
        primary: n,
        secondary: r
      } = e;
    return "linear-gradient(".concat(t, "deg, ").concat(n.toHslString(), ", ").concat(r.toHslString(), ")")
  },
  c = [require("./241371.js"), require("./448509.js")],
  u = {
    ["".concat(Chunk180650.T.FANTASY)]: [require("./709393.js"), require("./646584.js")],
    ["".concat(Chunk180650.T.ANIME)]: [require("./647387.js"), require("./448509.js")],
    ["".concat(Chunk180650.T.BREAKFAST)]: [require("./289901.js"), require("./402344.js")],
    ["".concat(Chunk180650.T.FALL)]: [require("./432170.js"), require("./15888.js")],
    ["".concat(Chunk180650.T.WINTER)]: [require("./304088.js"), require("./774694.js")],
    ["".concat(Chunk180650.T.MONSTERS)]: [require("./857578.js"), require("./441506.js")]
  },
  d = e => {
    var t;
    return null == e ? c : null != (t = u[e]) ? t : c
  }