/** Chunk was on web.js **/
/** chunk id: 834981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GR: () => _,
  Li: () => h,
  VE: () => m,
  VT: () => E,
  W1: () => b,
  XC: () => O,
  v4: () => y,
  vx: () => p,
  xk: () => f,
  xr: () => g
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk695515 = require("./695515.js"),
  Chunk923531 = require("./923531.js"),
  Chunk500470 = require("./500470.js"),
  Chunk945276 = require("./945276.js"),
  Chunk191627 = require("./191627.js");

function d(e) {
  let t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
  return r.useMemo(() => Object.values(t).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => e.user_id).filter(e => null != e), [t, e])
}
let f = e => {
  let t = d(e);
  return (0, i.yK)([a.default], () => t.map(e => a.default.getUser(e))).filter(e => null != e)
};

function p() {
  return d(u.Ef.ACTIVE)
}

function _() {
  return f(u.Ef.ACTIVE)
}
let h = () => p().length > 0;

function m() {
  let e = (0, i.bG)([s.A], () => s.A.getLinkCode()),
    t = (0, i.bG)([a.default], () => a.default.getCurrentUser());
  return null == e || null == t ? null : (0, u.jZ)(t.id, e)
}

function g() {
  let e = (0, c.A)(),
    t = p(),
    n = e ? u.Y7 : u.kp;
  return t.length >= n
}

function E() {
  let e = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
    t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === u.Ef.PENDING && e.id !== t.requestor_id).length
}

function b() {
  return p().length
}

function y(e) {
  let t = (0, l.k)(),
    n = (0, i.bG)([s.A], () => null == t ? null : s.A.getRangeStartTimestamp());
  return null == n ? null : (0, o.i6)(new Date(n).getTime(), () => e, 7)
}

function O(e, t) {
  let n = (0, i.bG)([s.A], () => s.A.getLinkTimestamp(e));
  return null != n ? (0, o.mV)(Date.parse(n), t === u.Ef.PENDING ? u.lu : u.dI) : null
}