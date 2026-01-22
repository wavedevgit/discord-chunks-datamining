/** Chunk was on web.js **/
/** chunk id: 38181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = [],
  l = null;

function c(e) {
  let {
    categories: t
  } = e;
  o = t, l = Date.now()
}
class u extends(r = Chunk311907.Ay.Store) {
  getLastFetchTimeMs() {
    return l
  }
  getCategories() {
    return o
  }
  getCategory(e) {
    return o.find(t => t.id === e)
  }
}
s(u, "displayName", "ApplicationDirectoryCategoriesStore");
let d = new u(Chunk73153.h, {
  APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: c
})