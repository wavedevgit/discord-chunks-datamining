/** Chunk was on 8473 **/
n.d(t, {
  Z: () => C
}), n(47120), n(653041);
var r, i, a, o = n(392711),
  l = n.n(o),
  s = n(442837),
  c = n(433517),
  u = n(570140),
  d = n(496929),
  p = n(16084),
  m = n(728345),
  f = n(812206),
  h = n(594190),
  g = n(594174),
  _ = n(580130),
  b = n(55563),
  v = n(981631);
let y = "DetectedOffPlatformPremiumPerksStore",
  x = {},
  E = {},
  O = [];

function N() {
  let e = !1;
  for (let {
      skuId: t,
      applicationId: n
    }
    of l().values(E)) {
    if (O.includes(t)) continue;
    let r = f.Z.getApplication(n);
    if (null == r) {
      f.Z.isFetchingApplication(n) || f.Z.didFetchingApplicationFail(n) || m.ZP.fetchApplication(n);
      continue
    }
    let i = b.Z.get(t);
    if (null == i) {
      b.Z.isFetching(t) || b.Z.didFetchingSkuFail(t) || p.$N(r.id, t);
      continue
    }
    _.Z.applicationIdsFetching.has(r.id) || _.Z.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != x[t] && (delete x[t], e = !0) : (x[t] = {
      skuId: t,
      applicationId: n
    }, e = !0)
  }
  return e
}
class j extends(r = s.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(h.ZP, b.Z, _.Z), O = null !== (e = c.K.get(y)) && void 0 !== e ? e : O
  }
  getDetectedOffPlatformPremiumPerks() {
    return l().values(x)
  }
}
a = "DetectedOffPlatformPremiumPerksStore", (i = "displayName") in j ? Object.defineProperty(j, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : j[i] = a;
let C = new j(u.Z, {
  LOGOUT: function() {
    x = {}, E = {}
  },
  SKU_FETCH_SUCCESS: N,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: N,
  ENTITLEMENT_CREATE: N,
  APPLICATION_FETCH_SUCCESS: N,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete x[t], O.includes(t)) return !1;
    O.push(t), c.K.set(y, O)
  },
  RUNNING_GAMES_CHANGE: function() {
    let e = !1;
    for (let {
        id: t,
        distributor: n
      }
      of h.ZP.getRunningGames())
      if (null != t && n !== v.GQo.DISCORD)
        for (let {
            skuId: n,
            applicationId: r
          }
          of v.Lg6) !(r !== t || O.includes(n)) && null == E[n] && (_.Z.applicationIdsFetched.has(r) || _.Z.applicationIdsFetching.has(r) || null != _.Z.getForSku(n) || d.yD(r), E[n] = {
          skuId: n,
          applicationId: r
        }, e = !0);
    return e && N(), e
  }
})