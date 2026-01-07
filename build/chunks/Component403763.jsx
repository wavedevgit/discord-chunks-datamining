/** Chunk was on 1272 **/
/** chunk id: 403763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk463395 = require("./463395.js"),
  Chunk131951 = require("./131951.js"),
  Chunk34828 = require("./34828.js"),
  Chunk65154 = require("./65154.js");
let d = new Set(["DisplayPort"]),
  p = "connected-device-modal";

function f() {
  let e;
  if ((0, a.nfh)(p)) return;
  let t = s.Z.getInputDeviceId(),
    i = s.Z.getOutputDeviceId();
  if (c.Z.getState().neverShowModal || l().isEmpty(c.Z.lastDeviceConnected)) return;
  let f = (0, c.X)(s.Z.getInputDevices()[t]),
    g = (0, c.X)(s.Z.getOutputDevices()[i]);
  if (l().some(c.Z.lastDeviceConnected, e => d.has(e.displayName) || e.displayName === f || e.displayName === g)) return;
  let m = l().some(c.Z.lastDeviceConnected, e => o.Z.isCertified(c.Z.inputDevices[e.displayName]) || o.Z.isCertified(c.Z.outputDevices[e.displayName]));
  if ((t === u.w5 && c.Z.lastInputSystemDevice.justChanged || i === u.w5 && c.Z.lastOutputSystemDevice.justChanged) && !m) return;
  let h = l().first(Object.keys(c.Z.lastDeviceConnected)),
    b = null != h && "" !== h ? c.Z.lastDeviceConnected[h] : null;
  null != b && (c.Z.getState().ignoredDevices[b.displayName] || (c.Z.initialized && null != h && (o.Z.isCertified(c.Z.inputDevices[h]) ? e = o.Z.getCertifiedDevice(c.Z.inputDevices[h]) : o.Z.isCertified(c.Z.outputDevices[h]) && (e = o.Z.getCertifiedDevice(c.Z.outputDevices[h]))), (0, a.ZDy)(async () => {
    let {
      default: t
    } = await n.e("30042").then(n.bind(n, 30575));
    return n => {
      let {
        transitionState: i,
        onClose: l
      } = n;
      return (0, r.jsx)(t, {
        device: b,
        certifiedDeviceMetadata: e,
        transitionState: i,
        onClose: l
      })
    }
  }, {
    modalKey: p
  })))
}
let g = {
  init() {
    c.Z.addChangeListener(f)
  }
}