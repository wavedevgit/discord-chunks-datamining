/** Chunk was on 43629 **/
/** chunk id: 645959, original params: e,t,n (module,exports,require) **/
let i, r, s;
require.d(exports, {
  A: () => U
}), require("./896048.js"), require("./321073.js");
var l, a, Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
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
let v = new Chunk713402.J(e => {
  let {
    isRequest: t,
    isFavorite: n
  } = e;
  return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t,
    nudgeTimestamp: n
  } = e;
  return null != n ? -n : -y.default.extractTimestamp(t)
});

function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let i = null != (t = null != (n = b.Ay.lastMessageId(e.id)) ? n : e.lastMessageId) ? t : e.id,
      r = e.isMessageRequestTimestamp;
    if (null != r) {
      let e = u()(r).valueOf(),
        t = y.default.fromTimestamp(e);
      return y.default.compare(i, t) > 0 ? i : t
    }
    return i
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: false,
    isRequest: h.A.isMessageRequest(e.id) || p.A.isSpam(e.id),
    nudgeTimestamp: E.A.getNudgeTimestamp(e.id)
  }
}

function S() {
  v.clear(), Object.values(_.A.getMutablePrivateChannels()).forEach(e => {
    v.set(e.id, C(e))
  })
}

function R() {
  let e = _.A.getMutablePrivateChannels();
  for (let t in e) v.set(t, C(e[t]))
}
let N = (i = [], r = [], s = [], () => {
  let e = v.values("FAVORITE"),
    t = v.values("DEFAULT");
  return (i !== e || r !== t) && (s = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), i = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), r = t), s
});
class T extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(_.A, O.A, h.A, b.Ay, p.A, M.Ay, m.default, E.A), this.syncWith([M.Ay, h.A, E.A], S)
  }
  getPrivateChannelIds() {
    return N()
  }
  getSortedChannels() {
    return [v.values("FAVORITE"), v.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return v.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: i
      } = t;
      e[n] = i
    }), e
  }
}(a = "displayName") in T ? Object.defineProperty(T, a, {
  value: "PrivateChannelSortStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : T[a] = "PrivateChannelSortStore";
let U = new T(Chunk73153.h, {
  CONNECTION_OPEN: S,
  CONNECTION_OPEN_SUPPLEMENTAL: S,
  OVERLAY_INITIALIZE: S,
  CACHE_LOADED: R,
  CACHE_LOADED_LAZY: R,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, g.Gw)(e.type) || v.has(e.id)) && v.set(e.id, C(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, g.Gw)(t.type) || t.id === f.E) returnfalse;
    v.set(t.id, C(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return v.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!v.has(t)) returnfalse;
    let i = _.A.getChannel(t);
    return null != i && v.set(t, C(i, n.id))
  },
  REPLY_NUDGE_SET: function(e) {
    let {
      channelId: t
    } = e;
    if (!v.has(t)) returnfalse;
    let n = _.A.getChannel(t);
    return null != n && v.set(t, C(n))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return v.delete(t)
  },
  LOGOUT: function() {
    v.clear()
  }
})