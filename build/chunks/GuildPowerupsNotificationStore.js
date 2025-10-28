/** Chunk was on 36925 **/
/** chunk id: 608949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430824 = require("./430824.js"),
  Chunk905128 = require("./905128.js"),
  Chunk19394 = require("./19394.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = {};
class d extends(r = Chunk442837.ZP.PersistedStore) {
  getState() {
    return u
  }
  initialize(e) {
    this.waitFor(a.Z, o.Z), null != e && (u = e)
  }
  getNotificationStateForGuild(e) {
    return u[e]
  }
}
c(d, "displayName", "GuildPowerupsNotificationStore"), c(d, "persistKey", "GuildPowerupsNotificationStore"), c(d, "migrations", [e => (Object.entries(e).forEach(t => {
  let [n, r] = t;
  e[n] = r
}), e)]);
let p = new d(Chunk570140.Z, {
  GUILD_POWERUPS_ACK_NOTIFICATION: function(e) {
    var t, n, r, i, l, d;
    let {
      guildId: p
    } = e, f = null != (n = null == (t = o.Z.getGuild(p)) ? true : t.premiumSubscriberCount) ? n : 0, h = a.Z.getStateForGuild(p), g = (0, s.h)(Object.values(null != (r = null == h ? true : h.unlockedPowerups) ? r : {}));
    l = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          c(e, t, n[t])
        })
      }
      return e
    }({}, u), d = d = {
      [p]: {
        lastSeenWarningNotification: null != (i = g[g.length - 1]) ? i : Date.now(),
        lastBoostCount: f
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(d)).forEach(function(e) {
      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(d, e))
    }), u = l
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function() {
    u = {}
  }
})