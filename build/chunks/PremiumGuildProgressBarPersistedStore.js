/** Chunk was on 78528 **/
/** chunk id: 552836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {};
class o extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (a = e)
  }
  getState() {
    return a
  }
  getCountForGuild(e) {
    return a[e]
  }
}
s(o, "displayName", "GuildBoostingProgressBarPersistedStore"), s(o, "persistKey", "PremiumGuildProgressBarPersistedStore");
let c = new o(Chunk73153.h, {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
    var t, n;
    let {
      guildId: r,
      premiumCount: l
    } = e;
    t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          s(e, t, n[t])
        })
      }
      return e
    }({}, a), n = n = {
      [r]: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), a = t
  },
  APPLIED_GUILD_BOOST_COUNT_RESET: function() {
    a = {}
  }
})