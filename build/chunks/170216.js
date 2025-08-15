/** Chunk was on 54157 **/
/** chunk id: 170216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => r
}), require("./388685.js");
class r {
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
    ! function(e, t, n) {
      t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    }(this, "searchFetchers", new Map)
  }
}