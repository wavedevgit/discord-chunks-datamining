/** Chunk was on 30866 **/
/** chunk id: 55589, original params: e,n,t (module,exports,require) **/
let r, i, a;
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js");
var o, l, Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk333023 = require("./333023.js"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js");
let y = new Chunk759174.h(e => {
  let {
    isRequest: n,
    isFavorite: t
  } = e;
  return n ? [] : [t ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: n
  } = e;
  return -O.default.extractTimestamp(n)
});

function j(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : function(e) {
    var n, t;
    let r = null != (t = null != (n = v.ZP.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = s()(i).valueOf(),
        n = O.default.fromTimestamp(e);
      return O.default.compare(r, n) > 0 ? r : n
    }
    return r
  }(e);
  return {
    channelId: e.id,
    lastMessageId: n,
    isFavorite: false,
    isRequest: p.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
  }
}

function I() {
  y.clear(), Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
    y.set(e.id, j(e))
  })
}

function E() {
  let e = Chunk592125.Z.getMutablePrivateChannels();
  for (let n in module) y.set(exports, j(module[exports]))
}
let w = (r = [], i = [], a = [], () => {
  let e = y.values("FAVORITE"),
    n = y.values("DEFAULT");
  return (r !== module || i !== exports) && (a = [], module.forEach(e => {
    let {
      channelId: n
    } = e;
    return a.push(n)
  }), r = module, exports.forEach(e => {
    let {
      channelId: n
    } = e;
    return a.push(n)
  }), i = exports), a
});
class P extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk594174.default, Chunk355298.Z, Chunk9156.ZP), this.syncWith([Chunk9156.ZP, Chunk355298.Z], I)
  }
  getPrivateChannelIds() {
    return w()
  }
  getSortedChannels() {
    return [y.values("FAVORITE"), y.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return y.values().forEach(n => {
      let {
        channelId: t,
        lastMessageId: r
      } = n;
      e[t] = r
    }), module
  }
}(l = "displayName") in P ? Object.defineProperty(P, l, {
  value: "PrivateChannelSortStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : P[l] = "PrivateChannelSortStore";
let S = new P(Chunk570140.Z, {
  CONNECTION_OPEN: I,
  CONNECTION_OPEN_SUPPLEMENTAL: I,
  OVERLAY_INITIALIZE: I,
  CACHE_LOADED: E,
  CACHE_LOADED_LAZY: E,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: n
    } = e;
    n.forEach(e => {
      ((0, h.hv)(e.type) || y.has(e.id)) && y.set(e.id, j(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: n
    } = e;
    if (!(0, h.hv)(n.type) || n.id === b.V) returnfalse;
    y.set(n.id, j(n))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: n
    } = e;
    return y.delete(n.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: n,
      message: t
    } = e;
    if (!y.has(n)) returnfalse;
    let r = m.Z.getChannel(n);
    return null != r && y.set(n, j(r, t.id))
  },
  GUILD_CREATE: function(e) {
    let n = e.guild.id;
    return y.delete(n)
  },
  LOGOUT: function() {
    y.clear()
  }
})