/** Chunk was on 87995 **/
n.d(t, {
  Z: () => u
});
var r, l = n(442837),
  o = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let i = s();

function s() {
  return {
    ignoreTimestamps: {}
  }
}
class c extends(r = l.ZP.PersistedStore) {
  initialize(e) {
    var t, n, r;
    let l = null != (t = null == e ? void 0 : e.ignoreTimestamps) ? t : {};
    n = function(e) {
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
    }({}, s()), r = r = {
      ignoreTimestamps: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), i = n
  }
  getState() {
    return i
  }
  getIgnoreTimestamps() {
    return i.ignoreTimestamps
  }
}
a(c, "displayName", "IgnoreNoticeStore"), a(c, "persistKey", "IgnoreNoticeStore");
let u = new c(o.Z, {
  RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
    let {
      userId: t,
      timestamp: n
    } = e;
    i.ignoreTimestamps[t] = n
  }
})