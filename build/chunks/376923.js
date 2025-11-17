/** Chunk was on 66201 **/
/** chunk id: 376923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LD: () => N,
  LJ: () => h,
  mV: () => m,
  mh: () => g,
  qc: () => I,
  wi: () => O
}), require("./997841.js"), require("./388685.js");
var r, Chunk473749 = require("./473749.js"),
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
var I = ((r = {})[r.NO_GATE = 0] = "NO_GATE", r[r.NO_AGREEMENT = 1] = "NO_AGREEMENT", r[r.AGREED = 2] = "AGREED", r);

function m(e, t) {
  var n, r;
  let l = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
    a = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
    d = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]);
  return (0, s.Dc)(d) ? null == l || null == a || null == d ? 1 : (0, E.yE)(null != (n = a.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) || (0, E.yE)(null != (r = a.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) || null != a.isPending && !a.isPending ? 2 : 1 : 0
}

function g(e, t) {
  var n;
  let r = (0, i.e7)([c.default], () => c.default.getUser(e), [e]),
    l = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]);
  if (null == r || null == l) returnfalse;
  let s = (0, E.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
    a = (null == r ? true : r.isPhoneVerified()) || (null == r ? true : r.isStaff()),
    u = (null == l ? true : l.joinedAt) != null;
  return r.verified || a || u || s
}

function N(e) {
  let t = (0, i.e7)([a.default], () => a.default.locale);
  return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t])
}

function h(e) {
  let t = (0, i.e7)([a.default], () => a.default.locale);
  return l.useMemo(() => new Date(d.default.extractTimestamp(e)).toLocaleDateString(t, T), [e, t])
}

function O(e, t) {
  let n = (0, i.e7)([a.default], () => a.default.locale),
    r = (0, i.e7)([o.ZP], () => o.ZP.getMember(t, e), [t, e]),
    s = null == r ? true : r.joinedAt;
  return l.useMemo(() => null == s ? "" : new Date(s).toLocaleDateString(n, A), [s, n])
}