/** Chunk was on web.js **/
/** chunk id: 18323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = false;

function l(e) {
  let {
    isRegistered: t
  } = e;
  s = t
}
class c extends(r = Chunk442837.ZP.Store) {
  isProtocolRegistered() {
    return s
  }
}
o(c, "displayName", "SpotifyProtocolStore");
let u = new c(Chunk570140.Z, {
  SPOTIFY_SET_PROTOCOL_REGISTERED: l
})