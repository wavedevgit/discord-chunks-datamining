/** Chunk was on 30202 **/
/** chunk id: 768910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./642613.js"), require("./583741.js");
var Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk710845 = require("./710845.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk709054 = require("./709054.js"),
  Chunk287328 = require("./287328.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Chunk710845.Z("ReadStates"),
  m = new class {
    async getAll(e) {
      let t = performance.now(),
        n = await c.Z.readStates(e).getMany(),
        i = performance.now();
      return u.log("asynchronously loaded in ".concat(i - t, "ms (readStates: ").concat(n.length, ")")), n
    }
    resetInMemoryState() {
      this.readStateVersion = null
    }
    handleConnectionOpen(e) {
      this.readStateVersion = e.readState.version
    }
    handleReadStateAction(e) {
      null != this.readStateVersion && (null != e.version ? this.readStateVersion = e.version : u.log("Received null read states version", e))
    }
    handleWriteCaches(e, t) {
      let n = l.ZP.getAllReadStates(false);
      if (t) {
        var i;
        if (null == this.readStateVersion) return;
        let t = "0",
          s = "0",
          l = Object.keys(a.Z.getMutablePrivateChannels()),
          d = new Set(l);
        for (let e of (s = null != (i = r()(l).sort(o.default.compare).reverse().value()[0]) ? i : "0", n)) null != e._lastMessageId && (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), d.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, s) && (s = e._lastMessageId));
        c.Z.nonGuildVersionsTransaction(e).putAll([{
          id: "highest_last_message_id",
          versionString: t
        }, {
          id: "private_channels_version",
          versionString: s
        }, {
          id: "read_state_version",
          version: this.readStateVersion
        }])
      }
      let s = c.Z.readStatesTransaction(e);
      s.delete(), n.forEach(e => s.put("".concat(e.type, "-").concat(e.channelId), e))
    }
    constructor() {
      d(this, "readStateVersion", null), d(this, "actions", {
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