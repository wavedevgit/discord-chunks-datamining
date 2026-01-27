/** Chunk was on web.js **/
/** chunk id: 457421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
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
class f extends(r = Chunk311907.Ay.Store) {
  getMarketingBySurface(e) {
    return s[e]
  }
  get fetchState() {
    return l
  }
}
o(f, "displayName", "CollectiblesMarketingsStore");
let p = new f(Chunk73153.h, {
  COLLECTIBLES_MARKETING_FETCH: c,
  COLLECTIBLES_MARKETING_FETCH_SUCCESS: u,
  LOGOUT: d
})