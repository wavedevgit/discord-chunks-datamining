/** Chunk was on web.js **/
/** chunk id: 815372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FL: () => s,
  Ky: () => o
}), require("./415506.js");
var Chunk81825 = require("./81825.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var o = function(e) {
  return e.SHOP = "SHOP", e.NITRO_HOME = "NITRO_HOME", e.QUEST_HOME = "QUEST_HOME", e.APPS_HOME = "APPS_HOME", e.SETTINGS = "SETTINGS", e.REVENUE_PLAYGROUND = "REVENUE_PLAYGROUND", e
}(o || {});
class s extends Chunk81825.Z {
  static fromType(e, t, n) {
    switch (e) {
      case "SHOP":
        return new s({
          path: i.Z5c.COLLECTIBLES_SHOP,
          type: "SHOP"
        });
      case "NITRO_HOME":
        return new s({
          path: i.Z5c.NITRO_HOME,
          type: "NITRO_HOME"
        });
      case "QUEST_HOME":
        return new s({
          path: i.Z5c.QUEST_HOME_V2,
          type: "QUEST_HOME"
        });
      case "APPS_HOME":
        return new s({
          path: i.Z5c.GLOBAL_DISCOVERY_APPS,
          type: "APPS_HOME"
        });
      case "SETTINGS":
        return new s({
          path: null != t ? t : i.Z5c.SETTINGS("account"),
          label: n,
          type: "SETTINGS"
        });
      case "REVENUE_PLAYGROUND":
        return new s({
          path: null != t ? t : i.Z5c.APP,
          type: "REVENUE_PLAYGROUND"
        });
      default:
        throw Error("Unhandled InAppNavigationType")
    }
  }
  constructor(e) {
    super(), a(this, "id", true), a(this, "path", true), a(this, "type", true), a(this, "label", true), this.id = e.type, this.path = e.path, this.type = e.type, this.label = e.label
  }
}