/** Chunk was on web.js **/
/** chunk id: 329308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SV: () => l,
  t1: () => s
}), require("./65821.js");
var Chunk315069 = require("./315069.js"),
  Chunk652215 = require("./652215.js"),
  Chunk654487 = require("./654487.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = function(e) {
  return e.SHOP = "SHOP", e.SHOP_ORBS_TAB = "SHOP_ORBS_TAB", e.NITRO_HOME = "NITRO_HOME", e.QUEST_HOME = "QUEST_HOME", e.QUEST_ORBS = "QUEST_ORBS", e.APPS_HOME = "APPS_HOME", e.SETTINGS = "SETTINGS", e.PLAYGROUND = "PLAYGROUND", e
}(s || {});
class l extends Chunk315069.A {
  static fromType(e, t, n, r, o) {
    switch (e) {
      case "SHOP":
        return new l({
          path: i.BVt.COLLECTIBLES_SHOP,
          type: "SHOP"
        });
      case "NITRO_HOME":
        return new l({
          path: i.BVt.NITRO_HOME,
          type: "NITRO_HOME"
        });
      case "QUEST_HOME":
        return new l({
          path: i.BVt.QUEST_HOME_V2,
          type: "QUEST_HOME"
        });
      case "APPS_HOME":
        return new l({
          path: i.BVt.GLOBAL_DISCOVERY_APPS,
          type: "APPS_HOME"
        });
      case "SETTINGS":
        return new l({
          path: null != t ? t : i.BVt.SETTINGS("account"),
          label: n,
          type: "SETTINGS"
        });
      case "PLAYGROUND":
        return new l({
          path: null != t ? t : i.BVt.APP,
          type: "PLAYGROUND",
          label: n,
          collectionId: r,
          IconComponent: o
        });
      case "SHOP_ORBS_TAB":
        return new l({
          path: i.BVt.COLLECTIBLES_SHOP,
          type: "SHOP_ORBS_TAB"
        });
      case "QUEST_ORBS":
        return new l({
          path: "".concat(i.BVt.QUEST_HOME_V2, "?filter=").concat(a.BQ.VIRTUAL_CURRENCY),
          type: "QUEST_ORBS"
        });
      default:
        throw Error("Unhandled InAppNavigationType")
    }
  }
  constructor(e) {
    super(), o(this, "id", true), o(this, "path", true), o(this, "type", true), o(this, "label", true), o(this, "collectionId", true), o(this, "IconComponent", true), this.id = null != e.collectionId ? "".concat(e.type, "_").concat(e.collectionId) : e.type, this.path = e.path, this.type = e.type, this.label = e.label, this.collectionId = e.collectionId, this.IconComponent = e.IconComponent
  }
}