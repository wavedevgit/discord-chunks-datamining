/** Chunk was on 40383 **/
i.d(t, {
  Z: () => E
});
var n, r = i(442837),
  o = i(570140);

function s(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
let l = 12 * i(70956).Z.Millis.HOUR,
  a = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  c = {
    hasFetchedRelevance: !1
  },
  d = a,
  u = c;
class h extends(n = r.ZP.PersistedStore) {
  initialize(e) {
    u = c, d = a;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < l && (d = e)
  }
  get hasFetchedRelevance() {
    return u.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return d.profileThemesRelevanceExceeded
  }
  getState() {
    return d
  }
}
s(h, "displayName", "PerksRelevanceStore"), s(h, "persistKey", "PerksRelevanceStore");
let E = new h(o.Z, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    u.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (d.profileThemesRelevanceExceeded = t.eligible, d.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    u = c, d = a
  }
})