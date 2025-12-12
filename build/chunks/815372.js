/** Chunk was on web.js **/
/** chunk id: 815372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FL: () => l,
  Ky: () => s
}), require("./415506.js");
var Chunk81825 = require("./81825.js"),
  Chunk981631 = require("./981631.js"),
  Chunk324805 = require("./324805.js");

function a(e, t, n) {
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
class l extends Chunk81825.Z {
  static fromType(e, t, n, r, a) {
    switch (e) {
      case "SHOP":
        return new l({
          path: i.Z5c.COLLECTIBLES_SHOP,
          type: "SHOP"
        });
      case "NITRO_HOME":
        return new l({
          path: i.Z5c.NITRO_HOME,
          type: "NITRO_HOME"
        });
      case "QUEST_HOME":
        return new l({
          path: i.Z5c.QUEST_HOME_V2,
          type: "QUEST_HOME"
        });
      case "APPS_HOME":
        return new l({
          path: i.Z5c.GLOBAL_DISCOVERY_APPS,
          type: "APPS_HOME"
        });
      case "SETTINGS":
        return new l({
          path: null != t ? t : i.Z5c.SETTINGS("account"),
          label: n,
          type: "SETTINGS"
        });
      case "PLAYGROUND":
        return new l({
          path: null != t ? t : i.Z5c.APP,
          type: "PLAYGROUND",
          label: n,
          collectionId: r,
          IconComponent: a
        });
      case "SHOP_ORBS_TAB":
        return new l({
          path: i.Z5c.COLLECTIBLES_SHOP,
          type: "SHOP_ORBS_TAB"
        });
      case "QUEST_ORBS":
        return new l({
          path: "".concat(i.Z5c.QUEST_HOME_V2, "?filter=").concat(o.UP.VIRTUAL_CURRENCY),
          type: "QUEST_ORBS"
        });
      default:
        throw Error("Unhandled InAppNavigationType")
    }
  }
  constructor(e) {
    super(), a(this, "id", true), a(this, "path", true), a(this, "type", true), a(this, "label", true), a(this, "collectionId", true), a(this, "IconComponent", true), this.id = null != e.collectionId ? "".concat(e.type, "_").concat(e.collectionId) : e.type, this.path = e.path, this.type = e.type, this.label = e.label, this.collectionId = e.collectionId, this.IconComponent = e.IconComponent
  }
}