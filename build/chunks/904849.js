/** Chunk was on 9452 **/
/** chunk id: 904849, original params: e,t,n (module,exports,require) **/
function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Z: () => r
}), require("./388685.js");
class r {
  register(e, t, n, i) {
    this.map.set(e.key, {
      node: e,
      parentPanel: t,
      parentCategory: n,
      parentAccordion: i
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
  setDefaultPanel(e) {
    this.defaultPanel = e
  }
  getDefaultPanel() {
    return this.defaultPanel
  }
  constructor() {
    i(this, "map", new Map), i(this, "defaultPanel", true)
  }
}