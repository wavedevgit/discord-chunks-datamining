/** Chunk was on 74486 **/
/** chunk id: 376923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LD: () => f,
  LJ: () => h,
  mV: () => I,
  mh: () => g,
  qc: () => T,
  wi: () => N
}), require("./997841.js"), require("./388685.js");
var r, Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk983736 = require("./983736.js"),
  Chunk706454 = require("./706454.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js");
require("./893966.js"), require("./527379.js");
var Chunk372897 = require("./372897.js");
let A = {
    month: "short",
    day: "numeric",
    year: "numeric"
  },
  m = {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  };
var T = ((r = {})[r.NO_GATE = 0] = "NO_GATE", r[r.NO_AGREEMENT = 1] = "NO_AGREEMENT", r[r.AGREED = 2] = "AGREED", r);

function I(e, t) {
  var n, r;
  let l = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
    s = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
    E = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]);
  return (0, a.Dc)(E) ? null == l || null == s || null == E ? 1 : (0, d.yE)(null != (n = s.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) || (0, d.yE)(null != (r = s.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) || null != s.isPending && !s.isPending ? 2 : 1 : 0
}

function g(e, t) {
  var n;
  let r = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
    l = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]);
  if (null == r || null == l) returnfalse;
  let a = (0, d.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
    s = (null == r ? true : r.isPhoneVerified()) || (null == r ? true : r.isStaff()),
    u = (null == l ? true : l.joinedAt) != null;
  return r.verified || s || u || a
}

function f(e) {
  let t = (0, i.e7)([s.default], () => s.default.locale);
  return l.useMemo(() => new Date(E.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t])
}

function h(e) {
  let t = (0, i.e7)([s.default], () => s.default.locale);
  return l.useMemo(() => new Date(E.default.extractTimestamp(e)).toLocaleDateString(t, m), [e, t])
}

function N(e, t) {
  let n = (0, i.e7)([s.default], () => s.default.locale),
    r = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
    a = null == r ? true : r.joinedAt;
  return l.useMemo(() => null == a ? "" : new Date(a).toLocaleDateString(n, A), [a, n])
}