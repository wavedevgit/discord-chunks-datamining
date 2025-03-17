/** Chunk was on 53494 **/
n.d(t, {
  Z: () => c
});
var r, i = n(442837),
  o = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = {};
class s extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    null != e && Object.keys(e).forEach(t => {
      "number" == typeof e[t] && (a[t] = e[t])
    })
  }
  getState() {
    return a
  }
  hasViewed(e) {
    return null != a[e]
  }
}
l(s, "displayName", "ViewHistoryStore"), l(s, "persistKey", "ViewHistoryStore");
let c = new s(o.Z, {
  VIEW_HISTORY_MARK_VIEW: function(e) {
    let {
      key: t
    } = e;
    a[t] = Date.now()
  }
})