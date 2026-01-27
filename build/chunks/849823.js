/** Chunk was on web.js **/
/** chunk id: 849823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => d
}), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk492462 = require("./492462.js"),
  Chunk652215 = require("./652215.js");
let a = "_",
  o = /(-|%20)/g,
  s = "AND",
  l = /%26/g;

function c(e) {
  return null == e ? "" : e.toUpperCase().replace(o, a).replace(l, s)
}

function u(e) {
  return i.nc_.hasOwnProperty(e)
}

function d(e, t) {
  let [, , n, a] = e.split("/"), o = c(n), s = c(a), l = u(o), d = "" === s || u(s);
  return l && d ? {
    params: (0, r.parse)(null != t ? t : location.search),
    section: i.nc_[o],
    subsection: s
  } : null
}