/** Chunk was on 12097 **/
/** chunk id: 376923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LD: () => f,
  LJ: () => N,
  mV: () => I,
  mh: () => g,
  qc: () => m,
  wi: () => h
}), require("./997841.js"), require("./388685.js");
var r, Chunk73800 = require("./73800.js"),
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
  T = {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  };
var m = ((r = {})[r.NO_GATE = 0] = "NO_GATE", r[r.NO_AGREEMENT = 1] = "NO_AGREEMENT", r[r.AGREED = 2] = "AGREED", r);

function I(e, t) {
  var n, r;
  let l = (0, s.e7)([c.default], () => c.default.getUser(e), [e]),
    a = (0, s.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
    d = (0, s.e7)([u.Z], () => u.Z.getGuild(t), [t]);
  return (0, i.Dc)(d) ? null == l || null == a || null == d ? 1 : (0, E.yE)(null != (n = a.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) || (0, E.yE)(null != (r = a.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) || null != a.isPending && !a.isPending ? 2 : 1 : 0
}

function g(e, t) {
  var n;
  let r = (0, s.e7)([c.default], () => c.default.getUser(e), [e]),
    l = (0, s.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]);
  if (null == r || null == l) returnfalse;
  let i = (0, E.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
    a = (null == r ? true : r.isPhoneVerified()) || (null == r ? true : r.isStaff()),
    u = (null == l ? true : l.joinedAt) != null;
  return r.verified || a || u || i
}

function f(e) {
  let t = (0, s.e7)([a.default], () => a.default.locale);
  return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t])
}

function N(e) {
  let t = (0, s.e7)([a.default], () => a.default.locale);
  return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, T), [e, t])
}

function h(e, t) {
  let n = (0, s.e7)([a.default], () => a.default.locale),
    r = (0, s.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
    i = null == r ? true : r.joinedAt;
  return l.useMemo(() => null == i ? "" : new Date(i).toLocaleDateString(n, A), [i, n])
}