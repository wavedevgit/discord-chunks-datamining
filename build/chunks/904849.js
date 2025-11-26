/** Chunk was on 9452 **/
/** chunk id: 904849, original params: t,e,n (module,exports,require) **/
function i(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
require.d(exports, {
  Z: () => r
}), require("./388685.js");
class r {
  register(t, e, n, i) {
    this.map.set(t.key, {
      node: t,
      targetPanelKey: e,
      parentCategoryKey: n,
      parentAccordionKey: i
    })
  }
  entry(t) {
    return this.map.get(t)
  }
  get(t) {
    var e;
    return null == (e = this.entry(t)) ? true : e.node
  }
  typedEntry(t) {
    if (null != t) return this.map.get(t.key)
  }
  typedGet(t) {
    var e;
    return null == (e = this.typedEntry(t)) ? true : e.node
  }
  setDefaultPanel(t) {
    this.defaultPanel = t
  }
  getDefaultPanel() {
    return this.defaultPanel
  }
  constructor() {
    i(this, "map", new Map), i(this, "defaultPanel", true)
  }
}