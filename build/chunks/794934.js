/** Chunk was on web.js **/
/** chunk id: 794934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => s
});
var Chunk87290 = require("./87290.js"),
  Chunk685816 = require("./685816.js"),
  Chunk565669 = require("./565669.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s {
  static fromServer(e) {
    return new s(e)
  }
  constructor(e) {
    a(this, "subblocks", true), this.type = i.z.FEATURED, this.subblocks = e.subblocks.map(e => e.type === r.O.CATEGORY ? o.H.fromServer(e) : e)
  }
}