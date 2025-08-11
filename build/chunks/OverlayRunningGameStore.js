/** Chunk was on web.js **/
/** chunk id: 449224, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => _
});
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk77498 = require("./77498.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  r = e.currentGame
}

function d(e) {
  r = e.associatedGame
}
class f extends(i = Chunk442837.ZP.Store) {
  getGameForPID(e) {
    var t;
    if (__OVERLAY__ || null == e) return null;
    let n = null == (t = s.ZP.getGameForPID(e)) ? true : t.name;
    return l.Z.getGameByName(n)
  }
  getGame() {
    return r
  }
}
c(f, "displayName", "OverlayRunningGameStore");
let _ = new f(Chunk570140.Z, {
  OVERLAY_INITIALIZE: u,
  OVERLAY_SET_ASSOCIATED_GAME: d
})