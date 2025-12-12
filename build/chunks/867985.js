/** Chunk was on web.js **/
/** chunk id: 867985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./415506.js");
var Chunk384136 = require("./384136.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  async acquire(e, t) {
    let n = await r.Z.get(e, t, this);
    return this.pool[n.id] = n, n
  }
  get(e) {
    let t = this.pool[e];
    return delete this.pool[e], t
  }
  release(e) {
    if (e.pool !== this) throw Error("DesktopInputPool: Input not from this pool");
    this.pool[e.id] = e
  }
  constructor() {
    i(this, "pool", {})
  }
}