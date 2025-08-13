/** Chunk was on 41753 **/
/** chunk id: 613060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {};
class a extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && Object.keys(e).forEach(t => {
      "number" == typeof e[t] && (s[t] = e[t])
    })
  }
  getState() {
    return s
  }
  hasViewed(e) {
    return null != s[e]
  }
}
o(a, "displayName", "ViewHistoryStore"), o(a, "persistKey", "ViewHistoryStore");
let c = new a(Chunk570140.Z, {
  VIEW_HISTORY_MARK_VIEW: function(e) {
    let {
      key: t
    } = e;
    s[t] = Date.now()
  }
})