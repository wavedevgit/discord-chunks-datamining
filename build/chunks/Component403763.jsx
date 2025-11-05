/** Chunk was on 1272 **/
/** chunk id: 403763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  if ((0, Chunk481060.nfh)(p)) return;
  let t = Chunk131951.Z.getInputDeviceId(),
    i = Chunk131951.Z.getOutputDeviceId();
  if (Chunk34828.Z.getState().neverShowModal || l().isEmpty(Chunk34828.Z.lastDeviceConnected)) return;
  let f = (0, Chunk34828.X)(Chunk131951.Z.getInputDevices()[exports]),
    h = (0, Chunk34828.X)(Chunk131951.Z.getOutputDevices()[Chunk392711]);
  if (l().some(Chunk34828.Z.lastDeviceConnected, e => d.has(e.displayName) || e.displayName === f || e.displayName === h)) return;
  let g = l().some(Chunk34828.Z.lastDeviceConnected, e => s.Z.isCertified(c.Z.inputDevices[e.displayName]) || s.Z.isCertified(c.Z.outputDevices[e.displayName]));
  if ((exports === Chunk65154.w5 && Chunk34828.Z.lastInputSystemDevice.justChanged || Chunk392711 === Chunk65154.w5 && Chunk34828.Z.lastOutputSystemDevice.justChanged) && !g) return;
  let m = l().first(Object.keys(Chunk34828.Z.lastDeviceConnected)),
    _ = null != m && "" !== m ? Chunk34828.Z.lastDeviceConnected[m] : null;
  null != _ && (Chunk34828.Z.getState().ignoredDevices[_.displayName] || (Chunk34828.Z.initialized && null != m && (Chunk463395.Z.isCertified(Chunk34828.Z.inputDevices[m]) ? e = Chunk463395.Z.getCertifiedDevice(Chunk34828.Z.inputDevices[m]) : Chunk463395.Z.isCertified(Chunk34828.Z.outputDevices[m]) && (e = Chunk463395.Z.getCertifiedDevice(Chunk34828.Z.outputDevices[m]))), (0, Chunk481060.ZDy)(async () => {
    let {
      default: t
    } = await require.e("30042").then(require.bind(require, 30575));
    return n => {
      let {
        transitionState: i,
        onClose: l
      } = n;
      return (0, r.jsx)(t, {
        device: _,
        certifiedDeviceMetadata: e,
        transitionState: i,
        onClose: l
      })
    }
  }, {
    modalKey: p
  })))
}
let h = {
  init() {
    Chunk34828.Z.addChangeListener(f)
  }
}