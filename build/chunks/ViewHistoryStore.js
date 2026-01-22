/** Chunk was on 97492 **/
/** chunk id: 871697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
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
let s = {};
class o extends(r = Chunk311907.Ay.PersistedStore) {
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
a(o, "displayName", "ViewHistoryStore"), a(o, "persistKey", "ViewHistoryStore");
let c = new o(Chunk73153.h, {
  VIEW_HISTORY_MARK_VIEW: function(e) {
    let {
      key: t
    } = e;
    s[t] = Date.now()
  }
})