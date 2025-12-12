/** Chunk was on web.js **/
/** chunk id: 722589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => d
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk593473 = require("./593473.js"),
  Chunk981631 = require("./981631.js");
let o = "_",
  a = /(-|%20)/g,
  s = "AND",
  l = /%26/g;

function c(e) {
  return null == e ? "" : e.toUpperCase().replace(a, o).replace(l, s)
}

function u(e) {
  return i.oAB.hasOwnProperty(e)
}

function d(e, t) {
  let [, , n, o] = e.split("/"), a = c(n), s = c(o), l = u(a), d = "" === s || u(s);
  return l && d ? {
    params: (0, r.parse)(null != t ? t : location.search),
    section: i.oAB[a],
    subsection: s
  } : null
}