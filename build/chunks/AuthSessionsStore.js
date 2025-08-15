/** Chunk was on 30202 **/
/** chunk id: 673096, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
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
let l = [];

function o() {
  l = []
}
class c extends(i = Chunk442837.ZP.Store) {
  getSessions() {
    return l
  }
}
a(c, "displayName", "AuthSessionsStore");
let d = new c(Chunk570140.Z, {
  LOGOUT: o,
  LOGIN_SUCCESS: o,
  FETCH_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessions: t
    } = e;
    l = t.map(e => {
      var t, n;
      return t = function(e) {
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
      }({}, e), n = n = {
        approx_last_used_time: new Date(e.approx_last_used_time)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
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
    } = e, n = [...l], i = false;
    for (let e of t) {
      let t = n.findIndex(t => t.id_hash === e);
      t >= 0 && (n.splice(t, 1), i = true)
    }
    if (!i) returnfalse;
    l = n
  }
})