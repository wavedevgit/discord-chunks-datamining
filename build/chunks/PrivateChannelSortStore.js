/** Chunk was on web.js **/
/** chunk id: 645959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./321073.js");
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk695870 = require("./695870.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk222823 = require("./222823.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js");

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
  A = new Chunk713402.J(O, y);

function v() {
  A.clear()
}

function S(e) {
  var t, n;
  let r = null != (t = null != (n = h.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
    i = e.isMessageRequestTimestamp;
  if (null != i) {
    let e = a()(i).valueOf(),
      t = E.default.fromTimestamp(e);
    return E.default.compare(r, t) > 0 ? r : t
  }
  return r
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: false,
    isRequest: u.A.isMessageRequest(e.id) || d.A.isSpam(e.id)
  }
}

function T() {
  A.clear(), Object.values(p.A.getMutablePrivateChannels()).forEach(e => {
    A.set(e.id, I(e))
  })
}

function C(e) {
  let {
    channel: t
  } = e;
  if (!(0, f.Gw)(t.type) || t.id === c.E) returnfalse;
  A.set(t.id, I(t))
}

function N(e) {
  let {
    channels: t
  } = e;
  t.forEach(e => {
    ((0, f.Gw)(e.type) || A.has(e.id)) && A.set(e.id, I(e))
  })
}

function R(e) {
  let {
    channel: t
  } = e;
  return A.delete(t.id)
}

function w(e) {
  let {
    channelId: t,
    message: n
  } = e;
  if (!A.has(t)) returnfalse;
  let r = p.A.getChannel(t);
  return null != r && A.set(t, I(r, n.id))
}

function P(e) {
  let t = e.guild.id;
  return A.delete(t)
}

function D() {
  let e = p.A.getMutablePrivateChannels();
  for (let t in e) A.set(t, I(e[t]))
}
let x = (() => {
  let e = [],
    t = [],
    n = [];
  return () => {
    let r = A.values("FAVORITE"),
      i = A.values("DEFAULT");
    return (e !== r || t !== i) && (n = [], r.forEach(e => {
      let {
        channelId: t
      } = e;
      return n.push(t)
    }), e = r, i.forEach(e => {
      let {
        channelId: t
      } = e;
      return n.push(t)
    }), t = i), n
  }
})();
class L extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.A, _.A, u.A, h.Ay, d.A, m.Ay, g.default), this.syncWith([m.Ay, u.A], T)
  }
  getPrivateChannelIds() {
    return x()
  }
  getSortedChannels() {
    return [A.values("FAVORITE"), A.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return A.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: r
      } = t;
      e[n] = r
    }), e
  }
}
b(L, "displayName", "PrivateChannelSortStore");
let j = new L(Chunk73153.h, {
  CONNECTION_OPEN: T,
  CONNECTION_OPEN_SUPPLEMENTAL: T,
  OVERLAY_INITIALIZE: T,
  CACHE_LOADED: D,
  CACHE_LOADED_LAZY: D,
  CHANNEL_UPDATES: N,
  CHANNEL_CREATE: C,
  CHANNEL_DELETE: R,
  MESSAGE_CREATE: w,
  GUILD_CREATE: P,
  LOGOUT: v
})