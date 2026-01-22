/** Chunk was on web.js **/
/** chunk id: 639214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BM: () => g,
  L7: () => m,
  jm: () => E,
  nq: () => _,
  zS: () => p
}), require("./896048.js");
var Chunk587895 = require("./587895.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js");
let u = e => e.application_id === c.$W || e.platform === l.yTV.XBOX,
  d = e => e.platform === l.yTV.PS4 || e.platform === l.yTV.PS5;

function f(e, t) {
  let n = (0, a.F9)(t);
  if (null == n) returnfalse;
  let i = r.A.getApplication(n);
  return null != i && e === i.name.toLowerCase()
}

function p(e, t) {
  return null != e && (u(e) || d(e) ? f(e.name.toLowerCase(), t) : null != t && t.id === o.gB && e.application_id === o.hK || null != e.application_id && h(e.application_id, t))
}

function _(e, t) {
  for (let [n, r] of e)
    if (p(t, r) && !(0, i.Ic)(r)) return r
}

function h(e, t) {
  let n = (0, a._3)(t);
  return null != n && n.some(t => t === e)
}

function m(e, t) {
  let n;
  for (let [r, a] of e)
    if (h(t, a) && !(0, i.Ic)(a)) {
      n = a;
      break
    } return n
}

function g(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    let t = _(e, n);
    if (null != t) return t
  }
  return null
}

function E(e, t) {
  return null == t ? [] : Array.from(e.values()).filter(e => {
    var n, r;
    let l = (0, a.vS)(e);
    return null != e && (0, s.vA)(e) && !(0, i.Ic)(e) && l === t && l !== o.ej && (null == (n = e.userStatus) ? true : n.completedAt) == null && (null == (r = e.userStatus) ? true : r.enrolledAt) == null
  })
}