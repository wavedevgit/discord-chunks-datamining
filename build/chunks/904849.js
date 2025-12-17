/** Chunk was on web.js **/
/** chunk id: 904849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk28682 = require("./28682.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s {
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
  getPanelOrThrow(e) {
    let t = this.get(e);
    return i()((null == t ? true : t.type) === a.Jq.PANEL, "[SettingsDirectory] key is not for a panel: ".concat(e)), t
  }
  constructor() {
    o(this, "map", new Map), o(this, "defaultPanel", true)
  }
}