/** Chunk was on 1272 **/
/** chunk id: 580079, original params: e,t,n (module,exports,require) **/
require("./539854.js"), require("./388685.js");
var r, i, l, a, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk914010 = require("./914010.js"),
  Chunk709054 = require("./709054.js"),
  Chunk176505 = require("./176505.js");
let h = {},
  g = {},
  _ = {},
  b = {};

function E(e) {
  let t = g[e];
  if (null == t) return;
  let n = f.default.fromTimestamp(Date.now() - 9e5),
    r = o().findIndex(t, e => f.default.compare(e.id, n) > 0);
  if (false === r) g[e] = [];
  else {
    let n = Math.max(r, t.length - 26);
    g[e] = o().slice(t, n)
  }
  _[e] = Date.now()
}

function O(e, t, n, r) {
  h[e].add(t);
  let i = _[t];
  (null == i || i + 3e5 > Date.now()) && E(t), null == g[t] && (g[t] = []), g[t].push({
    id: n,
    userId: r
  })
}

function I(e) {
  let {
    channel: t
  } = e;
  delete g[t.id], delete _[t.id]
}
class y extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk914010.Z)
  }
  getActiveChannelsFetchStatus(e) {
    return b[e]
  }
  getActiveChannelIds(e) {
    return h[e]
  }
  getChannelMessageData(e) {
    return g[e]
  }
  shouldFetch(e) {
    var t;
    return null == h[e] && !(null == (t = b[e]) ? true : t.loading)
  }
}
l = "ActiveChannelsStore", (i = "displayName") in(r = y) ? Object.defineProperty(r, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : r[i] = l, new y(Chunk570140.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (!(0, m.ME)(t) || null == n) returnfalse;
    let r = h[n];
    if (null == r) returnfalse;
    r.forEach(e => {
      var t;
      E(e), (null == (t = g[e]) ? true : t.length) === 0 && delete g[e]
    });
    let i = o().chain(Array.from(r)).filter(e => e in g).sortBy(e => {
      var t, n;
      return -(null != (n = null == (t = g[e]) ? true : t.length) ? n : 0)
    }).value();
    h[n] = new Set(i)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: r,
      optimistic: i,
      isPushNotification: l
    } = e;
    if (i || l) returnfalse;
    let a = d.Z.getChannel(n);
    if (null == a) returnfalse;
    let s = a.guild_id;
    if (null == s || null == h[s]) returnfalse;
    O(s, n, r.id, null == (t = r.author) ? true : t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete h[t.id]
  },
  CHANNEL_DELETE: I,
  THREAD_DELETE: I,
  ACTIVE_CHANNELS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    b[t] = {
      loading: true,
      error: null,
      fetchedAt: Date.now()
    }
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      channels: n
    } = e;
    b[t] = {
      loading: false,
      error: null,
      fetchedAt: Date.now()
    }, h[t] = new Set, n.forEach(e => {
      let {
        channel_id: n,
        messages: r
      } = e;
      r.forEach(e => {
        O(t, n, e.message_id, e.user_id)
      })
    })
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    b[t] = {
      loading: false,
      error: n,
      fetchedAt: null
    }
  },
  CONNECTION_OPEN: function() {}
})