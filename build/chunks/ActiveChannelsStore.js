/** Chunk was on 1272 **/
/** chunk id: 580079, original params: e,t,n (module,exports,require) **/
require("./539854.js"), require("./388685.js");
var r, i, l, a, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js");
require("./914010.js");
var Chunk709054 = require("./709054.js"),
  Chunk176505 = require("./176505.js");
let h = {},
  g = {},
  m = {},
  b = {};

function _(e) {
  let t = g[e];
  if (null == t) return;
  let n = p.default.fromTimestamp(Date.now() - 9e5),
    r = s().findIndex(t, e => p.default.compare(e.id, n) > 0);
  if (false === r) g[e] = [];
  else {
    let n = Math.max(r, t.length - 26);
    g[e] = s().slice(t, n)
  }
  m[e] = Date.now()
}

function E(e, t, n, r) {
  h[e].add(t);
  let i = m[t];
  (null == i || i + 3e5 > Date.now()) && _(t), null == g[t] && (g[t] = []), g[t].push({
    id: n,
    userId: r
  })
}

function O(e) {
  let {
    channel: t
  } = e;
  delete g[t.id], delete m[t.id]
}
class v extends(a = Chunk442837.ZP.Store) {
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
l = "ActiveChannelsStore", (i = "displayName") in(r = v) ? Object.defineProperty(r, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : r[i] = l, new v(Chunk570140.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (!(0, f.ME)(t) || null == n) returnfalse;
    let r = h[n];
    if (null == r) returnfalse;
    r.forEach(e => {
      var t;
      _(e), (null == (t = g[e]) ? true : t.length) === 0 && delete g[e]
    });
    let i = s().chain(Array.from(r)).filter(e => e in g).sortBy(e => {
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
    let o = a.guild_id;
    if (null == o || null == h[o]) returnfalse;
    E(o, n, r.id, null == (t = r.author) ? true : t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete h[t.id]
  },
  CHANNEL_DELETE: O,
  THREAD_DELETE: O,
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
        E(t, n, e.message_id, e.user_id)
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