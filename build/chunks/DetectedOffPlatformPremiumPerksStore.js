/** Chunk was on web.js **/
/** chunk id: 427123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk496929 = require("./496929.js"),
  Chunk16084 = require("./16084.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk594190 = require("./594190.js"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk55563 = require("./55563.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = "DetectedOffPlatformPremiumPerksStore",
  y = {},
  O = {},
  v = [];

function S() {
  let e = false;
  for (let {
      id: t,
      distributor: n
    }
    of p.ZP.getRunningGames())
    if (null != t && n !== g.GQo.DISCORD)
      for (let {
          skuId: n,
          applicationId: r
        }
        of g.Lg6) r !== t || v.includes(n) || null == O[n] && (m.Z.applicationIdsFetched.has(r) || m.Z.applicationIdsFetching.has(r) || null != m.Z.getForSku(n) || c.yD(r), O[n] = {
        skuId: n,
        applicationId: r
      }, e = true);
  return e && I(), e
}

function I() {
  let e = false;
  for (let {
      skuId: t,
      applicationId: n
    }
    of a().values(O)) {
    if (v.includes(t)) continue;
    let r = f.Z.getApplication(n);
    if (null == r) {
      f.Z.isFetchingApplication(n) || f.Z.didFetchingApplicationFail(n) || d.ZP.fetchApplication(n);
      continue
    }
    let i = h.Z.get(t);
    if (null == i) {
      h.Z.isFetching(t) || h.Z.didFetchingSkuFail(t) || u.$N(r.id, t);
      continue
    }
    m.Z.applicationIdsFetching.has(r.id) || m.Z.isEntitledToSku(_.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != y[t] && (delete y[t], e = true) : (y[t] = {
      skuId: t,
      applicationId: n
    }, e = true)
  }
  return e
}

function T(e) {
  let {
    skuId: t
  } = e;
  if (delete y[t], v.includes(t)) returnfalse;
  v.push(t), s.K.set(b, v)
}

function C() {
  y = {}, O = {}
}
class A extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(f.Z, m.Z, p.ZP, h.Z, _.default), v = null != (e = s.K.get(b)) ? e : v
  }
  getDetectedOffPlatformPremiumPerks() {
    return a().values(y)
  }
}
E(A, "displayName", "DetectedOffPlatformPremiumPerksStore");
let N = new A(Chunk570140.Z, {
  LOGOUT: C,
  SKU_FETCH_SUCCESS: I,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: I,
  ENTITLEMENT_CREATE: I,
  APPLICATION_FETCH_SUCCESS: I,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: T,
  RUNNING_GAMES_CHANGE: S
})