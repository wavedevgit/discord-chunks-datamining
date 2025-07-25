/** Chunk was on 46355 **/
r.d(t, {
  Z: () => u
});
var n, o = r(442837),
  i = r(570140);

function c(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let a = l();

function l() {
  return {
    ignoreTimestamps: {}
  }
}
class s extends(n = o.ZP.PersistedStore) {
  initialize(e) {
    var t, r, n;
    let o = null != (t = null == e ? void 0 : e.ignoreTimestamps) ? t : {};
    r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          c(e, t, r[t])
        })
      }
      return e
    }({}, l()), n = n = {
      ignoreTimestamps: o
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e))
    }), a = r
  }
  getState() {
    return a
  }
  getIgnoreTimestamps() {
    return a.ignoreTimestamps
  }
}
c(s, "displayName", "IgnoreNoticeStore"), c(s, "persistKey", "IgnoreNoticeStore");
let u = new s(i.Z, {
  RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
    let {
      userId: t,
      timestamp: r
    } = e;
    a.ignoreTimestamps[t] = r
  }
})