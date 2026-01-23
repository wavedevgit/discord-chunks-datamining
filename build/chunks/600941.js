/** Chunk was on 88615 **/
/** chunk id: 600941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk998418 = require("./998418.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  var t, n, s;
  let a, {
      guildId: u,
      powerups: d
    } = e,
    c = (0, r.jJ)(u, d),
    p = c.some(e => e.type !== l.b_.INACTIVE);
  if (d.length <= 0) return null;
  let m = c.reduce((e, t) => {
    let {
      sourceEntitlement: n
    } = t, r = null == n ? true : n.ends_at;
    return null == r ? e : null == e || r < e ? r : e
  }, true);
  null != m ? a = {
    type: "expiring",
    expiringAt: m
  } : p && (a = {
    type: "active",
    statusText: o.intl.string(i.default.FFLkmx)
  });
  let f = c.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === l.b_.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    v = c.reduce((e, t) => {
      var n, r;
      let {
        powerup: l
      } = t;
      return e < (null != (n = null == l ? true : l.cost) ? n : 0) ? e : null != (r = null == l ? true : l.cost) ? r : 0
    }, null != (t = null == (s = c[0]) || null == (n = s.powerup) ? true : n.cost) ? t : 0),
    g = c.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    A = p ? f : v;
  return {
    isActive: p,
    status: a,
    cost: A,
    costDecorator: !p && g > A ? "+" : true,
    expiringAt: m,
    activeCost: f,
    minCost: v,
    totalCost: g
  }
}