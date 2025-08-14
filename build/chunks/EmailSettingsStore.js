/** Chunk was on 7384 **/
/** chunk id: 151662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
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
let l = {},
  o = null;

function c() {
  l = {}, o = null
}
class d extends(i = Chunk442837.ZP.Store) {
  getEmailSettings() {
    return {
      categories: l,
      initialized: o
    }
  }
}
a(d, "displayName", "EmailSettingsStore");
let u = new d(Chunk570140.Z, {
  CONNECTION_OPEN: c,
  LOGOUT: c,
  EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    l = t.categories, o = t.initialized
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
    let {
      settings: t
    } = e;
    l = t.categories
  },
  EMAIL_SETTINGS_UPDATE: function(e) {
    let {
      updates: t
    } = e;
    l = function(e) {
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
    }({}, l, t)
  }
})