/** Chunk was on web.js **/
/** chunk id: 925948, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./638769.js"), require("./264879.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk626584 = require("./626584.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk661191 = require("./661191.js"),
  Chunk723176 = require("./723176.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk626584.A("ReadStates");
class f {
  async getAll(e) {
    let t = performance.now(),
      n = await c.A.readStates(e).getMany(),
      r = performance.now();
    return d.log("asynchronously loaded in ".concat(r - t, "ms (readStates: ").concat(n.length, ")")), n
  }
  resetInMemoryState() {
    this.readStateVersion = null
  }
  handleConnectionOpen(e) {
    this.readStateVersion = e.readState.version
  }
  handleReadStateAction(e) {
    null != this.readStateVersion && (null != e.version ? this.readStateVersion = e.version : d.log("Received null read states version", e))
  }
  handleWriteCaches(e, t) {
    let n = o.Ay.getAllReadStates(false);
    if (t) {
      var r;
      if (null == this.readStateVersion) return;
      let t = "0",
        a = "0",
        o = Object.keys(s.A.getMutablePrivateChannels()),
        u = new Set(o);
      for (let e of (a = null != (r = i()(o).sort(l.default.compare).reverse().value()[0]) ? r : "0", n)) null != e._lastMessageId && (1 === l.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), u.has(e.channelId) && 1 === l.default.compare(e._lastMessageId, a) && (a = e._lastMessageId));
      c.A.nonGuildVersionsTransaction(e).putAll([{
        id: "highest_last_message_id",
        versionString: t
      }, {
        id: "private_channels_version",
        versionString: a
      }, {
        id: "read_state_version",
        version: this.readStateVersion
      }])
    }
    let a = c.A.readStatesTransaction(e);
    a.delete(), n.forEach(e => a.put("".concat(e.type, "-").concat(e.channelId), e))
  }
  constructor() {
    u(this, "readStateVersion", null), u(this, "actions", {
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      CHANNEL_PINS_ACK: e => this.handleReadStateAction(e),
      MESSAGE_ACK: e => this.handleReadStateAction(e),
      BACKGROUND_SYNC_FINISHED: (e, t) => {
        e.messagesOnly || this.handleWriteCaches(t, false)
      },
      WRITE_CACHES: (e, t) => this.handleWriteCaches(t, true)
    })
  }
}
let p = new f