/** Chunk was on web.js **/
/** chunk id: 878209, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cg: () => s,
  Ro: () => u,
  Tc: () => c
}), require("./35282.js"), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./583741.js");
var Chunk952639 = require("./952639.js"),
  i = require.n(Chunk952639);
let a = /^(\d{4}-\d{1,2})/;

function o(e) {
  let t = a.exec(e);
  return null != t ? t[1] : null
}

function s(e) {
  return Array.from(Object.entries(e)).map(e => {
    let [t, n] = e;
    return {
      id: t,
      experiment: n
    }
  })
}

function l(e, t) {
  if (Array.isArray(e)) {
    for (let n of e)
      if (l(n, t)) returntrue
  } else if ("object" == typeof e && null !== e) {
    for (let n of Object.values(e))
      if (l(n, t)) returntrue
  } else if ("string" == typeof e && e.toLowerCase().includes(t.toLowerCase())) returntrue;
  returnfalse
}

function c(e, t) {
  return e.slice().sort((e, n) => {
    if (null != t[null == e ? true : e.id] && null == t[null == n ? true : n.id]) return false;
    if (null == t[null == e ? true : e.id] && null != t[null == n ? true : n.id]) return 1;
    let r = o(e.id),
      i = o(n.id);
    if (null != r && null != i) {
      let e = i.localeCompare(r);
      if (0 !== e) return e
    }
    return e.experiment.title.localeCompare(n.experiment.title)
  })
}

function u(e, t) {
  let n = t.split(/\s+/g).filter(e => "" !== e);
  if (0 === n.length) return e;
  let r = [];
  for (let t of e) {
    let e = 0;
    for (let r of n) l(t, r) && (e += 1);
    0 !== e && (null == r[e] && (r[e] = []), r[e].push(t))
  }
  return i()(r.filter(e => true !== e).reverse())
}