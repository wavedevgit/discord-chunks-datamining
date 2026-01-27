/** Chunk was on 92917 **/
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
let A = "DetectedOffPlatformPremiumPerksStore",
  y = {},
  v = {},
  x = [];

function O() {
  let e = false;
  for (let {
      skuId: t,
      applicationId: n
    }
    of a().values(v)) {
    if (x.includes(t)) continue;
    let r = m.A.getApplication(n);
    if (null == r) {
      m.A.isFetchingApplication(n) || m.A.didFetchingApplicationFail(n) || p.Ay.fetchApplication(n);
      continue
    }
    let i = _.A.get(t);
    if (null == i) {
      _.A.isFetching(t) || _.A.didFetchingSkuFail(t) || d.EX(r.id, t);
      continue
    }
    h.A.applicationIdsFetching.has(r.id) || h.A.isEntitledToSku(g.default.getCurrentUser(), t, r.id, r.id) || !i.available ? null != y[t] && (delete y[t], e = true) : (y[t] = {
      skuId: t,
      applicationId: n
    }, e = true)
  }
  return e
}
class E extends(r = Chunk311907.Ay.Store) {
  initialize() {
    var e;
    this.waitFor(m.A, h.A, f.Ay, _.A, g.default), x = null != (e = o.w.get(A)) ? e : x
  }
  getDetectedOffPlatformPremiumPerks() {
    return a().values(y)
  }
}(i = "displayName") in E ? Object.defineProperty(E, i, {
  value: "DetectedOffPlatformPremiumPerksStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : E[i] = "DetectedOffPlatformPremiumPerksStore";
let j = new E(Chunk73153.h, {
  LOGOUT: function() {
    y = {}, v = {}
  },
  SKU_FETCH_SUCCESS: O,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: O,
  ENTITLEMENT_CREATE: O,
  APPLICATION_FETCH_SUCCESS: O,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete y[t], x.includes(t)) returnfalse;
    x.push(t), o.w.set(A, x)
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
          of b.m_i) r !== t || x.includes(n) || null == v[n] && (h.A.applicationIdsFetched.has(r) || h.A.applicationIdsFetching.has(r) || null != h.A.getForSku(n) || u.LM(r), v[n] = {
          skuId: n,
          applicationId: r
        }, e = true);
    return e && O(), e
  }
})