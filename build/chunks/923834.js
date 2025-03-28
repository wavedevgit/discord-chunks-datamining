/** Chunk was on 20447 **/
n.d(t, {
  Z: () => c
}), n(301563), n(411104);
var r, i = n(442837),
  s = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = null;
class l extends(r = i.ZP.Store) {
  getCurrentPath() {
    return null != o ? o.pathname : null
  }
  getCurrentRoute() {
    return function(e) {
      let t = null != e && null != e.search ? e.search : "";
      return null != e ? "".concat(e.pathname).concat(t) : null
    }(o)
  }
  reset() {
    throw Error("Should not reset the store this way outside of a test environment")
  }
}
a(l, "displayName", "ApplicationStoreLocationStore");
let c = new l(s.Z, {
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    o = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          a(e, t, n[t])
        })
      }
      return e
    }({}, t)
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    o = null
  }
})