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
    let n = await (null == (t = s.Z.database()) || null == (e = t.fsInfo()) ? true : e.catch(e => c.warn("couldn't get fs info", e)));
    if (null != n) {
      let e = n.fs.available < 256 * u || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
        t = n.fs.available > 768 * u && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
        r = !!e || !t && null;
      null != r && this.isLowDisk !== r && (this.isLowDisk = r, this.emitChange())
    }
  }
  constructor() {
    super(i.Z, {
      APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), l(this, "isLowDisk", false), this.refresh(), this.waitFor(s.Z), setInterval(() => this.refresh(), d)
  }
}
let p = new f