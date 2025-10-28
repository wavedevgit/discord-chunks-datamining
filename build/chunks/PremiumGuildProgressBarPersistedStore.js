/** Chunk was on 36925 **/
/** chunk id: 531572, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {};
class s extends(r = Chunk442837.ZP.PersistedStore) {
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
o(s, "displayName", "GuildBoostingProgressBarPersistedStore"), o(s, "persistKey", "PremiumGuildProgressBarPersistedStore");
let c = new s(Chunk570140.Z, {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
    var t, n;
    let {
      guildId: r,
      premiumCount: i
    } = e;
    t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          o(e, t, n[t])
        })
      }
      return e
    }({}, a), n = n = {
      [r]: i
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