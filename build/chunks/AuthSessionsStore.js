/** Chunk was on 44667 **/
/** chunk id: 620733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
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
let l = [];

function c() {
  l = []
}
class o extends(r = Chunk311907.Ay.Store) {
  getSessions() {
    return l
  }
}
a(o, "displayName", "AuthSessionsStore");
let d = new o(Chunk73153.h, {
  LOGOUT: c,
  LOGIN_SUCCESS: c,
  FETCH_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessions: t
    } = e;
    l = t.map(e => {
      var t, n;
      return t = function(e) {
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
      }({}, e), n = n = {
        approx_last_used_time: new Date(e.approx_last_used_time)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t
    })
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessionIdHashes: t
    } = e, n = [...l], r = false;
    for (let e of t) {
      let t = n.findIndex(t => t.id_hash === e);
      t >= 0 && (n.splice(t, 1), r = true)
    }
    if (!r) returnfalse;
    l = n
  }
})