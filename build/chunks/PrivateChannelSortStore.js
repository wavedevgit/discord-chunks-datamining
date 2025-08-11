/** Chunk was on 82107 **/
/** chunk id: 55589, original params: e,n,t (module,exports,require) **/
let r, a, i;
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./539854.js");
var o, l, c, Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
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
let I = new Chunk759174.h(e => {
  let {
    isRequest: n,
    isFavorite: t
  } = e;
  return n ? [] : [t ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: n
  } = e;
  return -y.default.extractTimestamp(n)
});

function j(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : function(e) {
    var n, t;
    let r = null != (t = null != (n = x.ZP.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
      a = e.isMessageRequestTimestamp;
    if (null != a) {
      let e = d()(a).valueOf(),
        n = y.default.fromTimestamp(e);
      return y.default.compare(r, n) > 0 ? r : n
    }
    return r
  }(e);
  return {
    channelId: e.id,
    lastMessageId: n,
    isFavorite: false,
    isRequest: f.Z.isMessageRequest(e.id) || h.Z.isSpam(e.id)
  }
}

function E() {
  I.clear(), Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
    I.set(e.id, j(e))
  })
}

function w() {
  let e = Chunk592125.Z.getMutablePrivateChannels();
  for (let n in module) I.set(exports, j(module[exports]))
}
let P = (r = [], a = [], i = [], () => {
  let e = I.values("FAVORITE"),
    n = I.values("DEFAULT");
  return (r !== module || a !== exports) && (i = [], module.forEach(e => {
    let {
      channelId: n
    } = e;
    return i.push(n)
  }), r = module, exports.forEach(e => {
    let {
      channelId: n
    } = e;
    return i.push(n)
  }), a = exports), i
});
class k extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk594174.default, Chunk355298.Z, Chunk9156.ZP), this.syncWith([Chunk9156.ZP, Chunk355298.Z], E)
  }
  getPrivateChannelIds() {
    return P()
  }
  getSortedChannels() {
    return [I.values("FAVORITE"), I.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return I.values().forEach(n => {
      let {
        channelId: t,
        lastMessageId: r
      } = n;
      e[t] = r
    }), module
  }
}
c = "PrivateChannelSortStore", (l = "displayName") in k ? Object.defineProperty(k, l, {
  value: c,
  enumerable: true,
  configurable: true,
  writable: true
}) : k[l] = c;
let N = new k(Chunk570140.Z, {
  CONNECTION_OPEN: E,
  CONNECTION_OPEN_SUPPLEMENTAL: E,
  OVERLAY_INITIALIZE: E,
  CACHE_LOADED: w,
  CACHE_LOADED_LAZY: w,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: n
    } = e;
    n.forEach(e => {
      ((0, m.hv)(e.type) || I.has(e.id)) && I.set(e.id, j(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: n
    } = e;
    if (!(0, m.hv)(n.type) || n.id === b.V) returnfalse;
    I.set(n.id, j(n))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: n
    } = e;
    return I.delete(n.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: n,
      message: t
    } = e;
    if (!I.has(n)) returnfalse;
    let r = g.Z.getChannel(n);
    return null != r && I.set(n, j(r, t.id))
  },
  GUILD_CREATE: function(e) {
    let n = e.guild.id;
    return I.delete(n)
  },
  LOGOUT: function() {
    I.clear()
  }
})