/** Chunk was on 76282 **/
n.d(t, {
  Z: () => u
});
var r, i = n(442837),
  o = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function a() {
  return {
    lastTriggered: 0
  }
}
let s = a();
class c extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    s = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          l(e, t, n[t])
        })
      }
      return e
    }({}, a(), null != e ? e : {})
  }
  getState() {
    return s
  }
  cooldownIsActive() {
    return s.lastTriggered >= Date.now() - 1728e5
  }
}
l(c, "displayName", "HDStreamingViewerStore"), l(c, "persistKey", "HDStreamingViewerStore");
let u = new c(o.Z, {
  LOGOUT: function() {
    s = a()
  },
  HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function(e) {
    s.lastTriggered = Date.now()
  }
})