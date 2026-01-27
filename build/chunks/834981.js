/** Chunk was on 60667 **/
/** chunk id: 834981, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Du: () => A,
  GR: () => m,
  Li: () => g,
  VE: () => f,
  VT: () => b,
  W1: () => E,
  XC: () => O,
  v4: () => x,
  vx: () => p,
  xk: () => _,
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
  let t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
  return r.useMemo(() => Object.values(t).filter(t => null != t && t.link_status === e).sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime()).map(e => e.user_id).filter(e => null != e), [t, e])
}
let _ = e => {
  let t = u(e);
  return (0, i.yK)([l.default], () => t.map(e => l.default.getUser(e))).filter(e => null != e)
};

function p() {
  return u(d.Ef.ACTIVE)
}

function m() {
  return _(d.Ef.ACTIVE)
}
let g = () => p().length > 0;

function A() {
  let e = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
  return r.useMemo(() => Object.values(e).some(e => null != e && e.link_status === d.Ef.ACTIVE && e.link_type === d.QM.PARENT), [e])
}

function f() {
  let e = (0, i.bG)([s.A], () => s.A.getLinkCode()),
    t = (0, i.bG)([l.default], () => l.default.getCurrentUser());
  return null == e || null == t ? null : (0, d.jZ)(t.id, e)
}

function h() {
  let e = (0, o.A)(),
    t = p(),
    n = e ? d.Y7 : d.kp;
  return t.length >= n
}

function b() {
  let e = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
    t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
  return null == e ? 0 : Object.values(t).filter(t => null != t && t.link_status === d.Ef.PENDING && e.id !== t.requestor_id).length
}

function E() {
  return p().length
}

function x(e) {
  let t = (0, c.k)(),
    n = (0, i.bG)([s.A], () => null == t ? null : s.A.getRangeStartTimestamp());
  return null == n ? null : (0, a.i6)(new Date(n).getTime(), () => e, 7)
}

function O(e, t) {
  let n = (0, i.bG)([s.A], () => s.A.getLinkTimestamp(e));
  return null != n ? (0, a.mV)(Date.parse(n), t === d.Ef.PENDING ? d.lu : d.dI) : null
}