/** Chunk was on web.js **/
/** chunk id: 368321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk70956 = require("./70956.js"),
  Chunk287328 = require("./287328.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk710845.Z("FileSystemStore"),
  u = 1048576,
  d = 10 * Chunk70956.Z.Millis.MINUTE;
class f extends Chunk442837.ZP.Store {
  handlePostConnectionOpen() {
    return this.refresh(), false
  }
  handleAppStateUpdate(e) {
    return "active" !== e.state && this.refresh(), false
  }
  async refresh() {
    var e, t;
    let n = await (null == (t = Chunk287328.Z.database()) || null == (e = exports.fsInfo()) ? true : module.catch(e => c.warn("couldn't get fs info", e)));
    if (null != require) {
      let e = require.fs.available < 256 * u || require.fs.available < 3 * require.database.used || require.fs.available < 2 * require.database.total,
        t = require.fs.available > 768 * u && require.fs.available > 4 * require.database.used && require.fs.available > 4 * require.database.total,
        r = !!module || !exports && null;
      null != Chunk442837 && this.isLowDisk !== Chunk442837 && (this.isLowDisk = Chunk442837, this.emitChange())
    }
  }
  constructor() {
    super(Chunk570140.Z, {
      APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), l(this, "isLowDisk", false), this.refresh(), this.waitFor(Chunk287328.Z), setInterval(() => this.refresh(), d)
  }
}
let p = new f