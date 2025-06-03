/** Chunk was on 77978 **/
n.d(t, {
  Z: () => g
});
var i, l = n(442837),
  r = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = 12 * n(70956).Z.Millis.HOUR,
  a = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  u = {
    hasFetchedRelevance: !1
  },
  c = a,
  d = u;
class h extends(i = l.ZP.PersistedStore) {
  initialize(e) {
    d = u, c = a;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < s && (c = e)
  }
  get hasFetchedRelevance() {
    return d.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return c.profileThemesRelevanceExceeded
  }
  getState() {
    return c
  }
}
o(h, "displayName", "PerksRelevanceStore"), o(h, "persistKey", "PerksRelevanceStore");
let g = new h(r.Z, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    d.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (c.profileThemesRelevanceExceeded = t.eligible, c.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    d = u, c = a
  }
})