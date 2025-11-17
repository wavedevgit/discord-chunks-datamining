/** Chunk was on web.js **/
/** chunk id: 107998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c1: () => l,
  zb: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js");

function i(e, t) {
  if (null == e) return {};
  var n, r, i = a(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function a(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
require("./473749.js");
let [o, s] = (0, require("./975104.jsx").Z)();

function l(e) {
  var {
    children: t
  } = e, n = i(e, ["children"]);
  return (0, r.jsx)(o.Provider, {
    value: n,
    children: t
  })
}