/** Chunk was on web.js **/
/** chunk id: 409037, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  c: () => i
}), require("./896048.js");
class i {
  cleanUp(e) {
    this.cancel(e), this.delete(e)
  }
  cancel(e) {
    var t;
    null == (t = this.searchFetchers.get(e)) || t.cancel()
  }
  delete(e) {
    this.searchFetchers.delete(e)
  }
  get(e) {
    return this.searchFetchers.get(e)
  }
  set(e, t) {
    this.searchFetchers.set(e, t)
  }
  constructor() {
    r(this, "searchFetchers", new Map)
  }
}