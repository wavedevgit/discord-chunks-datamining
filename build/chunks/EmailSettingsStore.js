/** Chunk was on 5606 **/
/** chunk id: 878460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {},
  o = null;

function c() {
  a = {}, o = null
}
class d extends(r = Chunk311907.Ay.Store) {
  getEmailSettings() {
    return {
      categories: a,
      initialized: o
    }
  }
}
s(d, "displayName", "EmailSettingsStore");
let u = new d(Chunk73153.h, {
  CONNECTION_OPEN: c,
  LOGOUT: c,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    a = t.categories, o = t.initialized
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    a = t.categories
  },
  EMAIL_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    a = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          s(e, t, n[t])
        })
      }
      return e
    }({}, a, t)
  }
})