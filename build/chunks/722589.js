/** Chunk was on web.js **/
/** chunk id: 722589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => d
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk593473 = require("./593473.js"),
  Chunk981631 = require("./981631.js");
let a = "_",
  o = /(-|%20)/g,
  s = "AND",
  l = /%26/g,
  c = {};

function u(e) {
  return null == e ? "" : e.toUpperCase().replace(o, a).replace(l, s)
}

function d(e, t) {
  var n;
  let [, , a, o] = e.split("/"), s = u(a), l = null != (n = c[s]) ? n : s, d = u(o);
  return i.oAB.hasOwnProperty(l) && (null == d || "" === d || i.oAB.hasOwnProperty(d)) ? {
    params: (0, r.parse)(null != t ? t : location.search),
    section: i.oAB[l],
    subsection: d
  } : null
}