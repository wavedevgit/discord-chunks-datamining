/** Chunk was on 87665 **/
/** chunk id: 972118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk647438 = require("./647438.js"),
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

function h(e, t) {
  (0, c.pR)(t ? null : e)
}

function x(e) {
  let t = (0, r.e7)([i.Z], () => i.Z.getGuildId()),
    n = (0, u.Nj)(e, {
      cooldownDurationMs: o.Z.Millis.WEEK,
      guildId: t
    }),
    c = (0, a.useCallback)(() => {
      if ((0, d.lg)(e)) {
        let t = (0, p.t)(e),
          a = (0, m.mA)(e, {});
        return (h(e, n), n) ? ((0, l.Z1)(e), false) : ((0, m.Bn)(e, t, a), true)
      }
      if ((0, d.I0)(e)) {
        let t = (0, m.mA)(e, {});
        return (h(e, n), n) ? ((0, l.Z1)(e), false) : ((0, m.po)(e, s.default.fromTimestamp(Date.now() + m.wx), t), true)
      }
      if ((0, d.OQ)(e)) return (h(e, n), n) ? ((0, l.Z1)(e), false) : ((0, m.z2)(e, (0, m.mA)(e, {})), true);
      if ((0, d.Vc)(e)) {
        if (null == t) returnfalse;
        let a = null != t ? (0, m.qN)(e, t) : 1;
        return (h(e, n), n) ? ((0, m.ZF)(e, t, a - 1), false) : ((0, m.XM)(e, t, a), true)
      }
      if (!(0, d.ms)(e)) return (h(e, n), n) ? ((0, l.w9)(e), false) : ((0, l.nm)(e), true);
      else {
        if (null == t) returnfalse;
        let a = null != t ? (0, m.qN)(e, t) : 1;
        return (h(e, n), n) ? ((0, m.J0)(e, t, a - 1), false) : ((0, m.Ei)(e, t, a), true)
      }
    }, [e, t, n]);
  return {
    isDismissed: n,
    handleToggleDismissState: c
  }
}