/** Chunk was on 39159 **/
/** chunk id: 166098, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var i, Chunk442837 = require("./442837.js"),
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

function c() {
  o = {}
}
class d extends(i = Chunk442837.ZP.Store) {
  getLocationStateForPingUrl(e) {
    if (null != e) return o[e]
  }
  getRegions() {
    return s
  }
}
l(d, "displayName", "PortkeyLocationStore");
let u = new d(Chunk570140.Z, {
  LOGOUT: c,
  PORTKEY_LOCATION_PING_STATE_UPDATE: function(e) {
    var n, t;
    let {
      pingUrl: i,
      state: r
    } = e;
    n = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(n) {
          l(e, n, t[n])
        })
      }
      return e
    }({}, o), t = t = {
      [i]: r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t.push.apply(t, i)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), o = n
  },
  PORTKEY_LOCATION_PING_STATE_RESET: c,
  PORTKEY_FETCH_REGIONS_SUCCESS: function(e) {
    let {
      regions: n
    } = e;
    s = n
  }
})