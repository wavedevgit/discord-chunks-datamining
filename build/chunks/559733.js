/** Chunk was on web.js **/
/** chunk id: 559733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk247917 = require("./247917.js"),
  Chunk926390 = require("./926390.js");
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