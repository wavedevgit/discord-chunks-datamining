/** Chunk was on web.js **/
/** chunk id: 214771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./446912.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk937724 = require("./937724.js"),
  Chunk626584 = require("./626584.js"),
  Chunk967198 = require("./967198.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723176 = require("./723176.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk626584.A("NonGuildVersions");
class f {
  async getCommittedVersions() {
    try {
      let e = c.A.nonGuildVersions();
      if (null == e) return {};
      let t = (await e.getMany()).map(e => [e.id, "version" in e ? e.version : e.versionString]);
      return Object.fromEntries(null != t ? t : [])
    } catch (e) {
      return d.warn("couldn't load guild versions", e), {}
    }
  }
  handleConnectionOpen(e, t) {
    null != e.apiCodeVersion && c.A.nonGuildVersionsTransaction(t).put({
      id: "api_code_version",
      version: e.apiCodeVersion
    })
  }
  resetInMemoryState() {}
  constructor() {
    if (u(this, "actions", {
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t)
      }), !(0, a.O)()) return;
    o.A.addChangeListener(i().throttle(() => {
      var e;
      null == (e = c.A.database()) || e.transaction(e => {
        let t = o.A.getGuildId();
        null == t || isNaN(Number(t)) ? c.A.nonGuildVersionsTransaction(e).delete("initial_guild_id") : c.A.nonGuildVersionsTransaction(e).put({
          id: "initial_guild_id",
          versionString: t
        })
      })
    }, 10 * l.A.Millis.SECOND))
  }
}
let p = new f