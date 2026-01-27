/** Chunk was on 44667 **/
/** chunk id: 620733, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function a(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
let c = [];

function o() {
  c = []
}
class l extends(r = Chunk311907.Ay.Store) {
  getSessions() {
    return c
  }
}
a(l, "displayName", "AuthSessionsStore");
let u = new l(Chunk73153.h, {
  LOGOUT: o,
  LOGIN_SUCCESS: o,
  FETCH_AUTH_SESSIONS_SUCCESS: function(t) {
    let {
      sessions: e
    } = t;
    c = e.map(t => {
      var e, n;
      return e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            a(t, e, n[e])
          })
        }
        return t
      }({}, t), n = n = {
        approx_last_used_time: new Date(t.approx_last_used_time)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }), e
    })
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function(t) {
    let {
      sessionIdHashes: e
    } = t, n = [...c], r = false;
    for (let t of e) {
      let e = n.findIndex(e => e.id_hash === t);
      e >= 0 && (n.splice(e, 1), r = true)
    }
    if (!r) returnfalse;
    c = n
  }
})