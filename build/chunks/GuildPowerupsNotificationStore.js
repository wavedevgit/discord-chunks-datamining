/** Chunk was on 67000 **/
/** chunk id: 608949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
class f extends(r = Chunk442837.ZP.PersistedStore) {
  getState() {
    return d
  }
  initialize(e) {
    this.waitFor(o.Z, s.Z, a.Z), null != e && (d = e)
  }
  getNotificationStateForGuild(e) {
    return d[e]
  }
}
u(f, "displayName", "GuildPowerupsNotificationStore"), u(f, "persistKey", "GuildPowerupsNotificationStore"), u(f, "migrations", [e => (Object.entries(e).forEach(t => {
  let [n, r] = t;
  e[n] = r
}), e)]);
let h = new f(Chunk570140.Z, {
  GUILD_POWERUPS_ACK_NOTIFICATION: function(e) {
    var t, n, r, i, l, f, h, p;
    let {
      guildId: g
    } = e, b = null != (r = null == (t = a.Z.getGuild(g)) ? true : t.premiumSubscriberCount) ? r : 0, m = s.Z.getStateForGuild(g), y = o.Z.getStateForGuild(g), O = (0, c.h)([...Object.values(null != (i = null == m ? true : m.unlockedPowerups) ? i : {}), ...Object.values(null != (l = null == y ? true : y.entitlements) ? l : {})]);
    h = function(e) {
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
        lastSeenWarningNotification: new Date(null != (f = null == (n = O[O.length - 1]) ? true : n.ends_at) ? f : Date.now()).getTime(),
        lastBoostCount: b
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(p)).forEach(function(e) {
      Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(p, e))
    }), d = h
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function() {
    d = {}
  }
})