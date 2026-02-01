/** Chunk was on 49438 **/
/** chunk id: 836731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GT: () => O,
  L4: () => N,
  Wi: () => I,
  bM: () => T,
  ff: () => m,
  t: () => h
}), require("./938796.js"), require("./896048.js");
var l, Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk417597 = require("./417597.js"),
  Chunk709977 = require("./709977.js"),
  Chunk773669 = require("./773669.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js");
require("./266047.js"), require("./221950.js");
var Chunk340837 = require("./340837.js");
let g = {
    month: "short",
    day: "numeric",
    year: "numeric"
  },
  A = {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  };
var T = ((l = {})[l.NO_GATE = 0] = "NO_GATE", l[l.NO_AGREEMENT = 1] = "NO_AGREEMENT", l[l.AGREED = 2] = "AGREED", l);

function I(e, t) {
  var n, l;
  let r = (0, i.bG)([E.default], () => E.default.getUser(e), [e]),
    o = (0, i.bG)([u.Ay], () => u.Ay.getMember(t, e), [t, e]),
    _ = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]);
  return (0, s.Qd)(_) ? null == r || null == o || null == _ ? 1 : (0, a.Lt)(null != (n = o.flags) ? n : 0, d.D.BYPASSES_VERIFICATION) || (0, a.Lt)(null != (l = o.flags) ? l : 0, d.D.COMPLETED_ONBOARDING) || null != o.isPending && !o.isPending ? 2 : 1 : 0
}

function O(e, t) {
  var n;
  let l = (0, i.bG)([E.default], () => E.default.getUser(e), [e]),
    r = (0, i.bG)([u.Ay], () => u.Ay.getMember(t, e), [t, e]);
  if (null == l || null == r) returnfalse;
  let s = (0, a.Lt)(null != (n = r.flags) ? n : 0, d.D.BYPASSES_VERIFICATION),
    o = (null == l ? true : l.isPhoneVerified()) || (null == l ? true : l.isStaff()),
    c = (null == r ? true : r.joinedAt) != null;
  return l.verified || o || c || s
}

function h(e) {
  let t = (0, i.bG)([o.default], () => o.default.locale);
  return r.useMemo(() => new Date(_.default.extractTimestamp(e)).toLocaleDateString(t, g), [e, t])
}

function N(e) {
  let t = (0, i.bG)([o.default], () => o.default.locale);
  return r.useMemo(() => new Date(_.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t])
}

function m(e, t) {
  let n = (0, i.bG)([o.default], () => o.default.locale),
    l = (0, i.bG)([u.Ay], () => u.Ay.getMember(t, e), [t, e]),
    a = null == l ? true : l.joinedAt;
  return r.useMemo(() => null == a ? "" : new Date(a).toLocaleDateString(n, g), [a, n])
}