/** Chunk was on 64935 **/
/** chunk id: 584584, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./321073.js");
var r, i, Chunk735438 = require("./735438.js"),
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
let y = "DetectedOffPlatformPremiumPerksStore",
  A = {},
  v = {},
  O = [];

function x() {
  let e = false;
  for (let {
      skuId: t,
      applicationId: n
    }
    of a().values(v)) {
    if (O.includes(t)) continue;
    let r = m.A.getApplication(n);
    if (null == r) {
      m.A.isFetchingApplication(n) || m.A.didFetchingApplicationFail(n) || p.Ay.fetchApplication(n);
      continue
    }
    let i = h.A.get(t);
    if (null == i) {
      h.A.isFetching(t) || h.A.didFetchingSkuFail(t) || d.EX(r.id, t);
      continue
    }
    _.A.applicationIdsFetching.has(r.id) || _.A.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != A[t] && (delete A[t], e = true) : (A[t] = {
      skuId: t,
      applicationId: n
    }, e = true)
  }
  return e
}
class E extends(r = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    this.waitFor(m.A, _.A, f.Ay, h.A, g.default), O = null != (e = o.w.get(y)) ? e : O
  }
  getDetectedOffPlatformPremiumPerks() {
    return a().values(A)
  }
}(i = "displayName") in E ? Object.defineProperty(E, i, {
  value: "DetectedOffPlatformPremiumPerksStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : E[i] = "DetectedOffPlatformPremiumPerksStore";
let j = new E(Chunk73153.h, {
  LOGOUT: function() {
    A = {}, v = {}
  },
  SKU_FETCH_SUCCESS: x,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: x,
  ENTITLEMENT_CREATE: x,
  APPLICATION_FETCH_SUCCESS: x,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete A[t], O.includes(t)) returnfalse;
    O.push(t), o.w.set(y, O)
  },
  RUNNING_GAMES_CHANGE: function() {
    let e = false;
    for (let {
        id: t,
        distributor: n
      }
      of f.Ay.getRunningGames())
      if (null != t && n !== b.d3x.DISCORD)
        for (let {
            skuId: n,
            applicationId: r
          }
          of b.m_i) r !== t || O.includes(n) || null == v[n] && (_.A.applicationIdsFetched.has(r) || _.A.applicationIdsFetching.has(r) || null != _.A.getForSku(n) || u.LM(r), v[n] = {
          skuId: n,
          applicationId: r
        }, e = true);
    return e && x(), e
  }
})