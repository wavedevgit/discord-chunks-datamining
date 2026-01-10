/** Chunk was on 81985 **/
/** chunk id: 613060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
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
let o = {};
class s extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && Object.keys(e).forEach(t => {
      "number" == typeof e[t] && (o[t] = e[t])
    })
  }
  getState() {
    return o
  }
  hasViewed(e) {
    return null != o[e]
  }
}
a(s, "displayName", "ViewHistoryStore"), a(s, "persistKey", "ViewHistoryStore");
let c = new s(Chunk570140.Z, {
  VIEW_HISTORY_MARK_VIEW: function(e) {
    let {
      key: t
    } = e;
    o[t] = Date.now()
  }
})