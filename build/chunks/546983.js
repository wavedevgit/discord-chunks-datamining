/** Chunk was on 21738 **/
/** chunk id: 546983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Au: () => m,
  d5: () => h,
  j7: () => A,
  kS: () => f,
  l6: () => g
});
var Chunk684013 = require("./684013.js"),
  Chunk833551 = require("./833551.js"),
  Chunk395011 = require("./395011.js"),
  Chunk837921 = require("./837921.js"),
  Chunk350535 = require("./350535.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let p = ["207646673902501888"];

function f(e) {
  return null != e && !!i.default.isOverlayOOPEnabledForPid(e) && l.A.isReady(e)
}

function h(e) {
  return null == e ? {
    lock: d.FXj,
    context: d.BRT.APP
  } : f(e) ? (r.A.setInputLocked(false, e), {
    lock() {
      r.A.setInputLocked(true, e)
    },
    context: d.BRT.POPOUT
  }) : (a.Ay.focus(null, true), {
    lock() {
      a.Ay.setForegroundProcess(e)
    },
    context: d.BRT.APP
  })
}
let A = async (e, t, n) => {
  if ((0, c.sq)(e, t), (null == n || "" === n) && (0, c.IR)(t)) return e.authorization.scopes = [u.LQ, u.kw], Promise.resolve();
  if (null == n || "" === n) return Promise.reject(new o.A({
    closeCode: d.YI$.INVALID_CLIENTID
  }, "No Client ID Specified"));
  let r = a.Ay.releaseChannel !== d.BIo.CANARY && !p.includes(n) && e.transport !== u.z4.POST_MESSAGE;
  return await (0, c.e2)(n, r), (0, c.uM)(e, n, t)
}, g = () => (0, c.BB)(e => {
  let t = [];
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = e.modeOptions.shortcut.map(e => {
    var t;
    return {
      type: e[0],
      code: e[1],
      name: null != (t = (0, s.Qd)(e)) ? t : "unknown"
    }
  })), t
}), m = e => (0, c.Ub)(e, e => {
  let t = "";
  return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, s.dI)(e.modeOptions.shortcut)), t
})