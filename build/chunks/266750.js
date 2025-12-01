/** Chunk was on web.js **/
/** chunk id: 266750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./467055.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk768433 = require("./768433.js"),
  Chunk710845 = require("./710845.js"),
  Chunk914010 = require("./914010.js"),
  Chunk70956 = require("./70956.js"),
  Chunk287328 = require("./287328.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk710845.Z("NonGuildVersions");
class f {
  async getCommittedVersions() {
    try {
      let e = Chunk287328.Z.nonGuildVersions();
      if (null == module) return {};
      let t = (await module.getMany()).map(e => [e.id, "version" in e ? e.version : e.versionString]);
      return Object.fromEntries(null != exports ? exports : [])
    } catch (e) {
      return d.warn("couldn't load guild versions", module), {}
    }
  }
  handleConnectionOpen(e, t) {
    null != e.apiCodeVersion && c.Z.nonGuildVersionsTransaction(t).put({
      id: "api_code_version",
      version: e.apiCodeVersion
    })
  }
  resetInMemoryState() {}
  constructor() {
    if (u(this, "actions", {
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t)
      }), !(0, Chunk768433.O)()) return;
    Chunk914010.Z.addChangeListener(i().throttle(() => {
      var e;
      null == (e = Chunk287328.Z.database()) || module.transaction(e => {
        let t = s.Z.getGuildId();
        null == t || isNaN(Number(t)) ? c.Z.nonGuildVersionsTransaction(e).delete("initial_guild_id") : c.Z.nonGuildVersionsTransaction(e).put({
          id: "initial_guild_id",
          versionString: t
        })
      })
    }, 10 * Chunk70956.Z.Millis.SECOND))
  }
}
let p = new f