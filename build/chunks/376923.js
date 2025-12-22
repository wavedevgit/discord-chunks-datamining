/** Chunk was on 15718 **/
/** chunk id: 376923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LD: () => g,
  LJ: () => N,
  mV: () => m,
  mh: () => f,
  qc: () => I,
  wi: () => h
}), require("./997841.js"), require("./388685.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk399606 = require("./399606.js"),
  Chunk983736 = require("./983736.js"),
  Chunk706454 = require("./706454.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js");
require("./893966.js"), require("./527379.js");
var Chunk372897 = require("./372897.js");
let A = {
    month: "short",
    day: "numeric",
    year: "numeric"
  },
  T = {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  };
var I = ((r = {})[r.NO_GATE = 0] = "NO_GATE", r[r.NO_AGREEMENT = 1] = "NO_AGREEMENT", r[r.AGREED = 2] = "AGREED", r);

function m(e, t) {
  var n, r;
  let l = (0, a.e7)([E.default], () => E.default.getUser(e), [e]),
    o = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]),
    d = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]);
  return (0, s.Dc)(d) ? null == l || null == o || null == d ? 1 : (0, i.yE)(null != (n = o.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) || (0, i.yE)(null != (r = o.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) || null != o.isPending && !o.isPending ? 2 : 1 : 0
}

function f(e, t) {
  var n;
  let r = (0, a.e7)([E.default], () => E.default.getUser(e), [e]),
    l = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]);
  if (null == r || null == l) returnfalse;
  let s = (0, i.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
    o = (null == r ? true : r.isPhoneVerified()) || (null == r ? true : r.isStaff()),
    c = (null == l ? true : l.joinedAt) != null;
  return r.verified || o || c || s
}

function g(e) {
  let t = (0, a.e7)([o.default], () => o.default.locale);
  return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t])
}

function N(e) {
  let t = (0, a.e7)([o.default], () => o.default.locale);
  return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, T), [e, t])
}

function h(e, t) {
  let n = (0, a.e7)([o.default], () => o.default.locale),
    r = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, e), [t, e]),
    i = null == r ? true : r.joinedAt;
  return l.useMemo(() => null == i ? "" : new Date(i).toLocaleDateString(n, A), [i, n])
}