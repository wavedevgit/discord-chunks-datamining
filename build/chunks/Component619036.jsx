/** Chunk was on 21738 **/
/** chunk id: 619036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function h() {
  let e;
  if ((0, a.kBI)(p)) return;
  let t = o.A.getInputDeviceId(),
    i = o.A.getOutputDeviceId();
  if (c.A.getState().neverShowModal || l().isEmpty(c.A.lastDeviceConnected)) return;
  let h = (0, c.x)(o.A.getInputDevices()[t]),
    g = (0, c.x)(o.A.getOutputDevices()[i]);
  if (l().some(c.A.lastDeviceConnected, e => d.has(e.displayName) || e.displayName === h || e.displayName === g)) return;
  let f = l().some(c.A.lastDeviceConnected, e => s.A.isCertified(c.A.inputDevices[e.displayName]) || s.A.isCertified(c.A.outputDevices[e.displayName]));
  if ((t === u.dx && c.A.lastInputSystemDevice.justChanged || i === u.dx && c.A.lastOutputSystemDevice.justChanged) && !f) return;
  let m = l().first(Object.keys(c.A.lastDeviceConnected)),
    A = null != m && "" !== m ? c.A.lastDeviceConnected[m] : null;
  null == A || c.A.getState().ignoredDevices[A.displayName] || (c.A.initialized && null != m && (s.A.isCertified(c.A.inputDevices[m]) ? e = s.A.getCertifiedDevice(c.A.inputDevices[m]) : s.A.isCertified(c.A.outputDevices[m]) && (e = s.A.getCertifiedDevice(c.A.outputDevices[m]))), (0, a.mMO)(async () => {
    let {
      default: t
    } = await n.e("68386").then(n.bind(n, 347961));
    return n => {
      let {
        transitionState: i,
        onClose: l
      } = n;
      return (0, r.jsx)(t, {
        device: A,
        certifiedDeviceMetadata: e,
        transitionState: i,
        onClose: l
      })
    }
  }, {
    modalKey: p
  }))
}
let g = {
  init() {
    c.A.addChangeListener(h)
  }
}