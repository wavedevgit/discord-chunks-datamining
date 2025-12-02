/** Chunk was on web.js **/
/** chunk id: 904849, original params: e,t,n (module,exports,re quire) **/
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
  Z: () => i
}), require("./388685.js");
class i {
  register(e, t, n, r) {
    this.map.set(e.key, {
      node: e,
      parentPanelKey: t,
      parentCategoryKey: n,
      parentAccordionKey: r
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
    r(this, "map", new Map), r(this, "defaultPanel", true)
  }
}