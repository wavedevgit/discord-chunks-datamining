/** Chunk was on web.js **/
/** chunk id: 763266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk837921 = require("./837921.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk439372.A {
  constructor(...e) {
    super(...e), a(this, "ownedLocks", new Set), a(this, "acquireLock", e => {
      if (this.ownedLocks.has(e)) returntrue;
      let t = "discord-overlay-global-owner-lock-".concat(e);
      returnfalse !== i.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), true)
    })
  }
}
let o = new s