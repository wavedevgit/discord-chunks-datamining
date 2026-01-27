/** Chunk was on 92917 **/
/** chunk id: 842524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = o();

function o() {
  return {
    ignoreTimestamps: {}
  }
}
class c extends(r = Chunk311907.Ay.PersistedStore) {
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
    }({}, o()), r = r = {
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
    }), s = n
  }
  getState() {
    return s
  }
  getIgnoreTimestamps() {
    return s.ignoreTimestamps
  }
}
a(c, "displayName", "IgnoreNoticeStore"), a(c, "persistKey", "IgnoreNoticeStore");
let u = new c(Chunk73153.h, {
  RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
    let {
      userId: t,
      timestamp: n
    } = e;
    s.ignoreTimestamps[t] = n
  }
})