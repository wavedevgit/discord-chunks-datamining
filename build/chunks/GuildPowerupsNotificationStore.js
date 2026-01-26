/** Chunk was on 67564 **/
/** chunk id: 904560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk71393 = require("./71393.js"),
  Chunk522055 = require("./522055.js"),
  Chunk645619 = require("./645619.js"),
  Chunk904629 = require("./904629.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {};
class p extends(r = Chunk311907.Ay.PersistedStore) {
  getState() {
    return d
  }
  initialize(e) {
    this.waitFor(a.A, o.A, s.A), null != e && (d = e)
  }
  getNotificationStateForGuild(e) {
    return d[e]
  }
}
u(p, "displayName", "GuildPowerupsNotificationStore"), u(p, "persistKey", "GuildPowerupsNotificationStore"), u(p, "migrations", [e => (Object.entries(e).forEach(t => {
  let [n, r] = t;
  e[n] = r
}), e)]);
let h = new p(Chunk73153.h, {
  GUILD_POWERUPS_ACK_NOTIFICATION: function(e) {
    var t, n, r, l, i, p, h, f;
    let {
      guildId: g
    } = e, m = null != (t = null == (i = s.A.getGuild(g)) ? true : i.premiumSubscriberCount) ? t : 0, b = o.A.getStateForGuild(g), A = a.A.getStateForGuild(g), y = (0, c.k)([...Object.values(null != (n = null == b ? true : b.unlockedPowerups) ? n : {}), ...Object.values(null != (r = null == A ? true : A.entitlements) ? r : {})]);
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
    }({}, d), f = f = {
      [g]: {
        lastSeenWarningNotification: new Date(null != (l = null == (p = y[y.length - 1]) ? true : p.ends_at) ? l : Date.now()).getTime(),
        lastBoostCount: m
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(f)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(f)).forEach(function(e) {
      Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(f, e))
    }), d = h
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function() {
    d = {}
  }
})