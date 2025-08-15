/** Chunk was on 66866 **/
/** chunk id: 711758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = s();

function s() {
  return {
    ignoreTimestamps: {}
  }
}
class c extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t, n, r;
    let i = null != (t = null == e ? true : e.ignoreTimestamps) ? t : {};
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
      ignoreTimestamps: i
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), o = n
  }
  getState() {
    return o
  }
  getIgnoreTimestamps() {
    return o.ignoreTimestamps
  }
}
a(c, "displayName", "IgnoreNoticeStore"), a(c, "persistKey", "IgnoreNoticeStore");
let u = new c(Chunk570140.Z, {
  RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
    let {
      userId: t,
      timestamp: n
    } = e;
    o.ignoreTimestamps[t] = n
  }
})