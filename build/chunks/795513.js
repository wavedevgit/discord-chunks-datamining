/** Chunk was on web.js **/
/** chunk id: 795513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk710845 = require("./710845.js"),
  Chunk287328 = require("./287328.js"),
  Chunk870078 = require("./870078.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Chunk710845.Z("KvCacheVersion");
class l {
  async okAsync(e) {
    let t = await i.Z.cache(e).get(o.aQ);
    return null == t ? null : t === o.Wj
  }
  canUseGuildVersions() {
    return this.hasSuccessfullyConnected ? Promise.resolve(true) : this.doesDatabaseVersionMatchJsConstants()
  }
  async doesDatabaseVersionMatchJsConstants() {
    let e = Chunk287328.Z.forceResyncVersion();
    if (null == module) returnfalse;
    let t = await module.get(Chunk870078.LH),
      n = null == exports ? true : exports.version;
    return require === Chunk870078.pL || (s.info("KVStore version mismatch: ".concat(require, " vs ").concat(Chunk870078.pL)), false)
  }
  handleClear() {
    this.hasSuccessfullyConnected = false
  }
  handleConnectionOpen() {
    this.hasSuccessfullyConnected = true
  }
  handleWrite(e) {
    this.hasSuccessfullyConnected = true, i.Z.cacheTransaction(e).put(o.DQ, "\uD83D\uDC4B"), i.Z.cacheTransaction(e).put(o.aQ, o.Wj), i.Z.forceResyncVersionTransaction(e).put(o.LH, {
      version: o.pL
    })
  }
  resetInMemoryState() {
    this.hasSuccessfullyConnected = false
  }
  constructor() {
    a(this, "hasSuccessfullyConnected", false), a(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      WRITE_CACHES: (e, t) => this.handleWrite(t)
    })
  }
}
let c = new l