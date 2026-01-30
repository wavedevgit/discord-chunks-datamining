/** Chunk was on 88332 **/
/** chunk id: 645959, original params: e,i,t (module,exports,require) **/
let n, l, s;
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./321073.js");
var a, u, Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
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
    isRequest: i,
    isFavorite: t
  } = e;
  return i ? [] : [t ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: i,
    nudgeTimestamp: t
  } = e;
  return null != t ? -t : -p.default.extractTimestamp(i)
});

function O(e) {
  let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : function(e) {
    var i, t;
    let n = null != (i = null != (t = h.Ay.lastMessageId(e.id)) ? t : e.lastMessageId) ? i : e.id,
      l = e.isMessageRequestTimestamp;
    if (null != l) {
      let e = d()(l).valueOf(),
        i = p.default.fromTimestamp(e);
      return p.default.compare(n, i) > 0 ? n : i
    }
    return n
  }(e);
  return {
    channelId: e.id,
    lastMessageId: i,
    isFavorite: false,
    isRequest: o.A.isMessageRequest(e.id) || c.A.isSpam(e.id),
    nudgeTimestamp: m.A.getNudgeTimestamp(e.id)
  }
}

function U() {
  v.clear(), Object.values(E.A.getMutablePrivateChannels()).forEach(e => {
    v.set(e.id, O(e))
  })
}

function D() {
  let e = E.A.getMutablePrivateChannels();
  for (let i in e) v.set(i, O(e[i]))
}
let S = (n = [], l = [], s = [], () => {
  let e = v.values("FAVORITE"),
    i = v.values("DEFAULT");
  return (n !== e || l !== i) && (s = [], e.forEach(e => {
    let {
      channelId: i
    } = e;
    return s.push(i)
  }), n = e, i.forEach(e => {
    let {
      channelId: i
    } = e;
    return s.push(i)
  }), l = i), s
});
class L extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(E.A, y.A, o.A, h.Ay, c.A, C.Ay, R.default, m.A), this.syncWith([C.Ay, o.A, m.A], U)
  }
  getPrivateChannelIds() {
    return S()
  }
  getSortedChannels() {
    return [v.values("FAVORITE"), v.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return v.values().forEach(i => {
      let {
        channelId: t,
        lastMessageId: n
      } = i;
      e[t] = n
    }), e
  }
}(u = "displayName") in L ? Object.defineProperty(L, u, {
  value: "PrivateChannelSortStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : L[u] = "PrivateChannelSortStore";
let b = new L(Chunk73153.h, {
  CONNECTION_OPEN: U,
  CONNECTION_OPEN_SUPPLEMENTAL: U,
  OVERLAY_INITIALIZE: U,
  CACHE_LOADED: D,
  CACHE_LOADED_LAZY: D,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: i
    } = e;
    i.forEach(e => {
      ((0, N.Gw)(e.type) || v.has(e.id)) && v.set(e.id, O(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: i
    } = e;
    if (!(0, N.Gw)(i.type) || i.id === M.E) returnfalse;
    v.set(i.id, O(i))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: i
    } = e;
    return v.delete(i.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: i,
      message: t
    } = e;
    if (!v.has(i)) returnfalse;
    let n = E.A.getChannel(i);
    return null != n && v.set(i, O(n, t.id))
  },
  REPLY_NUDGE_SET: function(e) {
    let {
      channelId: i
    } = e;
    if (!v.has(i)) returnfalse;
    let t = E.A.getChannel(i);
    return null != t && v.set(i, O(t))
  },
  GUILD_CREATE: function(e) {
    let i = e.guild.id;
    return v.delete(i)
  },
  LOGOUT: function() {
    v.clear()
  }
})