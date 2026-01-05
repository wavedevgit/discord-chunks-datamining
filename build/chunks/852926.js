/** Chunk was on 1272 **/
/** chunk id: 852926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GC: () => b,
  _X: () => m,
  br: () => f,
  em: () => h,
  jU: () => g
});
var Chunk13245 = require("./13245.js"),
  Chunk371651 = require("./371651.js"),
  Chunk610394 = require("./610394.js"),
  Chunk998502 = require("./998502.js"),
  Chunk13140 = require("./13140.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let p = ["207646673902501888"];

function f(e) {
  return null != e && !!i.default.isOverlayOOPEnabledForPid(e) && l.Z.isReady(e)
}

function g(e) {
  return null == e ? {
    lock: d.VqG,
    context: d.IlC.APP
  } : f(e) ? (r.Z.setInputLocked(false, e), {
    lock() {
      r.Z.setInputLocked(true, e)
    },
    context: d.IlC.POPOUT
  }) : (a.ZP.focus(null, true), {
    lock() {
      a.ZP.setForegroundProcess(e)
    },
    context: d.IlC.APP
  })
}
let h = async (e, t, n) => {
  if ((0, c.YK)(e, t), (null == n || "" === n) && (0, c.s9)(t)) return e.authorization.scopes = [u.cE, u.CN], Promise.resolve();
  if (null == n || "" === n) return Promise.reject(new s.Z({
    closeCode: d.$VG.INVALID_CLIENTID
  }, "No Client ID Specified"));
  let r = a.ZP.releaseChannel !== d.R5N.CANARY && !p.includes(n) && e.transport !== u.He.POST_MESSAGE;
  return await (0, c.vv)(n, r), (0, c.YS)(e, n, t)
}, m = () => (0, Chunk914946.tr)(e => {
  let t = [];
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = e.modeOptions.shortcut.map(e => {
    var t;
    return {
      type: e[0],
      code: e[1],
      name: null != (t = (0, o.H9)(e)) ? t : "unknown"
    }
  })), t
}), b = e => (0, c.FJ)(e, e => {
  let t = "";
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, o.BB)(e.modeOptions.shortcut)), t
})