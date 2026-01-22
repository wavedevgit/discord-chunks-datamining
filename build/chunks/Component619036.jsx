/** Chunk was on 21738 **/
/** chunk id: 619036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk347481 = require("./347481.js"),
  Chunk430452 = require("./430452.js"),
  Chunk868162 = require("./868162.js"),
  Chunk731854 = require("./731854.js");
let d = new Set(["DisplayPort"]),
  p = "connected-device-modal";

function f() {
  let e;
  if ((0, a.kBI)(p)) return;
  let t = o.A.getInputDeviceId(),
    i = o.A.getOutputDeviceId();
  if (c.A.getState().neverShowModal || l().isEmpty(c.A.lastDeviceConnected)) return;
  let f = (0, c.x)(o.A.getInputDevices()[t]),
    h = (0, c.x)(o.A.getOutputDevices()[i]);
  if (l().some(c.A.lastDeviceConnected, e => d.has(e.displayName) || e.displayName === f || e.displayName === h)) return;
  let A = l().some(c.A.lastDeviceConnected, e => s.A.isCertified(c.A.inputDevices[e.displayName]) || s.A.isCertified(c.A.outputDevices[e.displayName]));
  if ((t === u.dx && c.A.lastInputSystemDevice.justChanged || i === u.dx && c.A.lastOutputSystemDevice.justChanged) && !A) return;
  let g = l().first(Object.keys(c.A.lastDeviceConnected)),
    m = null != g && "" !== g ? c.A.lastDeviceConnected[g] : null;
  null == m || c.A.getState().ignoredDevices[m.displayName] || (c.A.initialized && null != g && (s.A.isCertified(c.A.inputDevices[g]) ? e = s.A.getCertifiedDevice(c.A.inputDevices[g]) : s.A.isCertified(c.A.outputDevices[g]) && (e = s.A.getCertifiedDevice(c.A.outputDevices[g]))), (0, a.mMO)(async () => {
    let {
      default: t
    } = await n.e("68386").then(n.bind(n, 347961));
    return n => {
      let {
        transitionState: i,
        onClose: l
      } = n;
      return (0, r.jsx)(t, {
        device: m,
        certifiedDeviceMetadata: e,
        transitionState: i,
        onClose: l
      })
    }
  }, {
    modalKey: p
  }))
}
let h = {
  init() {
    c.A.addChangeListener(f)
  }
}