/** Chunk was on web.js **/
/** chunk id: 55589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
var r, Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = e => {
    let {
      lastMessageId: t
    } = e;
    return -E.default.extractTimestamp(t)
  },
  O = e => {
    let {
      isRequest: t,
      isFavorite: n
    } = e;
    return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
  },
  v = new Chunk759174.h(O, y);

function S() {
  v.clear()
}

function I(e) {
  var t, n;
  let r = null != (n = null != (t = m.ZP.lastMessageId(e.id)) ? t : e.lastMessageId) ? n : e.id,
    i = e.isMessageRequestTimestamp;
  if (null != i) {
    let e = o()(i).valueOf(),
      t = E.default.fromTimestamp(e);
    return E.default.compare(r, t) > 0 ? r : t
  }
  return r
}

function T(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : I(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: false,
    isRequest: u.Z.isMessageRequest(e.id) || d.Z.isSpam(e.id)
  }
}

function C() {
  v.clear(), Object.values(Chunk592125.Z.getMutablePrivateChannels()).forEach(e => {
    v.set(e.id, T(e))
  })
}

function A(e) {
  let {
    channel: t
  } = e;
  if (!(0, f.hv)(t.type) || t.id === c.V) returnfalse;
  v.set(t.id, T(t))
}

function N(e) {
  let {
    channels: t
  } = e;
  t.forEach(e => {
    ((0, f.hv)(e.type) || v.has(e.id)) && v.set(e.id, T(e))
  })
}

function P(e) {
  let {
    channel: t
  } = e;
  return v.delete(t.id)
}

function R(e) {
  let {
    channelId: t,
    message: n
  } = e;
  if (!v.has(t)) returnfalse;
  let r = p.Z.getChannel(t);
  return null != r && v.set(t, T(r, n.id))
}

function w(e) {
  let t = e.guild.id;
  return v.delete(t)
}

function D() {
  let e = Chunk592125.Z.getMutablePrivateChannels();
  for (let t in module) v.set(exports, T(module[exports]))
}
let x = (() => {
  let e = [],
    t = [],
    n = [];
  return () => {
    let r = v.values("FAVORITE"),
      i = v.values("DEFAULT");
    return (module !== r || exports !== Chunk913527) && (n = [], r.forEach(e => {
      let {
        channelId: t
      } = e;
      return n.push(t)
    }), e = r, Chunk913527.forEach(e => {
      let {
        channelId: t
      } = e;
      return n.push(t)
    }), t = Chunk913527), require
  }
})();
class L extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk355298.Z, Chunk306680.ZP, Chunk333984.Z, Chunk9156.ZP, Chunk594174.default), this.syncWith([Chunk9156.ZP, Chunk355298.Z], C)
  }
  getPrivateChannelIds() {
    return x()
  }
  getSortedChannels() {
    return [v.values("FAVORITE"), v.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return v.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: r
      } = t;
      e[n] = r
    }), module
  }
}
b(L, "displayName", "PrivateChannelSortStore");
let j = new L(Chunk570140.Z, {
  CONNECTION_OPEN: C,
  CONNECTION_OPEN_SUPPLEMENTAL: C,
  OVERLAY_INITIALIZE: C,
  CACHE_LOADED: D,
  CACHE_LOADED_LAZY: D,
  CHANNEL_UPDATES: N,
  CHANNEL_CREATE: A,
  CHANNEL_DELETE: P,
  MESSAGE_CREATE: R,
  GUILD_CREATE: w,
  LOGOUT: S
})