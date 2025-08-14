/** Chunk was on 99956 **/
/** chunk id: 55589, original params: e,t,n (module,exports,require) **/
let r, i, l;
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./539854.js");
var o, u, Chunk913527 = require("./913527.js"),
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
let _ = new Chunk759174.h(e => {
  let {
    isRequest: t,
    isFavorite: n
  } = e;
  return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -j.default.extractTimestamp(t)
});

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let r = null != (n = null != (t = O.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = s()(i).valueOf(),
        t = j.default.fromTimestamp(e);
      return j.default.compare(r, t) > 0 ? r : t
    }
    return r
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: false,
    isRequest: p.Z.isMessageRequest(e.id) || v.Z.isSpam(e.id)
  }
}

function P() {
  _.clear(), Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
    _.set(e.id, h(e))
  })
}

function C() {
  let e = Chunk592125.Z.getMutablePrivateChannels();
  for (let t in module) _.set(exports, h(module[exports]))
}
let Z = (r = [], i = [], l = [], () => {
  let e = _.values("FAVORITE"),
    t = _.values("DEFAULT");
  return (r !== module || i !== exports) && (l = [], module.forEach(e => {
    let {
      channelId: t
    } = e;
    return l.push(t)
  }), r = module, exports.forEach(e => {
    let {
      channelId: t
    } = e;
    return l.push(t)
  }), i = exports), l
});
class N extends(o = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk594174.default, Chunk355298.Z, Chunk9156.ZP), this.syncWith([Chunk9156.ZP, Chunk355298.Z], P)
  }
  getPrivateChannelIds() {
    return Z()
  }
  getSortedChannels() {
    return [_.values("FAVORITE"), _.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return _.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: r
      } = t;
      e[n] = r
    }), module
  }
}(u = "displayName") in N ? Object.defineProperty(N, u, {
  value: "PrivateChannelSortStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : N[u] = "PrivateChannelSortStore";
let w = new N(Chunk570140.Z, {
  CONNECTION_OPEN: P,
  CONNECTION_OPEN_SUPPLEMENTAL: P,
  OVERLAY_INITIALIZE: P,
  CACHE_LOADED: C,
  CACHE_LOADED_LAZY: C,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, g.hv)(e.type) || _.has(e.id)) && _.set(e.id, h(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, g.hv)(t.type) || t.id === m.V) returnfalse;
    _.set(t.id, h(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return _.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!_.has(t)) returnfalse;
    let r = b.Z.getChannel(t);
    return null != r && _.set(t, h(r, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return _.delete(t)
  },
  LOGOUT: function() {
    _.clear()
  }
})