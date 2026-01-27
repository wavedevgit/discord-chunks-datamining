/** Chunk was on web.js **/
/** chunk id: 753027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723176 = require("./723176.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = new Chunk626584.A("FileSystemStore"),
  u = 1048576,
  d = 10 * Chunk927813.A.Millis.MINUTE;
class f extends Chunk311907.Ay.Store {
  handlePostConnectionOpen() {
    return this.refresh(), false
  }
  handleAppStateUpdate(e) {
    return "active" !== e.state && this.refresh(), false
  }
  async refresh() {
    var e, t;
    let n = await (null == (t = s.A.database()) || null == (e = t.fsInfo()) ? true : e.catch(e => c.warn("couldn't get fs info", e)));
    if (null != n) {
      let e = n.fs.available < 256 * u || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
        t = n.fs.available > 768 * u && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
        r = !!e || !t && null;
      null != r && this.isLowDisk !== r && (this.isLowDisk = r, this.emitChange())
    }
  }
  constructor() {
    super(i.h, {
      APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), l(this, "isLowDisk", false), this.refresh(), this.waitFor(s.A), setInterval(() => this.refresh(), d)
  }
}
let p = new f