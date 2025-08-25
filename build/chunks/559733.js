/** Chunk was on web.js **/
/** chunk id: 559733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk247917 = require("./247917.js"),
  Chunk926390 = require("./926390.js");
let a = e => {
  let t, n = (0, i.u)();
  if (!n.display) return null;
  let {
    display: a,
    ...s
  } = n;
  return t = "children" in e ? "function" == typeof e.children ? e.children(s) : e.children : e.generator(s), r.createElement(o._.Provider, {
    value: s
  }, t)
}