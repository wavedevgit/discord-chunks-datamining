/** Chunk was on 28936 **/
/** chunk id: 732134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
}), require("./896048.js");
class l extends Map {
  set(e, t) {
    return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t)
  }
  constructor(e) {
    super(),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "maxSize", true), this.maxSize = e
  }
}
let r = l