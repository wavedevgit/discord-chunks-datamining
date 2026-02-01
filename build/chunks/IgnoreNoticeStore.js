/** Chunk was on 15627 **/
/** chunk id: 842524, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var n, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function c(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let a = l();

function l() {
  return {
    ignoreTimestamps: {}
  }
}
class s extends(n = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t, r, n;
    let o = null != (t = null == e ? true : e.ignoreTimestamps) ? t : {};
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
let _ = new s(Chunk73153.h, {
  RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
    let {
      userId: t,
      timestamp: r
    } = e;
    a.ignoreTimestamps[t] = r
  }
})