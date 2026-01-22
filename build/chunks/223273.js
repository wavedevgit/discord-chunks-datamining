/** Chunk was on web.js **/
/** chunk id: 223273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => l,
  Lb: () => c,
  Mh: () => s,
  q0: () => o
}), require("./228524.js");
var Chunk315069 = require("./315069.js"),
  Chunk611010 = require("./611010.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = function(e) {
    return e[e.LINKED = 1] = "LINKED", e[e.OFFICIAL = 2] = "OFFICIAL", e
  }({}),
  o = function(e) {
    return e.EROTIC = "Erotic", e
  }({});
class l extends Chunk315069.A {
  getIconURL(e) {
    return null == this.icon ? null : "https://cdn.discordapp.com/app-icons/".concat(this.id, "/").concat(this.icon, ".png").concat(null != e ? "?size=".concat(e) : "")
  }
  hasTheme(e) {
    return this.themes.includes(e)
  }
  constructor(e) {
    var t;
    super(), a(this, "id", true), a(this, "name", true), a(this, "description", true), a(this, "icon", true), a(this, "icon_hash", true), a(this, "cover_image_hash", true), a(this, "aliases", true), a(this, "executables", true), a(this, "overlay", true), a(this, "overlayWarn", true), a(this, "overlayCompatibilityHook", true), a(this, "hook", true), a(this, "supportsOutOfProcessOverlay", true), a(this, "thirdPartySkus", true), a(this, "themes", true), a(this, "linkedApplications", true), this.id = e.id, this.name = e.name, this.description = e.description, this.icon = e.icon, this.icon_hash = e.icon_hash, this.aliases = e.aliases || [], this.cover_image_hash = e.cover_image_hash, this.executables = (null != (t = e.executables) ? t : []).map(i.lg), this.overlay = e.overlay || false, this.overlayWarn = e.overlayWarn || false, this.overlayCompatibilityHook = e.overlayCompatibilityHook || false, this.hook = e.hook || false, this.supportsOutOfProcessOverlay = e.supportsOutOfProcessOverlay || false, this.thirdPartySkus = e.thirdPartySkus || [], this.themes = e.themes || [], this.linkedApplications = e.linkedApplications
  }
}
var c = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.WINDOWED_ONLY = 1] = "WINDOWED_ONLY", e[e.ALL = 2] = "ALL", e
}({})