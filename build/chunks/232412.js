/** Chunk was on web.js **/
/** chunk id: 232412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk93163 = require("./93163.js"),
  Chunk386081 = require("./386081.js");
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