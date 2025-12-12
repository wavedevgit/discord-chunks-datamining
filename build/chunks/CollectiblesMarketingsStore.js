/** Chunk was on web.js **/
/** chunk id: 874703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
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
let s = {},
  l = "NOT_FETCHED",
  c = () => {
    l = "FETCHING"
  },
  u = e => {
    s = e.marketings.marketingsBySurfaces, l = "FETCHED"
  },
  d = () => {
    s = {}, l = "NOT_FETCHED"
  };
class f extends(r = Chunk442837.ZP.Store) {
  getMarketingBySurface(e) {
    return s[e]
  }
  get fetchState() {
    return l
  }
}
a(f, "displayName", "CollectiblesMarketingsStore");
let p = new f(Chunk570140.Z, {
  COLLECTIBLES_MARKETING_FETCH: c,
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: u,
  LOGOUT: d
})