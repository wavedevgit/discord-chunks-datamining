/** Chunk was on web.js **/
/** chunk id: 759479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jg: () => h,
  ZZ: () => p,
  _D: () => f,
  lQ: () => m
}), require("./388685.js");
var Chunk812206 = require("./812206.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js");
let c = e => e.application_id === l.Ev || e.platform === s.M7m.XBOX,
  u = e => e.platform === s.M7m.PS4 || e.platform === s.M7m.PS5;

function d(e, t) {
  let n = (0, o.Gs)(t);
  if (null == n) returnfalse;
  let i = r.Z.getApplication(n);
  return null != i && e === i.name.toLowerCase()
}

function f(e, t) {
  return null != e && (c(e) || u(e) ? d(e.name.toLowerCase(), t) : null != t && t.id === a.Jk && e.application_id === a.$z || null != e.application_id && _(e.application_id, t))
}

function p(e, t) {
  for (let [n, r] of e)
    if (f(t, r) && !(0, i.zi)(r)) return r
}

function _(e, t) {
  let n = (0, o.MC)(t);
  return null != n && n.some(t => t === e)
}

function m(e, t) {
  let n;
  for (let [r, o] of e)
    if (_(t, o) && !(0, i.zi)(o)) {
      n = o;
      break
    } return n
}

function h(e, t) {
  if (null == t || null == e) return null;
  for (let n of t) {
    let t = p(e, n);
    if (null != t) return t
  }
  return null
}