/** Chunk was on web.js **/
/** chunk id: 325639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => d
}), require("./65821.js");
var Chunk954571 = require("./954571.js"),
  Chunk988276 = require("./988276.js"),
  Chunk277682 = require("./277682.js"),
  Chunk765682 = require("./765682.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
class d {
  async requestAuthorization(e, t, n) {
    if ("function" != typeof t) throw Error("requestAuthorization: Was provided with not a function for ".concat(e, "."));
    r.default.track(o.HAw.PERMISSIONS_REQUESTED, {
      type: e
    });
    let a = await t(),
      l = a === s.F5.AUTHORIZED || a === s.F5.LIMITED,
      c = l ? s.hL.ACCEPTED : s.hL.DENIED;
    return i.A.setPermission(e, c), !l && n.showAuthorizationError && this.showAlert(e), l
  }
  requestPermission(e, t) {
    let n = d.defaultNativePermissionsRequestOptions(t);
    return this.requestPermissionCore(e, n)
  }
  hasPermission(e, t) {
    let n = d.defaultNativePermissionsRequestOptions(t);
    return this.hasPermissionCore(e, n)
  }
  showAlert(e) {
    let t = {
      [s.iL.CAMERA]: "".concat(l.intl.string(l.t["68G7fD"]), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [s.iL.AUDIO]: "".concat(l.intl.string(l.t.xisTfe), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [s.iL.PHOTOS]: "".concat(l.intl.string(l.t.jQHU4M), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [s.iL.INPUT_MONITORING]: "".concat(l.intl.string(l.t.UIBqsS), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [s.iL.CONTACTS]: "".concat(l.intl.string(l.t.kTtf7o), ". ").concat(l.intl.string(l.t["5Jvu1R"]))
    } [e];
    null != t && this.openAlertModal({
      title: l.intl.string(l.t.u1Gxpu),
      body: t,
      onConfirm: () => this.openSettings(e),
      cancelText: l.intl.string(l.t["ETE/oC"]),
      confirmText: l.intl.string(l.t["XgZk+u"])
    })
  }
  static defaultNativePermissionsRequestOptions(e) {
    let t = {
      showAuthorizationError: true
    };
    return null == e ? t : u({}, t, e)
  }
  constructor() {
    c(this, "storage", new a.A)
  }
}