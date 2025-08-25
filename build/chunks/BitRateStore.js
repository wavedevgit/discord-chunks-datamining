/** Chunk was on web.js **/
/** chunk id: 967368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = require("./65154.js").dX;

function l(e) {
  s = e.bitrate
}
class c extends(r = Chunk442837.ZP.Store) {
  get bitrate() {
    return s
  }
}
a(c, "displayName", "BitRateStore");
let u = new c(Chunk570140.Z, {
  SET_CHANNEL_BITRATE: l
})