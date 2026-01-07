/** Chunk was on 1272 **/
/** chunk id: 580079, original params: e,t,n (module,exports,require) **/
require("./539854.js"), require("./388685.js");
var r, i, l, a, Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk914010 = require("./914010.js"),
  Chunk709054 = require("./709054.js"),
  Chunk176505 = require("./176505.js");
let m = {},
  h = {},
  b = {},
  _ = {};

function E(e) {
  let t = h[e];
  if (null == t) return;
  let n = f.default.fromTimestamp(Date.now() - 9e5),
    r = s().findIndex(t, e => f.default.compare(e.id, n) > 0);
  if (false === r) h[e] = [];
  else {
    let n = Math.max(r, t.length - 26);
    h[e] = s().slice(t, n)
  }
  b[e] = Date.now()
}

function O(e, t, n, r) {
  m[e].add(t);
  let i = b[t];
  (null == i || i + 3e5 > Date.now()) && E(t), null == h[t] && (h[t] = []), h[t].push({
    id: n,
    userId: r
  })
}

function v(e) {
  let {
    channel: t
  } = e;
  delete h[t.id], delete b[t.id]
}
class y extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(d.Z, p.Z)
  }
  getActiveChannelsFetchStatus(e) {
    return _[e]
  }
  getActiveChannelIds(e) {
    return m[e]
  }
  getChannelMessageData(e) {
    return h[e]
  }
  shouldFetch(e) {
    var t;
    return null == m[e] && !(null == (t = _[e]) ? true : t.loading)
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
    if (!(0, g.ME)(t) || null == n) returnfalse;
    let r = m[n];
    if (null == r) returnfalse;
    r.forEach(e => {
      var t;
      E(e), (null == (t = h[e]) ? true : t.length) === 0 && delete h[e]
    });
    let i = s().chain(Array.from(r)).filter(e => e in h).sortBy(e => {
      var t, n;
      return -(null != (n = null == (t = h[e]) ? true : t.length) ? n : 0)
    }).value();
    m[n] = new Set(i)
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
    if (null == o || null == m[o]) returnfalse;
    O(o, n, r.id, null == (t = r.author) ? true : t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete m[t.id]
  },
  CHANNEL_DELETE: v,
  THREAD_DELETE: v,
  ACTIVE_CHANNELS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    _[t] = {
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
    _[t] = {
      loading: false,
      error: null,
      fetchedAt: Date.now()
    }, m[t] = new Set, n.forEach(e => {
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
    _[t] = {
      loading: false,
      error: n,
      fetchedAt: null
    }
  },
  CONNECTION_OPEN: function() {}
})