/** Chunk was on 97492 **/
/** chunk id: 904560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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
class f extends(r = Chunk311907.Ay.PersistedStore) {
  getState() {
    return d
  }
  initialize(e) {
    this.waitFor(s.A, o.A, a.A), null != e && (d = e)
  }
  getNotificationStateForGuild(e) {
    return d[e]
  }
}
u(f, "displayName", "GuildPowerupsNotificationStore"), u(f, "persistKey", "GuildPowerupsNotificationStore"), u(f, "migrations", [e => (Object.entries(e).forEach(t => {
  let [n, r] = t;
  e[n] = r
}), e)]);
let p = new f(Chunk73153.h, {
  GUILD_POWERUPS_ACK_NOTIFICATION: function(e) {
    var t, n, r, l, i, f, p, h;
    let {
      guildId: b
    } = e, g = null != (t = null == (i = a.A.getGuild(b)) ? true : i.premiumSubscriberCount) ? t : 0, m = o.A.getStateForGuild(b), A = s.A.getStateForGuild(b), y = (0, c.k)([...Object.values(null != (n = null == m ? true : m.unlockedPowerups) ? n : {}), ...Object.values(null != (r = null == A ? true : A.entitlements) ? r : {})]);
    p = function(e) {
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
    }({}, d), h = h = {
      [b]: {
        lastSeenWarningNotification: new Date(null != (l = null == (f = y[y.length - 1]) ? true : f.ends_at) ? l : Date.now()).getTime(),
        lastBoostCount: g
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(h)).forEach(function(e) {
      Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(h, e))
    }), d = p
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function() {
    d = {}
  }
})