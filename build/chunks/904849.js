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
  register(e) {
    let {
      node: t,
      parentPanelKey: n,
      parentTabKey: r,
      parentCategoryKey: i,
      parentAccordionKey: a
    } = e;
    this.map.set(t.key, {
      node: t,
      parentPanelKey: n,
      parentTabKey: r,
      parentCategoryKey: i,
      parentAccordionKey: a
    })
  }
  entry(e) {
    return this.map.get(e)
  }
  get(e) {
    var t;
    return null == (t = this.entry(e)) ? true : t.node
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