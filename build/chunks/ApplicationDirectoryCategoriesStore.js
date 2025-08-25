/** Chunk was on web.js **/
/** chunk id: 678694, original params: e,t,n (module,exports,re quire) **/
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
let s = [],
  l = null;

function c(e) {
  let {
    categories: t
  } = e;
  s = t, l = Date.now()
}
class u extends(r = Chunk442837.ZP.Store) {
  getLastFetchTimeMs() {
    return l
  }
  getCategories() {
    return s
  }
  getCategory(e) {
    return s.find(t => t.id === e)
  }
}
a(u, "displayName", "ApplicationDirectoryCategoriesStore");
let d = new u(Chunk570140.Z, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: c
})