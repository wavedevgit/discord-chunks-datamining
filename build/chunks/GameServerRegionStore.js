/** Chunk was on 3298 **/
/** chunk id: 802659, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
let o = {},
  s = [];

function d() {
  o = {}
}
class c extends(r = Chunk442837.ZP.Store) {
  getRegionStateForPingUrl(e) {
    if (null != e) return o[e]
  }
  getRegionState() {
    return o
  }
  getRegions() {
    return s
  }
}
l(c, "displayName", "GameServerRegionStore");
let u = new c(Chunk570140.Z, {
  LOGOUT: d,
  GAME_SERVER_REGION_PING_STATE_UPDATE: function(e) {
    var n, t;
    let {
      pingUrl: r,
      state: i
    } = e;
    n = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
          l(e, n, t[n])
        })
      }
      return e
    }({}, o), t = t = {
      [r]: i
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t.push.apply(t, r)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), o = n
  },
  GAME_SERVER_REGION_PING_STATE_RESET: d,
  GAME_SERVER_FETCH_REGIONS_SUCCESS: function(e) {
    let {
      regions: n
    } = e;
    s = n
  }
})