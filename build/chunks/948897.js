/** Chunk was on web.js **/
/** chunk id: 948897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk998502 = require("./998502.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends Chunk147913.Z {
  constructor(...e) {
    super(...e), o(this, "ownedLocks", new Set), o(this, "acquireLock", e => {
      if (this.ownedLocks.has(e)) returntrue;
      let t = "discord-overlay-global-owner-lock-".concat(e);
      returnfalse !== i.ZP.AcquireGlobalLock(t) && (this.ownedLocks.add(e), true)
    })
  }
}
let s = new a