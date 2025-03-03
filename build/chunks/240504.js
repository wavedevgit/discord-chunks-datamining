/** Chunk was on 51424 **/
n.d(t, {
  Z: () => E
});
var r, i = n(442837),
  l = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = 12 * n(70956).Z.Millis.HOUR,
  s = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  c = {
    hasFetchedRelevance: !1
  },
  u = s,
  d = c;
class _ extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    d = c, u = s;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < a && (u = e)
  }
  get hasFetchedRelevance() {
    return d.hasFetchedRelevance
  }
  get profileThemesRelevanceExceeded() {
    return u.profileThemesRelevanceExceeded
  }
  getState() {
    return u
  }
}
o(_, "displayName", "PerksRelevanceStore"), o(_, "persistKey", "PerksRelevanceStore");
let E = new _(l.Z, {
  BILLING_PERKS_RELEVANCE_FETCH_START: function() {
    d.hasFetchedRelevance = !0
  },
  BILLING_PERKS_RELEVANCE_FETCH_SUCCESS: function(e) {
    let {
      res: t
    } = e;
    null != t && (u.profileThemesRelevanceExceeded = t.eligible, u.savedAt = new Date().getTime())
  },
  BILLING_PERKS_RELEVANCE_FETCH_FAIL: function() {},
  LOGOUT: function() {
    d = c, u = s
  }
})