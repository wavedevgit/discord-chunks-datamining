/** Chunk was on 21738 **/
/** chunk id: 382289, original params: e,t,n (module,exports,require) **/
require("./321073.js"), require("./896048.js");
var r, i, l, a, Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk967198 = require("./967198.js"),
  Chunk661191 = require("./661191.js"),
  Chunk746080 = require("./746080.js");
let A = {},
  g = {},
  m = {},
  b = {};

function _(e) {
  let t = g[e];
  if (null == t) return;
  let n = f.default.fromTimestamp(Date.now() - 9e5),
    r = o().findIndex(t, e => f.default.compare(e.id, n) > 0);
  if (false === r) g[e] = [];
  else {
    let n = Math.max(r, t.length - 26);
    g[e] = o().slice(t, n)
  }
  m[e] = Date.now()
}

function E(e, t, n, r) {
  A[e].add(t);
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
class y extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.A, p.A)
  }
  getActiveChannelsFetchStatus(e) {
    return b[e]
  }
  getActiveChannelIds(e) {
    return A[e]
  }
  getChannelMessageData(e) {
    return g[e]
  }
  shouldFetch(e) {
    var t;
    return null == A[e] && !(null == (t = b[e]) ? true : t.loading)
  }
}
l = "ActiveChannelsStore", (i = "displayName") in(r = y) ? Object.defineProperty(r, i, {
  value: l,
  enumerable: true,
  configurable: true,
  writable: true
}) : r[i] = l, new y(Chunk73153.h, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (!(0, h.mP)(t) || null == n) returnfalse;
    let r = A[n];
    if (null == r) returnfalse;
    r.forEach(e => {
      var t;
      _(e), (null == (t = g[e]) ? true : t.length) === 0 && delete g[e]
    });
    let i = o().chain(Array.from(r)).filter(e => e in g).sortBy(e => {
      var t, n;
      return -(null != (t = null == (n = g[e]) ? true : n.length) ? t : 0)
    }).value();
    A[n] = new Set(i)
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
    let a = d.A.getChannel(n);
    if (null == a) returnfalse;
    let s = a.guild_id;
    if (null == s || null == A[s]) returnfalse;
    E(s, n, r.id, null == (t = r.author) ? true : t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete A[t.id]
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
    }, A[t] = new Set, n.forEach(e => {
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