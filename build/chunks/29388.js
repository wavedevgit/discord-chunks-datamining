/** Chunk was on web.js **/
/** chunk id: 29388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk864814 = require("./864814.js"),
  Chunk220871 = require("./220871.js");
let o = e => {
  let t, n = (0, i.u)();
  if (!n.display) return null;
  let {
    display: o,
    ...s
  } = n;
  return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), r.createElement(a._.Provider, {
    value: s
  }, t)
}