/** Chunk was on web.js **/
/** chunk id: 236077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk963935 = require("./963935.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
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
    return i()((null == t ? true : t.type) === a.Z6.PANEL, "[SettingsDirectory] key is not for a panel: ".concat(e)), t
  }
  constructor() {
    s(this, "map", new Map), s(this, "defaultPanel", true)
  }
}