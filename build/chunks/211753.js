/** Chunk was on web.js **/
/** chunk id: 211753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => s
}), require("./896048.js");
var Chunk506774 = require("./506774.js"),
  Chunk672396 = require("./672396.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var o = function(e) {
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
    for (let e of Object.values(o)) r.w.remove(e);
    this._loaded = null
  }
  static DEV_saveSettingsForVersion(e) {
    for (let [t, n] of Object.entries(e)) r.w.set(t, n);
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
    r.w.set("OverlayStore6", e)
  }
  static load() {
    return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded
  }
  static serialize() {
    let e = this.load();
    return {
      legacyEnabled: e.legacyEnabled,
      oopEnabled: e.oopEnabled
    }
  }
  static fromSerialized(e) {
    let t = new s(e.legacyEnabled, e.oopEnabled);
    return t.save(), t
  }
  static loadInternal() {
    var e, t, n, a, o;
    let l = r.w.get("OverlayStore");
    if (null != l) {
      let e = new s("boolean" == typeof l.enabled ? l.enabled : i.OX, i.OX);
      return e.save(), r.w.remove("OverlayStore"), e
    }
    let c = r.w.get("overlayEnabled");
    if (null != c) {
      let e = new s("boolean" == typeof c ? c : i.OX, i.OX);
      return e.save(), r.w.remove("overlayEnabled"), e
    }
    let u = r.w.get("OverlayStore3");
    if (null != u) {
      let t = new s(null != (e = u.enabled || u.legacyEnabled) ? e : i.OX, i.OX);
      return t.save(), r.w.remove("OverlayStore3"), t
    }
    let d = r.w.get("OverlayStore4");
    if (null != d) {
      let e = new s(d.legacyEnabled || i.OX, null != (t = d.oopEnabled) ? t : i.OX);
      return e.save(), r.w.remove("OverlayStore4"), e
    }
    let f = r.w.get("OverlayStore5");
    if (null != f) {
      let e = new s(null != (n = f.legacyEnabled) ? n : i.OX, f.oopEnabled || i.OX);
      return e.save(), r.w.remove("OverlayStore5"), e
    }
    let p = r.w.get("OverlayStore6");
    if (null != p) return new s(null != (a = p.legacyEnabled) ? a : i.OX, null != (o = p.oopEnabled) ? o : i.OX);
    let _ = new s(i.OX, i.OX);
    return _.save(), _
  }
  constructor(e, t) {
    a(this, "legacyEnabled", true), a(this, "oopEnabled", true), this.legacyEnabled = e, this.oopEnabled = t
  }
}
a(s, "_loaded", null)