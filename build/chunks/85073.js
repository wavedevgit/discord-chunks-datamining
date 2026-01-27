/** Chunk was on web.js **/
/** chunk id: 85073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => s
});
var Chunk424918 = require("./424918.js"),
  Chunk651162 = require("./651162.js"),
  Chunk624711 = require("./624711.js");

function o(e, t, n) {
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
    o(this, "subblocks", true), this.type = i.g.FEATURED, this.subblocks = e.subblocks.map(e => e.type === r.u.CATEGORY ? a.j.fromServer(e) : e)
  }
}