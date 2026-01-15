/** Chunk was on web.js **/
/** chunk id: 463395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk65154 = require("./65154.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = "CertifiedDeviceStore",
  f = {},
  p = {},
  _ = 0;

function h(e, t, n) {
  let r = p[e];
  return null != r ? n(r) : t
}

function m(e, t) {
  let n = f[e];
  null != n && n.forEach(e => delete p[e.id]), f[e] = t, t.forEach(e => p[e.id] = e)
}

function g(e) {
  let {
    applicationId: t,
    devices: n
  } = e;
  m(t, n), s.K.set(d, f), _++
}
class E extends(r = Chunk442837.ZP.Store) {
  initialize() {
    let e = s.K.get(d);
    null != e && a().forEach(e, (e, t) => {
      e.forEach(e => {
        "audioinput" === e.type && e.hardwareMute && (e.hardwareMute = false)
      }), m(t, e)
    })
  }
  isCertified(e) {
    return null != p[e]
  }
  getCertifiedDevice(e) {
    return p[e]
  }
  getCertifiedDeviceName(e, t) {
    let n = this.getCertifiedDevice(e);
    return null != n ? "".concat(n.vendor.name, " ").concat(n.model.name) : t
  }
  getCertifiedDeviceByType(e) {
    return a().find(p, t => t.type === e)
  }
  isHardwareMute(e) {
    return h(e, false, e => e.type === c.h7.AUDIO_INPUT && e.hardwareMute)
  }
  hasEchoCancellation(e) {
    return h(e, false, e => e.type === c.h7.AUDIO_INPUT && e.echoCancellation)
  }
  hasNoiseSuppression(e) {
    return h(e, false, e => e.type === c.h7.AUDIO_INPUT && e.noiseSuppression)
  }
  hasAutomaticGainControl(e) {
    return h(e, false, e => e.type === c.h7.AUDIO_INPUT && e.automaticGainControl)
  }
  getVendor(e) {
    return h(e, null, e => e.vendor)
  }
  getModel(e) {
    return h(e, null, e => e.model)
  }
  getRevision() {
    return _
  }
}
u(E, "displayName", "CertifiedDeviceStore");
let b = new E(Chunk570140.Z, {
  CERTIFIED_DEVICES_SET: g
})