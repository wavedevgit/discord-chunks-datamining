/** Chunk was on 20501 **/
/** chunk id: 923834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./35282.js"), require("./415506.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = null;
class o extends(i = Chunk442837.ZP.Store) {
  getCurrentPath() {
    return null != l ? l.pathname : null
  }
  getCurrentRoute() {
    var e = l;
    let t = null != module && null != module.search ? module.search : "";
    return null != module ? "".concat(module.pathname).concat(exports) : null
  }
  reset() {
    throw Error("Should not reset the store this way outside of a test environment")
  }
}
a(o, "displayName", "ApplicationStoreLocationStore");
let c = new o(Chunk570140.Z, {
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    l = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          a(e, t, n[t])
        })
      }
      return e
    }({}, t)
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    l = null
  }
})