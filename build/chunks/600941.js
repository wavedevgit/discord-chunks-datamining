/** Chunk was on 88615 **/
/** chunk id: 600941, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk998418 = require("./998418.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  var t, l, o;
  let a, {
      guildId: u,
      powerups: d
    } = e,
    c = (0, r.jJ)(u, d),
    f = c.some(e => e.type !== n.b_.INACTIVE);
  if (d.length <= 0) return null;
  let p = c.reduce((e, t) => {
    let {
      sourceEntitlement: l
    } = t, r = null == l ? true : l.ends_at;
    return null == r ? e : null == e || r < e ? r : e
  }, true);
  null != p ? a = {
    type: "expiring",
    expiringAt: p
  } : f && (a = {
    type: "active",
    statusText: s.intl.string(i.default.FFLkmx)
  });
  let m = c.reduce((e, t) => {
      let {
        type: l,
        powerup: r
      } = t;
      return l === n.b_.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    v = c.reduce((e, t) => {
      var l, r;
      let {
        powerup: n
      } = t;
      return e < (null != (l = null == n ? true : n.cost) ? l : 0) ? e : null != (r = null == n ? true : n.cost) ? r : 0
    }, null != (t = null == (o = c[0]) || null == (l = o.powerup) ? true : l.cost) ? t : 0),
    A = c.reduce((e, t) => {
      var l;
      let {
        powerup: r
      } = t;
      return e + (null != (l = null == r ? true : r.cost) ? l : 0)
    }, 0),
    g = f ? m : v;
  return {
    isActive: f,
    status: a,
    cost: g,
    costDecorator: !f && A > g ? "+" : true,
    expiringAt: p,
    activeCost: m,
    minCost: v,
    totalCost: A
  }
}