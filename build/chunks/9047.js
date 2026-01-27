/** Chunk was on web.js **/
/** chunk id: 9047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  c: () => a
});
var Chunk985018 = require("./985018.jsx");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var a = function(e) {
  return e[e.GENERAL = 0] = "GENERAL", e[e.NO_FILE = 1] = "NO_FILE", e[e.PROGRESS = 2] = "PROGRESS", e[e.UPLOAD = 3] = "UPLOAD", e[e.READ = 4] = "READ", e
}({});
class o {
  get displayMessage() {
    switch (this.code) {
      case 1:
        return r.intl.string(r.t.dDMp2Z);
      case 2:
        return r.intl.string(r.t.XBxyvo);
      case 3:
        return r.intl.string(r.t["6b6rwk"]);
      case 4:
        return r.intl.string(r.t.VUc3ti);
      default:
        return r.intl.string(r.t.VzHcSm)
    }
  }
  constructor(e) {
    i(this, "code", true), this.code = e
  }
}
let s = o