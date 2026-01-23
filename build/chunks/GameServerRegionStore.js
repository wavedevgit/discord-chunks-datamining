/** Chunk was on 14691 **/
/** chunk id: 588591, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
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
let a = {},
  d = [];

function o() {
  a = {}
}
class c extends(r = Chunk311907.Ay.Store) {
  getRegionStateForPingUrl(e) {
    if (null != e) return a[e]
  }
  getRegionState() {
    return a
  }
  getRegions() {
    return d
  }
}
s(c, "displayName", "GameServerRegionStore");
let u = new c(Chunk73153.h, {
  LOGOUT: o,
  GAME_SERVER_REGION_PING_STATE_UPDATE: function(e) {
    var t, n;
    let {
      pingUrl: r,
      state: l
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
  GAME_SERVER_REGION_PING_STATE_RESET: o,
  GAME_SERVER_FETCH_REGIONS_SUCCESS: function(e) {
    let {
      regions: t
    } = e;
    d = t
  }
})