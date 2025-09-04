/** Chunk was on web.js **/
/** chunk id: 815372, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FL: () => c,
  Ky: () => l
}), require("./415506.js");
var Chunk81825 = require("./81825.js"),
  Chunk937797 = require("./937797.js"),
  Chunk981631 = require("./981631.js"),
  Chunk46140 = require("./46140.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var l = function(e) {
  return e.SHOP = "SHOP", e.NITRO_HOME = "NITRO_HOME", e.QUEST_HOME = "QUEST_HOME", e.APPS_HOME = "APPS_HOME", e.SETTINGS = "SETTINGS", e
}(l || {});
class c extends Chunk81825.Z {
  static fromType(e, t, n) {
    switch (e) {
      case "SHOP":
        return new c({
          path: a.Z5c.COLLECTIBLES_SHOP,
          type: "SHOP"
        });
      case "NITRO_HOME":
        return new c({
          path: a.Z5c.NITRO_HOME,
          type: "NITRO_HOME"
        });
      case "QUEST_HOME":
        return new c({
          path: i.m8.getConfig({
            location: o.dr.IN_APP_NAVIGATION
          }).enabled ? a.Z5c.QUEST_HOME_V2 : a.Z5c.QUEST_HOME,
          type: "QUEST_HOME"
        });
      case "APPS_HOME":
        return new c({
          path: a.Z5c.GLOBAL_DISCOVERY_APPS,
          type: "APPS_HOME"
        });
      case "SETTINGS":
        return new c({
          path: null != t ? t : a.Z5c.SETTINGS("account"),
          label: n,
          type: "SETTINGS"
        });
      default:
        throw Error("Unhandled InAppNavigationType")
    }
  }
  constructor(e) {
    super(), s(this, "id", true), s(this, "path", true), s(this, "type", true), s(this, "label", true), this.id = e.type, this.path = e.path, this.type = e.type, this.label = e.label
  }
}