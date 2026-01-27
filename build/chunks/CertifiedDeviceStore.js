/** Chunk was on web.js **/
/** chunk id: 347481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk731854 = require("./731854.js");

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
  m(t, n), s.w.set(d, f), _++
}
class E extends(r = Chunk311907.Ay.Store) {
  initialize() {
    let e = s.w.get(d);
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
    return h(e, false, e => e.type === c.oh.AUDIO_INPUT && e.hardwareMute)
  }
  hasEchoCancellation(e) {
    return h(e, false, e => e.type === c.oh.AUDIO_INPUT && e.echoCancellation)
  }
  hasNoiseSuppression(e) {
    return h(e, false, e => e.type === c.oh.AUDIO_INPUT && e.noiseSuppression)
  }
  hasAutomaticGainControl(e) {
    return h(e, false, e => e.type === c.oh.AUDIO_INPUT && e.automaticGainControl)
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
let y = new E(Chunk73153.h, {
  CERTIFIED_DEVICES_SET: g
})