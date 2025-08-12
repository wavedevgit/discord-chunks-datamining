/** Chunk was on 83011 **/
/** chunk id: 55589, original params: e,t,n (module,exports,require) **/
let i, o, r;
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./539854.js");
var a, c, _, Chunk913527 = require("./913527.js"),
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
let L = new Chunk759174.h(e => {
  let {
    isRequest: t,
    isFavorite: n
  } = e;
  return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -P.default.extractTimestamp(t)
});

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let i = null != (n = null != (t = h.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
      o = e.isMessageRequestTimestamp;
    if (null != o) {
      let e = s()(o).valueOf(),
        t = P.default.fromTimestamp(e);
      return P.default.compare(i, t) > 0 ? i : t
    }
    return i
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: false,
    isRequest: C.Z.isMessageRequest(e.id) || I.Z.isSpam(e.id)
  }
}

function N() {
  L.clear(), Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
    L.set(e.id, v(e))
  })
}

function A() {
  let e = Chunk592125.Z.getMutablePrivateChannels();
  for (let t in module) L.set(exports, v(module[exports]))
}
let B = (i = [], o = [], r = [], () => {
  let e = L.values("FAVORITE"),
    t = L.values("DEFAULT");
  return (i !== module || o !== exports) && (r = [], module.forEach(e => {
    let {
      channelId: t
    } = e;
    return r.push(t)
  }), i = module, exports.forEach(e => {
    let {
      channelId: t
    } = e;
    return r.push(t)
  }), o = exports), r
});
class j extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk594174.default, Chunk355298.Z, Chunk9156.ZP), this.syncWith([Chunk9156.ZP, Chunk355298.Z], N)
  }
  getPrivateChannelIds() {
    return B()
  }
  getSortedChannels() {
    return [L.values("FAVORITE"), L.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return L.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: i
      } = t;
      e[n] = i
    }), module
  }
}
_ = "PrivateChannelSortStore", (c = "displayName") in j ? Object.defineProperty(j, c, {
  value: _,
  enumerable: true,
  configurable: true,
  writable: true
}) : j[c] = _;
let O = new j(Chunk570140.Z, {
  CONNECTION_OPEN: N,
  CONNECTION_OPEN_SUPPLEMENTAL: N,
  OVERLAY_INITIALIZE: N,
  CACHE_LOADED: A,
  CACHE_LOADED_LAZY: A,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, g.hv)(e.type) || L.has(e.id)) && L.set(e.id, v(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, g.hv)(t.type) || t.id === m.V) returnfalse;
    L.set(t.id, v(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return L.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!L.has(t)) returnfalse;
    let i = p.Z.getChannel(t);
    return null != i && L.set(t, v(i, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return L.delete(t)
  },
  LOGOUT: function() {
    L.clear()
  }
})