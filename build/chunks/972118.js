/** Chunk was on 75708 **/
/** chunk id: 972118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk675478 = require("./675478.js"),
  Chunk914010 = require("./914010.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915486 = require("./915486.js"),
  Chunk883904 = require("./883904.js"),
  Chunk428967 = require("./428967.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk644916 = require("./644916.js");

function m(e, t) {
  (0, l.pR)(t ? null : e)
}

function p(e, t) {
  if ((0, o.lg)(e)) {
    let t = (0, u.t)(e),
      {
        isDismissed: n
      } = (0, d.H4)(e);
    return {
      isDismissed: n,
      handleToggleDismissState: function() {
        m(e, n), n ? (0, i.Z1)(e) : (0, d.Bn)(e, t)
      }
    }
  }
  if ((0, o.I0)(e)) {
    let {
      isDismissed: t
    } = (0, c.Ob)(e, s.default.fromTimestamp(Date.now()));
    return {
      isDismissed: t,
      handleToggleDismissState: function() {
        m(e, t), t ? (0, i.Z1)(e) : (0, d.po)(e, s.default.fromTimestamp(Date.now() + d.wx))
      }
    }
  }
  if ((0, o.OQ)(e)) {
    let {
      isDismissed: t
    } = (0, d.Fo)(e);
    return {
      isDismissed: t,
      handleToggleDismissState: function() {
        m(e, t), t ? (0, i.Z1)(e) : (0, d.z2)(e)
      }
    }
  }
  if ((0, o.Vc)(e)) {
    let t = r.Z.getGuildId();
    if (null == t) return {
      isDismissed: false,
      handleToggleDismissState: () => {}
    };
    let n = (0, d.XY)(e, t);
    return {
      isDismissed: n,
      handleToggleDismissState: function() {
        null != t && (m(e, n), n ? (0, d.ZF)(e, t) : (0, d.XM)(e, t))
      }
    }
  }
  if ((0, o.ms)(e)) {
    let t = r.Z.getGuildId();
    if (null == t) return {
      isDismissed: false,
      handleToggleDismissState: () => {}
    };
    let n = (0, d.oK)(e, t);
    return {
      isDismissed: n,
      handleToggleDismissState: function() {
        null != t && (m(e, n), n ? (0, d.J0)(e, t) : (0, d.Ei)(e, t))
      }
    }
  } else {
    let n = (0, a.jl)(t, e);
    return {
      isDismissed: n,
      handleToggleDismissState: function() {
        m(e, n), n ? (0, i.w9)(e) : (0, i.nm)(e)
      }
    }
  }
}