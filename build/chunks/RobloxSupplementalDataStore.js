/** Chunk was on web.js **/
/** chunk id: 543696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
let l = {};

function c(e) {
  let {
    data: t
  } = e;
  l = s({}, l, t)
}
class u extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    l = {}, Object.keys(null != (t = null == e ? true : e.universeIdToSupplementalData) ? t : {}).forEach(t => {
      let n = null == e ? true : e.universeIdToSupplementalData[t];
      null != n && null != n.rootPlaceId && (l[t] = {
        rootPlaceId: n.rootPlaceId
      })
    })
  }
  getSupplementalData(e) {
    var t;
    return null != (t = l[e]) ? t : null
  }
  getState() {
    return {
      universeIdToSupplementalData: l
    }
  }
}
a(u, "displayName", "RobloxSupplementalDataStore"), a(u, "persistKey", "robloxSupplementalData");
let d = new u(Chunk570140.Z, {
  ROBLOX_SUBGAME_SUPPLEMENTAL_DATA_FETCH_SUCCESS: c
})