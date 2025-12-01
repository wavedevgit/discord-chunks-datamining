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
  return module && I(), module
}

function I() {
  let e = false;
  for (let {
      skuId: t,
      applicationId: n
    }
    of a().values(O)) {
    if (v.includes(exports)) continue;
    let r = Chunk812206.Z.getApplication(require);
    if (null == r) {
      Chunk812206.Z.isFetchingApplication(require) || Chunk812206.Z.didFetchingApplicationFail(require) || Chunk728345.ZP.fetchApplication(require);
      continue
    }
    let i = Chunk55563.Z.get(exports);
    if (null == Chunk392711) {
      Chunk55563.Z.isFetching(exports) || Chunk55563.Z.didFetchingSkuFail(exports) || Chunk16084.$N(r.id, exports);
      continue
    }
    Chunk580130.Z.applicationIdsFetching.has(r.id) || Chunk580130.Z.isEntitledToSku(Chunk594174.default.getCurrentUser(), exports, r.id, r.id) || !Chunk392711.available ? null != y[exports] && (delete y[exports], e = true) : (y[exports] = {
      skuId: exports,
      applicationId: require
    }, e = true)
  }
  return module
}

function T(e) {
  let {
    skuId: t
  } = e;
  if (delete y[t], v.includes(t)) returnfalse;
  v.push(t), s.K.set(b, v)
}

function A() {
  y = {}, O = {}
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(Chunk812206.Z, Chunk580130.Z, Chunk594190.ZP, Chunk55563.Z, Chunk594174.default), v = null != (e = Chunk433517.K.get(b)) ? module : v
  }
  getDetectedOffPlatformPremiumPerks() {
    return a().values(y)
  }
}
E(C, "displayName", "DetectedOffPlatformPremiumPerksStore");
let N = new C(Chunk570140.Z, {
  LOGOUT: A,
  SKU_FETCH_SUCCESS: I,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: I,
  ENTITLEMENT_CREATE: I,
  APPLICATION_FETCH_SUCCESS: I,
  DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: T,
  RUNNING_GAMES_CHANGE: S
})