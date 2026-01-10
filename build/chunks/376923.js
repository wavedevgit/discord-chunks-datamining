/** Chunk was on 69937 **/
/** chunk id: 376923, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LD: () => m,
  LJ: () => h,
  mV: () => g,
  mh: () => I,
  qc: () => T,
  wi: () => N
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
  f = {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  };
var T = ((r = {})[r.NO_GATE = 0] = "NO_GATE", r[r.NO_AGREEMENT = 1] = "NO_AGREEMENT", r[r.AGREED = 2] = "AGREED", r);

function g(e, t) {
  var n, r;
  let l = (0, a.e7)([d.default], () => d.default.getUser(e), [e]),
    o = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
    E = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]);
  return (0, s.Dc)(E) ? null == l || null == o || null == E ? 1 : (0, i.yE)(null != (n = o.flags) ? n : 0, _.q.BYPASSES_VERIFICATION) || (0, i.yE)(null != (r = o.flags) ? r : 0, _.q.COMPLETED_ONBOARDING) || null != o.isPending && !o.isPending ? 2 : 1 : 0
}

function I(e, t) {
  var n;
  let r = (0, a.e7)([d.default], () => d.default.getUser(e), [e]),
    l = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]);
  if (null == r || null == l) returnfalse;
  let s = (0, i.yE)(null != (n = l.flags) ? n : 0, _.q.BYPASSES_VERIFICATION),
    o = (null == r ? true : r.isPhoneVerified()) || (null == r ? true : r.isStaff()),
    u = (null == l ? true : l.joinedAt) != null;
  return r.verified || o || u || s
}

function m(e) {
  let t = (0, a.e7)([o.default], () => o.default.locale);
  return l.useMemo(() => new Date(E.default.extractTimestamp(e)).toLocaleDateString(t, A), [e, t])
}

function h(e) {
  let t = (0, a.e7)([o.default], () => o.default.locale);
  return l.useMemo(() => new Date(E.default.extractTimestamp(e)).toLocaleDateString(t, f), [e, t])
}

function N(e, t) {
  let n = (0, a.e7)([o.default], () => o.default.locale),
    r = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
    i = null == r ? true : r.joinedAt;
  return l.useMemo(() => null == i ? "" : new Date(i).toLocaleDateString(n, A), [i, n])
}