/** Chunk was on web.js **/
/** chunk id: 324827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk626584 = require("./626584.js"),
  Chunk723176 = require("./723176.js"),
  Chunk194188 = require("./194188.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = new Chunk626584.A("KvCacheVersion");
class l {
  async okAsync(e) {
    let t = await i.A.cache(e).get(a.WL);
    return null == t ? null : 3 === t
  }
  canUseGuildVersions() {
    return this.hasSuccessfullyConnected ? Promise.resolve(true) : this.doesDatabaseVersionMatchJsConstants()
  }
  async doesDatabaseVersionMatchJsConstants() {
    let e = i.A.forceResyncVersion();
    if (null == e) returnfalse;
    let t = await e.get(a.pE),
      n = null == t ? true : t.version;
    return n === a.NI || (o.info("KVStore version mismatch: ".concat(n, " vs ").concat(a.NI)), false)
  }
  handleClear() {
    this.hasSuccessfullyConnected = false
  }
  handleConnectionOpen() {
    this.hasSuccessfullyConnected = true
  }
  handleWrite(e) {
    this.hasSuccessfullyConnected = true, i.A.cacheTransaction(e).put("hello", "\uD83D\uDC4B"), i.A.cacheTransaction(e).put(a.WL, 3), i.A.forceResyncVersionTransaction(e).put(a.pE, {
      version: a.NI
    })
  }
  resetInMemoryState() {
    this.hasSuccessfullyConnected = false
  }
  constructor() {
    s(this, "hasSuccessfullyConnected", false), s(this, "actions", {
      BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
      CONNECTION_OPEN: () => this.handleConnectionOpen(),
      WRITE_CACHES: (e, t) => this.handleWrite(t)
    })
  }
}
let c = new l