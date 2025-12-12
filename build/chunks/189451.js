/** Chunk was on web.js **/
/** chunk id: 189451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J8: () => s,
  ZP: () => l,
  ls: () => c,
  tE: () => a
}), require("./953529.js");
var Chunk81825 = require("./81825.js"),
  Chunk973616 = require("./973616.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var a = function(e) {
    return e[e.LINKED = 1] = "LINKED", e[e.OFFICIAL = 2] = "OFFICIAL", e
  }({}),
  s = function(e) {
    return e.EROTIC = "Erotic", e
  }({});
class l extends Chunk81825.Z {
  getIconURL(e) {
    return null == this.icon ? null : "https://cdn.discordapp.com/app-icons/".concat(this.id, "/").concat(this.icon, ".png").concat(null != e ? "?size=".concat(e) : "")
  }
  hasTheme(e) {
    return this.themes.includes(e)
  }
  constructor(e) {
    var t;
    super(), o(this, "id", true), o(this, "name", true), o(this, "description", true), o(this, "icon", true), o(this, "icon_hash", true), o(this, "cover_image_hash", true), o(this, "aliases", true), o(this, "executables", true), o(this, "overlay", true), o(this, "overlayWarn", true), o(this, "overlayCompatibilityHook", true), o(this, "hook", true), o(this, "supportsOutOfProcessOverlay", true), o(this, "thirdPartySkus", true), o(this, "themes", true), o(this, "linkedApplications", true), this.id = e.id, this.name = e.name, this.description = e.description, this.icon = e.icon, this.icon_hash = e.icon_hash, this.aliases = e.aliases || [], this.cover_image_hash = e.cover_image_hash, this.executables = (null != (t = e.executables) ? t : []).map(i.BA), this.overlay = e.overlay || false, this.overlayWarn = e.overlayWarn || false, this.overlayCompatibilityHook = e.overlayCompatibilityHook || false, this.hook = e.hook || false, this.supportsOutOfProcessOverlay = e.supportsOutOfProcessOverlay || false, this.thirdPartySkus = e.thirdPartySkus || [], this.themes = e.themes || [], this.linkedApplications = e.linkedApplications
  }
}
var c = function(e) {
  return e[e.NONE = 0] = "NONE", e[e.WINDOWED_ONLY = 1] = "WINDOWED_ONLY", e[e.ALL = 2] = "ALL", e
}({})