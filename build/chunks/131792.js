/** Chunk was on web.js **/
/** chunk id: 131792, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk81825 = require("./81825.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk81825.Z {
  constructor(e) {
    var t;
    super(), i(this, "id", true), i(this, "widgets", true), i(this, "version", true), this.version = null != (t = Number(e.version)) ? t : 0, this.id = e.id || "", this.widgets = e.widgets || []
  }
}