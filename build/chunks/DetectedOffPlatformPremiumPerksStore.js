/** Chunk was on web.js **/
/** chunk id: 584584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk339048 = require("./339048.js"),
  Chunk830382 = require("./830382.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk15285 = require("./15285.js"),
  Chunk287809 = require("./287809.js"),
  Chunk469778 = require("./469778.js"),
  Chunk67480 = require("./67480.js"),
  Chunk652215 = require("./652215.js");

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
  A = [];

function v() {
  let e = false;
  for (let {
      id: t,
      distributor: n
    }
    of p.Ay.getRunningGames())
    if (null != t && n !== g.d3x.DISCORD)
      for (let {
          skuId: n,
          applicationId: r
        }
        of g.m_i) r !== t || A.includes(n) || null == O[n] && (h.A.applicationIdsFetched.has(r) || h.A.applicationIdsFetching.has(r) || null != h.A.getForSku(n) || c.LM(r), O[n] = {
        skuId: n,
        applicationId: r
      }, e = true);
  return e && S(), e
}

function S() {
  let e = false;
  for (let {
      skuId: t,
      applicationId: n
    }
    of a().values(O)) {
    if (A.includes(t)) continue;
    let r = f.A.getApplication(n);
    if (null == r) {
      f.A.isFetchingApplication(n) || f.A.didFetchingApplicationFail(n) || d.Ay.fetchApplication(n);
      continue
    }
    let i = m.A.get(t);
    if (null == i) {
      m.A.isFetching(t) || m.A.didFetchingSkuFail(t) || u.EX(r.id, t);
      continue
    }
    h.A.applicationIdsFetching.has(r.id) || h.A.isEntitledToSku(_.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != y[t] && (delete y[t], e = true) : (y[t] = {
      skuId: t,
      applicationId: n
    }, e = true)
  }
  return e
}

function I(e) {
  let {
    skuId: t
  } = e;
  if (delete y[t], A.includes(t)) returnfalse;
  A.push(t), o.w.set(b, A)
}

function T() {
  y = {}, O = {}
}
class C extends(r = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    this.waitFor(f.A, h.A, p.Ay, m.A, _.default), A = null != (e = o.w.get(b)) ? e : A
  }
  getDetectedOffPlatformPremiumPerks() {
    return a().values(y)
  }
}
E(C, "displayName", "DetectedOffPlatformPremiumPerksStore");
let N = new C(Chunk73153.h, {
  LOGOUT: T,
  SKU_FETCH_SUCCESS: S,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: S,
  ENTITLEMENT_CREATE: S,
  APPLICATION_FETCH_SUCCESS: S,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: I,
  RUNNING_GAMES_CHANGE: v
})