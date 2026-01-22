/** Chunk was on web.js **/
/** chunk id: 157257, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => p
});
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk15285 = require("./15285.js"),
  Chunk760751 = require("./760751.js");

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
class f extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A, o.Ay)
  }
  getGameForPID(e) {
    if (__OVERLAY__ || null == e) return null;
    let t = o.Ay.getGameOrTransformedSubgameForPID(e);
    return l.A.getGameByName(null == t ? true : t.name)
  }
  getGame() {
    return r
  }
}
c(f, "displayName", "OverlayRunningGameStore");
let p = new f(Chunk73153.h, {
  OVERLAY_INITIALIZE: u,
  OVERLAY_SET_ASSOCIATED_GAME: d
})