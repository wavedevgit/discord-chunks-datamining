/** Chunk was on web.js **/
/** chunk id: 584597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
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
class a extends Chunk81825.Z {
  static createFromServer(e) {
    return new a(e)
  }
  constructor(e) {
    super(), i(this, "id", true), i(this, "name", true), this.id = e.id, this.name = e.name
  }
}