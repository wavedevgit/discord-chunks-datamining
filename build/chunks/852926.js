/** Chunk was on 1272 **/
/** chunk id: 852926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GC: () => _,
  _X: () => b,
  br: () => f,
  em: () => m,
  jU: () => g
});
var Chunk13245 = require("./13245.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk998502 = require("./998502.js"),
  Chunk13140 = require("./13140.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let h = ["207646673902501888"];

function f(e) {
  return null != e && l.default.isOverlayOOPEnabledForPid(e) && a.ZP.isReady(e) && a.ZP.getOverlayState(e) === i.mM.OVERLAY_RENDERING
}

function g(e) {
  return null == e ? {
    lock: p.VqG,
    context: p.IlC.APP
  } : f(e) ? (r.Z.setInputLocked(false, e), {
    lock() {
      r.Z.setInputLocked(true, e)
    },
    context: p.IlC.POPOUT
  }) : (o.ZP.focus(null, true), {
    lock() {
      o.ZP.setForegroundProcess(e)
    },
    context: p.IlC.APP
  })
}
let m = async (e, t, n) => {
  if ((0, u.YK)(e, t), (null == n || "" === n) && (0, u.s9)(t)) return e.authorization.scopes = [d.cE, d.CN], Promise.resolve();
  if (null == n || "" === n) return Promise.reject(new c.Z({
    closeCode: p.$VG.INVALID_CLIENTID
  }, "No Client ID Specified"));
  let r = o.ZP.releaseChannel !== p.R5N.CANARY && !h.includes(n) && e.transport !== d.He.POST_MESSAGE;
  return await (0, u.vv)(n, r), (0, u.YS)(e, n, t)
}, b = () => (0, Chunk914946.tr)(e => {
  let t = [];
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = e.modeOptions.shortcut.map(e => {
    var t;
    return {
      type: e[0],
      code: e[1],
      name: null != (t = (0, s.H9)(e)) ? t : "unknown"
    }
  })), t
}), _ = e => (0, u.FJ)(e, e => {
  let t = "";
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, s.BB)(e.modeOptions.shortcut)), t
})