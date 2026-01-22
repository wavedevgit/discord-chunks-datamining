/** Chunk was on web.js **/
/** chunk id: 674378, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tr: () => d,
  XZ: () => _,
  gW: () => o,
  kv: () => c,
  r0: () => l,
  uA: () => u,
  z0: () => f,
  zY: () => p
}), require("./896048.js"), require("./747238.js");
var Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk67480 = require("./67480.js"),
  Chunk652215 = require("./652215.js");

function o(e, t) {
  return "".concat(e, ":").concat(t)
}

function l(e) {
  let [t, n] = e.split(":");
  return {
    applicationId: t,
    branchId: n
  }
}

function c(e, t) {
  if (!r.tz.getSetting() || r.jP.getSetting() === s.clD.INVISIBLE) returnfalse;
  let n = t.getActiveLibraryApplication(e);
  return null == n || !n.hasFlag(s.hM6.PRIVATE)
}

function u(e, t) {
  return 0 === t ? 100 : e / t * 100
}

function d(e, t, n) {
  return !(null == t || n.enabled && t.hasFlag(s.hM6.PRIVATE)) && !t.isHidden()
}

function f(e) {
  return null == e ? null : e.type === s.WTw.INSTALLING || e.type === s.WTw.UPDATING || e.type === s.WTw.UNINSTALLING ? e : null
}

function p(e) {
  return e.reduce((e, t) => {
    let n = f(t);
    return null == n || t.type === s.WTw.UP_TO_DATE ? e : {
      total: e.total + Number(n.total),
      progress: e.progress + Number(n.progress)
    }
  }, {
    total: 0,
    progress: 0
  })
}

function _(e) {
  return !!e.isDiscordApplication() && e.isEntitled(i.default.getCurrentUser(), a.A)
}