/** Chunk was on web.js **/
/** chunk id: 117549, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = require("./652215.js").K3c.AUTO;

function l(e) {
  s = e.mode
}
class c extends(r = Chunk311907.Ay.Store) {
  get mode() {
    return s
  }
}
o(c, "displayName", "VideoQualityModeStore");
let u = new c(Chunk73153.h, {
  SET_CHANNEL_VIDEO_QUALITY_MODE: l
})