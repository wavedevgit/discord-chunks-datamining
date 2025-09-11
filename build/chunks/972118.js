/** Chunk was on web.js **/
/** chunk id: 972118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk442837 = require("./442837.js"),
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
  (0, l.pR)(t ? null : e)
}

function p(e, t) {
  let n = (0, f.t)(e),
    r = (0, d.mA)(e, {});
  return (_(e, t), t) ? ((0, i.Z1)(e), false) : ((0, d.Bn)(e, n, r), true)
}

function h(e, t) {
  let n = (0, d.mA)(e, {});
  return (_(e, t), t) ? ((0, i.Z1)(e), false) : ((0, d.po)(e, s.default.fromTimestamp(Date.now() + d.wx), n), true)
}

function m(e, t) {
  return (_(e, t), t) ? ((0, i.Z1)(e), false) : ((0, d.z2)(e, (0, d.mA)(e, {})), true)
}

function g(e, t) {
  return (_(e, t), t) ? ((0, i.w9)(e), false) : ((0, i.nm)(e), true)
}

function E(e, t, n) {
  if (null == t) returnfalse;
  let r = null != t ? (0, d.qN)(e, t) : 1;
  return (_(e, n), n) ? ((0, d.ZF)(e, t, r - 1), false) : ((0, d.XM)(e, t, r), true)
}

function b(e, t, n) {
  if (null == t) returnfalse;
  let r = null != t ? (0, d.qN)(e, t) : 1;
  return (_(e, n), n) ? ((0, d.J0)(e, t, r - 1), false) : ((0, d.Ei)(e, t, r), true)
}

function y(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
    n = (0, u.Nj)(e, {
      cooldownDurationMs: o.Z.Millis.WEEK,
      guildId: t
    });
  if ((0, c.lg)(e)) return {
    isDismissed: n,
    handleToggleDismissState: () => p(e, n)
  };
  if ((0, c.I0)(e)) return {
    isDismissed: n,
    handleToggleDismissState: () => h(e, n)
  };
  if ((0, c.OQ)(e)) return {
    isDismissed: n,
    handleToggleDismissState: () => m(e, n)
  };
  if ((0, c.Vc)(e)) return {
    isDismissed: n,
    handleToggleDismissState: () => E(e, t, n)
  };
  if ((0, c.ms)(e)) return {
    isDismissed: n,
    handleToggleDismissState: () => b(e, t, n)
  };
  else return {
    isDismissed: n,
    handleToggleDismissState: () => g(e, n)
  }
}