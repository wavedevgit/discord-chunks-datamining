/** Chunk was on web.js **/
/** chunk id: 247872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./65821.js");
var Chunk340619 = require("./340619.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  async acquire(e, t) {
    let n = await r.A.get(e, t, this);
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