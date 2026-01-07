/** Chunk was on web.js **/
/** chunk id: 795513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk710845 = require("./710845.js"),
  Chunk287328 = require("./287328.js"),
  Chunk870078 = require("./870078.js");

function o(e, t, n) {
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
    let t = await i.Z.cache(e).get(a.aQ);
    return null == t ? null : t === a.Wj
  }
  canUseGuildVersions() {
    return this.hasSuccessfullyConnected ? Promise.resolve(true) : this.doesDatabaseVersionMatchJsConstants()
  }
  async doesDatabaseVersionMatchJsConstants() {
    let e = i.Z.forceResyncVersion();
    if (null == e) returnfalse;
    let t = await e.get(a.LH),
      n = null == t ? true : t.version;
    return n === a.pL || (s.info("KVStore version mismatch: ".concat(n, " vs ").concat(a.pL)), false)
  }
  handleClear() {
    this.hasSuccessfullyConnected = false
  }
  handleConnectionOpen() {
    this.hasSuccessfullyConnected = true
  }
  handleWrite(e) {
    this.hasSuccessfullyConnected = true, i.Z.cacheTransaction(e).put(a.DQ, "\uD83D\uDC4B"), i.Z.cacheTransaction(e).put(a.aQ, a.Wj), i.Z.forceResyncVersionTransaction(e).put(a.LH, {
      version: a.pL
    })
  }
  resetInMemoryState() {
    this.hasSuccessfullyConnected = false
  }
  constructor() {
    o(this, "hasSuccessfullyConnected", false), o(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      WRITE_CACHES: (e, t) => this.handleWrite(t)
    })
  }
}
let c = new l