/** Chunk was on 7318 **/
/** chunk id: 376923, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  LD: () => B,
  LJ: () => w,
  mV: () => E,
  mh: () => C,
  qc: () => d,
  wi: () => D
}), require("./997841.js"), require("./388685.js");
var n, Chunk647438 = require("./647438.js"),
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
let h = {
    month: "short",
    day: "numeric",
    year: "numeric"
  },
  u = {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  };
var d = ((n = {})[n.NO_GATE = 0] = "NO_GATE", n[n.NO_AGREEMENT = 1] = "NO_AGREEMENT", n[n.AGREED = 2] = "AGREED", n);

function E(A, e) {
  var t, n;
  let r = (0, l.e7)([g.default], () => g.default.getUser(A), [A]),
    s = (0, l.e7)([a.ZP], () => a.ZP.getMember(e, A), [e, A]),
    f = (0, l.e7)([o.Z], () => o.Z.getGuild(e), [e]);
  return (0, i.Dc)(f) ? null == r || null == s || null == f ? 1 : (0, c.yE)(null != (t = s.flags) ? t : 0, v.q.BYPASSES_VERIFICATION) || (0, c.yE)(null != (n = s.flags) ? n : 0, v.q.COMPLETED_ONBOARDING) || null != s.isPending && !s.isPending ? 2 : 1 : 0
}

function C(A, e) {
  var t;
  let n = (0, l.e7)([g.default], () => g.default.getUser(A), [A]),
    r = (0, l.e7)([a.ZP], () => a.ZP.getMember(e, A), [e, A]);
  if (null == n || null == r) returnfalse;
  let i = (0, c.yE)(null != (t = r.flags) ? t : 0, v.q.BYPASSES_VERIFICATION),
    s = (null == n ? true : n.isPhoneVerified()) || (null == n ? true : n.isStaff()),
    o = (null == r ? true : r.joinedAt) != null;
  return n.verified || s || o || i
}

function B(A) {
  let e = (0, l.e7)([s.default], () => s.default.locale);
  return r.useMemo(() => new Date(f.default.extractTimestamp(A)).toLocaleDateString(e, h), [A, e])
}

function w(A) {
  let e = (0, l.e7)([s.default], () => s.default.locale);
  return r.useMemo(() => new Date(f.default.extractTimestamp(A)).toLocaleDateString(e, u), [A, e])
}

function D(A, e) {
  let t = (0, l.e7)([s.default], () => s.default.locale),
    n = (0, l.e7)([a.ZP], () => a.ZP.getMember(e, A), [e, A]),
    i = null == n ? true : n.joinedAt;
  return r.useMemo(() => null == i ? "" : new Date(i).toLocaleDateString(t, h), [i, t])
}