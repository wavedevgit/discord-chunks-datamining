/** Chunk was on web.js **/
/** chunk id: 998701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  c: () => o
});
var Chunk388032 = require("./388032.jsx");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var o = function(e) {
  return e[e.GENERAL = 0] = "GENERAL", e[e.NO_FILE = 1] = "NO_FILE", e[e.PROGRESS = 2] = "PROGRESS", e[e.UPLOAD = 3] = "UPLOAD", e[e.READ = 4] = "READ", e
}({});
class a {
  get displayMessage() {
    switch (this.code) {
      case 1:
        return Chunk388032.intl.string(Chunk388032.t.dDMp2Z);
      case 2:
        return Chunk388032.intl.string(Chunk388032.t.XBxyvo);
      case 3:
        return Chunk388032.intl.string(Chunk388032.t["6b6rwk"]);
      case 4:
        return Chunk388032.intl.string(Chunk388032.t.VUc3ti);
      default:
        return Chunk388032.intl.string(Chunk388032.t.VzHcSm)
    }
  }
  constructor(e) {
    i(this, "code", true), this.code = e
  }
}
let s = a