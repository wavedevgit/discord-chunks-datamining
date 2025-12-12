/** Chunk was on web.js **/
/** chunk id: 58406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => d
}), require("./415506.js");
var Chunk626135 = require("./626135.js"),
  Chunk823967 = require("./823967.js"),
  Chunk281058 = require("./281058.js"),
  Chunk761274 = require("./761274.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
    r.default.track(s.rMx.PERMISSIONS_REQUESTED, {
      type: e
    });
    let o = await t(),
      l = o === a.NZ.AUTHORIZED || o === a.NZ.LIMITED,
      c = l ? a.PQ.ACCEPTED : a.PQ.DENIED;
    return i.Z.setPermission(e, c), !l && n.showAuthorizationError && this.showAlert(e), l
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
      [a.Eu.CAMERA]: "".concat(l.intl.string(l.t["68G7fD"]), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [a.Eu.AUDIO]: "".concat(l.intl.string(l.t.xisTfe), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [a.Eu.PHOTOS]: "".concat(l.intl.string(l.t.jQHU4M), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [a.Eu.INPUT_MONITORING]: "".concat(l.intl.string(l.t.UIBqsS), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
      [a.Eu.CONTACTS]: "".concat(l.intl.string(l.t.kTtf7o), ". ").concat(l.intl.string(l.t["5Jvu1R"]))
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
    c(this, "storage", new Chunk281058.Z)
  }
}