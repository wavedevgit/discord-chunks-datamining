/** Chunk was on 44799 **/
/** chunk id: 992046, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk973772 = require("./973772.js"),
  Chunk535396 = require("./535396.js"),
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  var t, n, a;
  let s, {
      guildId: c,
      powerups: u
    } = e,
    d = (0, r.Gv)(c, u),
    f = d.some(e => e.type !== i.A3.INACTIVE);
  if (u.length <= 0) return null;
  let p = d.reduce((e, t) => {
    let {
      sourceEntitlement: n
    } = t, r = null == n ? true : n.ends_at;
    return null == r ? e : null == e || r < e ? r : e
  }, true);
  null != p ? s = {
    type: "expiring",
    expiringAt: p
  } : f && (s = {
    type: "active",
    statusText: o.intl.string(l.default.FFLkmx)
  });
  let m = d.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === i.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    g = d.reduce((e, t) => {
      var n, r;
      let {
        powerup: i
      } = t;
      return e < (null != (n = null == i ? true : i.cost) ? n : 0) ? e : null != (r = null == i ? true : i.cost) ? r : 0
    }, null != (a = null == (n = d[0]) || null == (t = n.powerup) ? true : t.cost) ? a : 0),
    v = d.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    x = f ? m : g;
  return {
    isActive: f,
    status: s,
    cost: x,
    costDecorator: !f && v > x ? "+" : true,
    expiringAt: p,
    activeCost: m,
    minCost: g,
    totalCost: v
  }
}