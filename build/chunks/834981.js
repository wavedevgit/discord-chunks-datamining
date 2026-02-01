/** Chunk was on 12236 **/
/** chunk id: 834981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Du: () => g,
  GR: () => b,
  Li: () => _,
  VE: () => x,
  VT: () => v,
  W1: () => f,
  XC: () => A,
  v4: () => j,
  vx: () => p,
  xk: () => m,
  xr: () => h
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk695515 = require("./695515.js"),
  Chunk923531 = require("./923531.js"),
  Chunk438732 = require("./438732.js"),
  Chunk500470 = require("./500470.js"),
  Chunk191627 = require("./191627.js");

function u(e) {
  let t = (0, r.bG)([a.A], () => a.A.getLinkedUsers());
  return l.useMemo(() => Object.values(t).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => e.user_id).filter(e => null != e), [t, e])
}
let m = e => {
  let t = u(e);
  return (0, r.yK)([i.default], () => t.map(e => i.default.getUser(e))).filter(e => null != e)
};

function p() {
  return u(c.Ef.ACTIVE)
}

function b() {
  return m(c.Ef.ACTIVE)
}
let _ = () => p().length > 0;

function g() {
  let e = (0, r.bG)([a.A], () => a.A.getLinkedUsers());
  return l.useMemo(() => Object.values(e).some(e => null != e && e.link_status === c.Ef.ACTIVE && e.link_type === c.QM.PARENT), [e])
}

function x() {
  let e = (0, r.bG)([a.A], () => a.A.getLinkCode()),
    t = (0, r.bG)([i.default], () => i.default.getCurrentUser());
  return null == e || null == t ? null : (0, c.jZ)(t.id, e)
}

function h() {
  let e = (0, o.A)(),
    t = p(),
    n = e ? c.Y7 : c.kp;
  return t.length >= n
}

function v() {
  let e = (0, r.bG)([i.default], () => i.default.getCurrentUser()),
    t = (0, r.bG)([a.A], () => a.A.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === c.Ef.PENDING && e.id !== t.requestor_id).length
}

function f() {
  return p().length
}

function j(e) {
  let t = (0, d.k)(),
    n = (0, r.bG)([a.A], () => null == t ? null : a.A.getRangeStartTimestamp());
  return null == n ? null : (0, s.i6)(new Date(n).getTime(), () => e, 7)
}

function A(e, t) {
  let n = (0, r.bG)([a.A], () => a.A.getLinkTimestamp(e));
  return null != n ? (0, s.mV)(Date.parse(n), t === c.Ef.PENDING ? c.lu : c.dI) : null
}