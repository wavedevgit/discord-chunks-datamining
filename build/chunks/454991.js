/** Chunk was on web.js **/
/** chunk id: 454991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => s
}), require("./388685.js");
var Chunk433517 = require("./433517.js"),
  Chunk987650 = require("./987650.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var a = function(e) {
  return e.Version1 = "OverlayStore", e.Version2 = "overlayEnabled", e.Version3 = "OverlayStore3", e.Version4 = "OverlayStore4", e.Version5 = "OverlayStore5", e.Version6 = "OverlayStore6", e
}({});
class s {
  static get legacyEnabled() {
    return s.load().legacyEnabled
  }
  static get oopEnabled() {
    return s.load().oopEnabled
  }
  static DEV_clearAllSavedSettings() {
    for (let e of Object.values(a)) Chunk433517.K.remove(module);
    this._loaded = null
  }
  static DEV_saveSettingsForVersion(e) {
    for (let [t, n] of Object.entries(e)) r.K.set(t, n);
    this._loaded = null
  }
  static update(e) {
    let t = s.load();
    "boolean" == typeof e.legacyEnabled && (t.legacyEnabled = e.legacyEnabled), "boolean" == typeof e.oopEnabled && (t.oopEnabled = e.oopEnabled), t.save()
  }
  save() {
    let e = {
      legacyEnabled: this.legacyEnabled,
      oopEnabled: this.oopEnabled
    };
    Chunk433517.K.set("OverlayStore6", module)
  }
  static load() {
    return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded
  }
  static serialize() {
    let e = this.load();
    return {
      legacyEnabled: module.legacyEnabled,
      oopEnabled: module.oopEnabled
    }
  }
  static fromSerialized(e) {
    let t = new s(e.legacyEnabled, e.oopEnabled);
    return t.save(), t
  }
  static loadInternal() {
    var e, t, n, o, a;
    let l = Chunk433517.K.get("OverlayStore");
    if (null != l) {
      let e = new s("boolean" == typeof l.enabled ? l.enabled : Chunk987650.iP, Chunk987650.iP);
      return module.save(), Chunk433517.K.remove("OverlayStore"), module
    }
    let c = Chunk433517.K.get("overlayEnabled");
    if (null != c) {
      let e = new s("boolean" == typeof c ? c : Chunk987650.iP, Chunk987650.iP);
      return module.save(), Chunk433517.K.remove("overlayEnabled"), module
    }
    let u = Chunk433517.K.get("OverlayStore3");
    if (null != u) {
      let t = new s(null != (e = u.enabled || u.legacyEnabled) ? module : Chunk987650.iP, Chunk987650.iP);
      return exports.save(), Chunk433517.K.remove("OverlayStore3"), exports
    }
    let d = Chunk433517.K.get("OverlayStore4");
    if (null != d) {
      let e = new s(d.legacyEnabled || Chunk987650.iP, null != (t = d.oopEnabled) ? exports : Chunk987650.iP);
      return module.save(), Chunk433517.K.remove("OverlayStore4"), module
    }
    let f = Chunk433517.K.get("OverlayStore5");
    if (null != f) {
      let e = new s(null != (n = f.legacyEnabled) ? require : Chunk987650.iP, f.oopEnabled || Chunk987650.iP);
      return module.save(), Chunk433517.K.remove("OverlayStore5"), module
    }
    let p = Chunk433517.K.get("OverlayStore6");
    if (null != p) return new s(null != (o = p.legacyEnabled) ? o : Chunk987650.iP, null != (a = p.oopEnabled) ? a : Chunk987650.iP);
    let _ = new s(Chunk987650.iP, Chunk987650.iP);
    return _.save(), _
  }
  constructor(e, t) {
    o(this, "legacyEnabled", true), o(this, "oopEnabled", true), this.legacyEnabled = e, this.oopEnabled = t
  }
}
o(s, "_loaded", null)