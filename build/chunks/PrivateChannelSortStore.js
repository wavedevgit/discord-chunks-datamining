/** Chunk was on 31930 **/
/** chunk id: 55589, original params: e,t,n (module,exports,require) **/
"use strict";
let i, r, s;
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./539854.js");
var l, o, Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
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
let S = new Chunk759174.h(e => {
  let {
    isRequest: t,
    isFavorite: n
  } = e;
  return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -O.default.extractTimestamp(t)
});

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let i = null != (n = null != (t = C.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
      r = e.isMessageRequestTimestamp;
    if (null != r) {
      let e = c()(r).valueOf(),
        t = O.default.fromTimestamp(e);
      return O.default.compare(i, t) > 0 ? i : t
    }
    return i
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: false,
    isRequest: g.Z.isMessageRequest(e.id) || f.Z.isSpam(e.id)
  }
}

function w() {
  S.clear(), Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
    S.set(e.id, E(e))
  })
}

function I() {
  let e = Chunk592125.Z.getMutablePrivateChannels();
  for (let t in module) S.set(exports, E(module[exports]))
}
let j = (i = [], r = [], s = [], () => {
  let e = S.values("FAVORITE"),
    t = S.values("DEFAULT");
  return (i !== module || r !== exports) && (s = [], module.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), i = module, exports.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), r = exports), s
});
class P extends(l = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk594174.default, Chunk355298.Z, Chunk9156.ZP), this.syncWith([Chunk9156.ZP, Chunk355298.Z], w)
  }
  getPrivateChannelIds() {
    return j()
  }
  getSortedChannels() {
    return [S.values("FAVORITE"), S.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return S.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: i
      } = t;
      e[n] = i
    }), module
  }
}(o = "displayName") in P ? Object.defineProperty(P, o, {
  value: "PrivateChannelSortStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : P[o] = "PrivateChannelSortStore";
let N = new P(Chunk570140.Z, {
  CONNECTION_OPEN: w,
  CONNECTION_OPEN_SUPPLEMENTAL: w,
  OVERLAY_INITIALIZE: w,
  CACHE_LOADED: I,
  CACHE_LOADED_LAZY: I,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, m.hv)(e.type) || S.has(e.id)) && S.set(e.id, E(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, m.hv)(t.type) || t.id === p.V) returnfalse;
    S.set(t.id, E(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return S.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!S.has(t)) returnfalse;
    let i = b.Z.getChannel(t);
    return null != i && S.set(t, E(i, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return S.delete(t)
  },
  LOGOUT: function() {
    S.clear()
  }
})