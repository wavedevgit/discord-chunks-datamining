/** Chunk was on 20756 **/
n.d(t, {
  Z: () => p
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
let s = 12 * n(70956).Z.Millis.HOUR,
  a = {
    profileThemesRelevanceExceeded: null,
    savedAt: null
  },
  c = {
    hasFetchedRelevance: !1
  },
  d = a,
  u = c;
class _ extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    u = c, d = a;
    let t = new Date;
    null != e && null != e.savedAt && t.getTime() - e.savedAt < s && (d = e)
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
l(_, "displayName", "PerksRelevanceStore"), l(_, "persistKey", "PerksRelevanceStore");
let p = new _(o.Z, {
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