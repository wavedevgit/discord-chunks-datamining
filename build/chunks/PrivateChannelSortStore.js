/** Chunk was on web.js **/
/** chunk id: 645959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./321073.js");
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk695870 = require("./695870.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js"),
  Chunk493507 = require("./493507.js"),
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
let O = e => {
    let {
      lastMessageId: t,
      nudgeTimestamp: n
    } = e;
    return null != n ? -n : -y.default.extractTimestamp(t)
  },
  v = e => {
    let {
      isRequest: t,
      isFavorite: n
    } = e;
    return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
  },
  A = new Chunk713402.J(v, O);

function I() {
  A.clear()
}

function S(e) {
  var t, n;
  let r = null != (t = null != (n = m.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
    i = e.isMessageRequestTimestamp;
  if (null != i) {
    let e = a()(i).valueOf(),
      t = y.default.fromTimestamp(e);
    return y.default.compare(r, t) > 0 ? r : t
  }
  return r
}

function T(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: false,
    isRequest: u.A.isMessageRequest(e.id) || d.A.isSpam(e.id),
    nudgeTimestamp: f.A.getNudgeTimestamp(e.id)
  }
}

function C() {
  A.clear(), Object.values(_.A.getMutablePrivateChannels()).forEach(e => {
    A.set(e.id, T(e))
  })
}

function N(e) {
  let {
    channel: t
  } = e;
  if (!(0, p.Gw)(t.type) || t.id === c.E) returnfalse;
  A.set(t.id, T(t))
}

function w(e) {
  let {
    channels: t
  } = e;
  t.forEach(e => {
    ((0, p.Gw)(e.type) || A.has(e.id)) && A.set(e.id, T(e))
  })
}

function R(e) {
  let {
    channel: t
  } = e;
  return A.delete(t.id)
}

function P(e) {
  let {
    channelId: t,
    message: n
  } = e;
  if (!A.has(t)) returnfalse;
  let r = _.A.getChannel(t);
  return null != r && A.set(t, T(r, n.id))
}

function D(e) {
  let {
    channelId: t
  } = e;
  if (!A.has(t)) returnfalse;
  let n = _.A.getChannel(t);
  return null != n && A.set(t, T(n))
}

function x(e) {
  let t = e.guild.id;
  return A.delete(t)
}

function L() {
  let e = _.A.getMutablePrivateChannels();
  for (let t in e) A.set(t, T(e[t]))
}
let j = (() => {
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
class M extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(_.A, h.A, u.A, m.Ay, d.A, g.Ay, E.default, f.A), this.syncWith([g.Ay, u.A], C)
  }
  getPrivateChannelIds() {
    return j()
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
b(M, "displayName", "PrivateChannelSortStore");
let k = new M(Chunk73153.h, {
  CONNECTION_OPEN: C,
  CONNECTION_OPEN_SUPPLEMENTAL: C,
  OVERLAY_INITIALIZE: C,
  CACHE_LOADED: L,
  CACHE_LOADED_LAZY: L,
  CHANNEL_UPDATES: w,
  CHANNEL_CREATE: N,
  CHANNEL_DELETE: R,
  MESSAGE_CREATE: P,
  REPLY_NUDGE_SET: D,
  GUILD_CREATE: x,
  LOGOUT: I
})