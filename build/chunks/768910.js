/** Chunk was on web.js **/
/** chunk id: 768910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./642613.js"), require("./583741.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk287328 = require("./287328.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk710845.Z("ReadStates");
class f {
  async getAll(e) {
    let t = performance.now(),
      n = await c.Z.readStates(e).getMany(),
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
    let n = s.ZP.getAllReadStates(false);
    if (t) {
      var r;
      if (null == this.readStateVersion) return;
      let t = "0",
        o = "0",
        s = Object.keys(a.Z.getMutablePrivateChannels()),
        u = new Set(s);
      for (let e of (o = null != (r = i()(s).sort(l.default.compare).reverse().value()[0]) ? r : "0", n)) null != e._lastMessageId && (1 === l.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), u.has(e.channelId) && 1 === l.default.compare(e._lastMessageId, o) && (o = e._lastMessageId));
      c.Z.nonGuildVersionsTransaction(e).putAll([{
        id: "highest_last_message_id",
        versionString: t
      }, {
        id: "private_channels_version",
        versionString: o
      }, {
        id: "read_state_version",
        version: this.readStateVersion
      }])
    }
    let o = c.Z.readStatesTransaction(e);
    o.delete(), n.forEach(e => o.put("".concat(e.type, "-").concat(e.channelId), e))
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