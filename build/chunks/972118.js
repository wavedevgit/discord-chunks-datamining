/** Chunk was on web.js **/
/** chunk id: 972118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk675478 = require("./675478.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk883904 = require("./883904.js"),
  Chunk428967 = require("./428967.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk644916 = require("./644916.js");

function _(e, t) {
  (0, c.pR)(t ? null : e)
}

function m(e, t) {
  let n = (0, p.t)(e),
    r = (0, f.mA)(e, {});
  return (_(e, t), t) ? ((0, a.Z1)(e), false) : ((0, f.Bn)(e, n, r), true)
}

function h(e, t) {
  let n = (0, f.mA)(e, {});
  return (_(e, t), t) ? ((0, a.Z1)(e), false) : ((0, f.po)(e, l.default.fromTimestamp(Date.now() + f.wx), n), true)
}

function g(e, t) {
  return (_(e, t), t) ? ((0, a.Z1)(e), false) : ((0, f.z2)(e, (0, f.mA)(e, {})), true)
}

function E(e, t) {
  return (_(e, t), t) ? ((0, a.w9)(e), false) : ((0, a.nm)(e), true)
}

function b(e, t, n) {
  if (null == t) returnfalse;
  let r = null != t ? (0, f.qN)(e, t) : 1;
  return (_(e, n), n) ? ((0, f.ZF)(e, t, r - 1), false) : ((0, f.XM)(e, t, r), true)
}

function y(e, t, n) {
  if (null == t) returnfalse;
  let r = null != t ? (0, f.qN)(e, t) : 1;
  return (_(e, n), n) ? ((0, f.J0)(e, t, r - 1), false) : ((0, f.Ei)(e, t, r), true)
}

function O(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.getGuildId()),
    n = (0, d.Nj)(e, {
      cooldownDurationMs: s.Z.Millis.WEEK,
      guildId: t
    }),
    a = (0, r.useCallback)(() => {
      if ((0, u.lg)(e)) return m(e, n);
      if ((0, u.I0)(e)) return h(e, n);
      if ((0, u.OQ)(e)) return g(e, n);
      if ((0, u.Vc)(e)) return b(e, t, n);
      if ((0, u.ms)(e)) return y(e, t, n);
      else return E(e, n)
    }, [e, t, n]);
  return {
    isDismissed: n,
    handleToggleDismissState: a
  }
}