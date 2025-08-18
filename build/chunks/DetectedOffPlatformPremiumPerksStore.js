/** Chunk was on 91173 **/
/** chunk id: 427123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
var r, i, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
let E = "DetectedOffPlatformPremiumPerksStore",
  C = {},
  O = {},
  v = [];

function y() {
  let e = false;
  for (let {
      skuId: t,
      applicationId: n
    }
    of o().values(O)) {
    if (v.includes(exports)) continue;
    let r = Chunk812206.Z.getApplication(require);
    if (null == r) {
      Chunk812206.Z.isFetchingApplication(require) || Chunk812206.Z.didFetchingApplicationFail(require) || Chunk728345.ZP.fetchApplication(require);
      continue
    }
    let i = Chunk55563.Z.get(exports);
    if (null == i) {
      Chunk55563.Z.isFetching(exports) || Chunk55563.Z.didFetchingSkuFail(exports) || Chunk16084.$N(r.id, exports);
      continue
    }
    Chunk580130.Z.applicationIdsFetching.has(r.id) || Chunk580130.Z.isEntitledToSku(Chunk594174.default.getCurrentUser(), exports, r.id, r.id) || !i.available ? null != C[exports] && (delete C[exports], e = true) : (C[exports] = {
      skuId: exports,
      applicationId: require
    }, e = true)
  }
  return module
}
class x extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(Chunk594190.ZP, Chunk55563.Z, Chunk580130.Z), v = null != (e = Chunk433517.K.get(E)) ? module : v
  }
  getDetectedOffPlatformPremiumPerks() {
    return o().values(C)
  }
}(i = "displayName") in x ? Object.defineProperty(x, i, {
  value: "DetectedOffPlatformPremiumPerksStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : x[i] = "DetectedOffPlatformPremiumPerksStore";
let j = new x(Chunk570140.Z, {
  LOGOUT: function() {
    C = {}, O = {}
  },
  SKU_FETCH_SUCCESS: y,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: y,
  ENTITLEMENT_CREATE: y,
  APPLICATION_FETCH_SUCCESS: y,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
    let {
      skuId: t
    } = e;
    if (delete C[t], v.includes(t)) returnfalse;
    v.push(t), s.K.set(E, v)
  },
  RUNNING_GAMES_CHANGE: function() {
    let e = false;
    for (let {
        id: t,
        distributor: n
      }
      of Chunk594190.ZP.getRunningGames())
      if (null != exports && require !== Chunk981631.GQo.DISCORD)
        for (let {
            skuId: n,
            applicationId: r
          }
          of Chunk981631.Lg6) r !== exports || v.includes(require) || null == O[require] && (Chunk580130.Z.applicationIdsFetched.has(r) || Chunk580130.Z.applicationIdsFetching.has(r) || null != Chunk580130.Z.getForSku(require) || Chunk496929.yD(r), O[require] = {
          skuId: require,
          applicationId: r
        }, e = true);
    return module && y(), module
  }
})