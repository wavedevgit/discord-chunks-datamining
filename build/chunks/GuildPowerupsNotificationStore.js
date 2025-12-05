/** Chunk was on 73895 **/
/** chunk id: 608949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js"),
  Chunk60482 = require("./60482.js"),
  Chunk905128 = require("./905128.js"),
  Chunk19394 = require("./19394.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {};
class h extends(r = Chunk442837.ZP.PersistedStore) {
  getState() {
    return d
  }
  initialize(e) {
    this.waitFor(a.Z, s.Z, o.Z), null != e && (d = e)
  }
  getNotificationStateForGuild(e) {
    return d[e]
  }
}
u(h, "displayName", "GuildPowerupsNotificationStore"), u(h, "persistKey", "GuildPowerupsNotificationStore"), u(h, "migrations", [e => (Object.entries(e).forEach(t => {
  let [n, r] = t;
  e[n] = r
}), e)]);
let f = new h(Chunk570140.Z, {
  GUILD_POWERUPS_ACK_NOTIFICATION: function(e) {
    var t, n, r, i, l, h, f, p;
    let {
      guildId: g
    } = e, m = null != (r = null == (t = o.Z.getGuild(g)) ? true : t.premiumSubscriberCount) ? r : 0, b = s.Z.getStateForGuild(g), _ = a.Z.getStateForGuild(g), y = (0, c.h)([...Object.values(null != (i = null == b ? true : b.unlockedPowerups) ? i : {}), ...Object.values(null != (l = null == _ ? true : _.entitlements) ? l : {})]);
    f = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          u(e, t, n[t])
        })
      }
      return e
    }({}, d), p = p = {
      [g]: {
        lastSeenWarningNotification: new Date(null != (h = null == (n = y[y.length - 1]) ? true : n.ends_at) ? h : Date.now()).getTime(),
        lastBoostCount: m
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(p)).forEach(function(e) {
      Object.defineProperty(f, e, Object.getOwnPropertyDescriptor(p, e))
    }), d = f
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function() {
    d = {}
  }
})