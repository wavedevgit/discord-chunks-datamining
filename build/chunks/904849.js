/** Chunk was on 47129 **/
/** chunk id: 904849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
class r {
  register(e, t, n, r) {
    this.map.set(e.key, {
      node: e,
      parentPanel: t,
      parentCategory: n,
      parentAccordion: r
    })
  }
  entry(e) {
    return this.map.get(e)
  }
  get(e) {
    var t;
    return null == (t = this.entry(e)) ? true : t.node
  }
  typedEntry(e) {
    if (null != e) return this.map.get(e.key)
  }
  typedGet(e) {
    var t;
    return null == (t = this.typedEntry(e)) ? true : t.node
  }
  constructor() {
    ! function(e, t, n) {
      "map" in e ? Object.defineProperty(e, "map", {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    }(this, "map", new Map)
  }
}