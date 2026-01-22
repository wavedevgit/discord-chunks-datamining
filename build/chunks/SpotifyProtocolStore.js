/** Chunk was on web.js **/
/** chunk id: 210528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = false;

function l(e) {
  let {
    isRegistered: t
  } = e;
  o = t
}
class c extends(r = Chunk311907.Ay.Store) {
  isProtocolRegistered() {
    return o
  }
}
s(c, "displayName", "SpotifyProtocolStore");
let u = new c(Chunk73153.h, {
  SPOTIFY_SET_PROTOCOL_REGISTERED: l
})