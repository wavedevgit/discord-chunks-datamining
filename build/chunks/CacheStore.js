/** Chunk was on 9207 **/
/** chunk id: 569024, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => M
}), require("./896048.js"), require("./446912.js"), require("./457529.js");
var r, i, Chunk61090 = require("./61090.js");
require("./237751.js");
var Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk154049 = require("./154049.js"),
  Chunk273867 = require("./273867.js"),
  Chunk773686 = require("./773686.js"),
  Chunk324827 = require("./324827.js"),
  Chunk348802 = require("./348802.js"),
  Chunk214771 = require("./214771.js"),
  Chunk925948 = require("./925948.js"),
  Chunk980001 = require("./980001.js"),
  Chunk476196 = require("./476196.js"),
  Chunk531743 = require("./531743.js"),
  Chunk989950 = require("./989950.js"),
  Chunk264392 = require("./264392.js"),
  Chunk626584 = require("./626584.js"),
  Chunk142120 = require("./142120.js"),
  Chunk548965 = require("./548965.js"),
  Chunk917878 = require("./917878.js"),
  Chunk614792 = require("./614792.js"),
  Chunk961350 = require("./961350.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk612181 = require("./612181.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837367 = require("./837367.js"),
  Chunk736400 = require("./736400.js"),
  Chunk424234 = require("./424234.js"),
  Chunk652215 = require("./652215.js");
let w = new Chunk626584.A("CacheStore"),
  M = false,
  G = false,
  U = "initializing",
  k = 0,
  B = false,
  H = false,
  V = false;

function F(e) {
  w.log("Clearing cache store"), k = Date.now(), a.w.remove(L.j_2), a.w.remove(L.CT4), a.w.remove(L.XYq), U = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (G = true)
}
async function Y(e, t, n) {
  let r = performance.now();
  if (null == e || null == n) return w.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - r, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let i = await p.Ay.startupLoad(e, t, n, L.EMb);
    w.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let l = {
      guildId: t,
      channelId: n,
      users: i.users,
      members: i.members,
      messages: i.messages
    };
    return S.A.recordChannelFetchedLocal(n, S.a, null, null, L.EMb, i.messages), [performance.now() - r, l]
  }
}
async function W(e, t, n) {
  var r, i, a;
  w.verbose("loading early cache");
  let c = x.A.getSocket();
  c.connect();
  let d = null != (r = y.A.getGuildId()) ? r : null,
    u = null != (i = N.A.getChannelId()) ? i : null,
    _ = performance.now(),
    p = T.A.loadCachedMessages.measureAsyncWithoutNesting(() => Y(e, d, u)),
    m = T.A.fetchGuildCache.measureAsync(() => z(e, n)),
    h = T.A.fetchGuildCache.measureAsync(() => Z(e, n)),
    E = null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => b.A.getAsync(e, null)) : Promise.resolve([]),
    O = null == e ? Promise.resolve({}) : l.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => f.A.getAll(e)),
    C = null == e ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => g.A.getAll(e)),
    S = null == e ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => A.A.getAll(e)),
    [
      [I, v], j, P, R, L, M, G
    ] = await Promise.all([p, m, h, E, O, C, S]),
    U = performance.now() - _;
  if (w.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(I, "ms)")), null == v) return (0, D.A)("database:history_cache_null"), w.verbose("finished without dispatching CACHE_LOADED"), [false, null, 0];
  {
    let r = Object.fromEntries(v.members.map(e => [e.userId, e])),
      i = null != P.guildId && null != P.channels,
      _ = P.guildId;
    return s.Ay.Emitter.batched(() => {
      l.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return o.h.dispatch({
          type: "CACHE_LOADED",
          guilds: j,
          privateChannels: R,
          initialGuildChannels: null != (e = P.channels) ? e : [],
          users: [...v.users],
          messages: null == v.channelId ? {} : {
            [v.channelId]: v.messages
          },
          guildMembers: null == v.guildId ? {} : {
            [v.guildId]: r
          },
          userSettings: L,
          userGuildSettings: G,
          readStates: M
        })
      }), l.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), w.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(d, "\n          selected_channel: ").concat(u, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            private_channels: ").concat(R.length, "\n            channel_history:\n              guild: ").concat(v.guildId, "\n              channel: ").concat(v.channelId, "\n              messages: ").concat(v.messages.length, "\n                members: ").concat(v.members.length, "\n                users: ").concat(v.users.length, "\n            initial_guild:\n              id: ").concat(_, "\n              channels: ").concat(null == (a = P.channels) ? true : a.length, "\n            user_settings: ").concat(Object.keys(L).length, "\n            read_states: ").concat(M.length, "\n            user_guild_settings: ").concat(G.length, "\n      )")), w.verbose("finished dispatching CACHE_LOADED"), [true, i && null != _ ? _ : null, R.length]
  }
}
let K = false;
async function z(e, t) {
  var n, r;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      K = true;
      break;
    case "other":
      "@me" === t.guildId && (K = true)
  }
  if (K) return null != (r = await (0, c.kk)(() => l.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.A.getAsync(e)))) ? r : [];
  let i = null != (n = (await m.A.getCommittedVersions()).initial_guild_id) ? n : t.guildId;
  if (null == i || "@me" === i) return [];
  let s = await (0, c.kk)(() => u.A.getOneAsync(e, i));
  return null != s ? [s] : []
}
async function Z(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await m.A.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return w.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let r = n;
  return {
    channels: await (0, c.kk)(() => b.A.getAsync(e, r)),
    guildId: n
  }
}
async function X(e, t, n, r) {
  w.verbose("loading late lazy cache");
  let [i, s, a] = await T.A.fetchLazyCache.measureAsync(() => Promise.all([(0, c.kk)(() => null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => _.A.okAsync(e)) : Promise.resolve(true)), (0, c.kk)(() => null == e || K ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.A.getAsync(e))), (0, c.kk)(() => null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => d.A.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), p = await T.A.fetchStaleChannels.measureAsync(() => null != e && null != a && a.stale.length > 0 ? (0, c.kk)(() => {
    var t;
    return t = a.stale, w.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => b.A.getAsync(e, t).then(e => [t, e])))
  }) : Promise.resolve([]));
  C.iQ.getCachedEnabled() ? w.verbose("loadLateLazyCache: not yielding to react") : (w.verbose("loadLateLazyCache: yielding to react"), await (0, E.i)((0, j.isIOS)() ? 0 : true)), T.A.loadLazyCache.recordStart();
  let m = x.A.getSocket();
  q(() => {
    let l = performance.now();
    if (false === i) {
      (0, D.A)("database:not_ok"), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == s || null == a || null == p) {
      (0, D.A)("database:load_failed"), w.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != a, "\n          guild_channels: ").concat(null != p, "\n          guilds: ").concat(null != s, "\n        )")), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == i && (s.length > 0 || a.all.length > 0)) {
      (0, D.A)("database:versionless"), w.log("kv_cache was not ok (null version with values)"), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (H) {
      (0, D.A)("already_connected"), w.log("Skipping lazy cache; already connected."), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    m.addAnalytics({
      hadCacheAtStartup: true
    });
    let c = {
      type: "CACHE_LOADED_LAZY",
      guilds: s,
      guildChannels: p,
      basicGuildChannels: a.channels,
      initialGuildId: n
    };
    T.A.deserializeCache.measure(() => {
      null != c.channels && (0, R.Ay)(c.channels), null != c.privateChannels && (0, R.Ay)(c.privateChannels), null != c.guildChannels && (0, R.X3)(c.guildChannels)
    }), T.A.dispatchLazyCache.measure(() => o.h.dispatch(c)), w.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - l, "ms)")), m.addAnalytics({
      usedCacheAtStartup: true
    });
    let d = p.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      u = p.length,
      _ = a.all.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      g = a.channels.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      A = _ - g,
      f = 0 === a.stale.length ? "" : " \xb7 ".concat(a.stale.join(", "));
    w.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(i, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            guilds: ").concat(s.length, "\n            basic_channels:\n              total: ").concat(_, " (").concat(a.channels.length, " guilds)\n              stale: ").concat(A, " (").concat(a.stale.length, " guilds").concat(f, ")\n              unstale: ").concat(g, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(d, " (").concat(p.length, " guilds)\n      )")), T.A.setCacheInfo({
      guilds: s.length,
      privateChannels: r,
      basicChannels: _,
      basicChannelsStale: A,
      fullChannels: d,
      fullChannelGuilds: u
    })
  })
}

function q(e) {
  let t = x.A.getSocket(),
    n = false;
  s.Ay.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        w.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = true, T.A.loadLazyCache.recordEnd(), w.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        w.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      w.warn("Lazy cache has encountered error", e), o.h.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), n || T.A.loadLazyCache.recordEnd()
}
class J extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(I.default, x.A, N.A, y.A), M || x.A.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !M || B
  }
  getLazyCacheStatus() {
    return M ? U : "no-cache"
  }
  get lastWriteTime() {
    return k
  }
  canWriteCaches(e) {
    return (0, v.wR)() ? G ? (w.log("Not writing cache because caches cleared"), false) : !!e || !!V || (w.log("Not writing cache because never connected"), false) : (w.log("Not writing cache because not authenticated"), false)
  }
  async loadCacheAsync(e, t) {
    let n = (0, P.q)(t);
    if ("initializing" !== U) {
      (0, D.A)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null == (t = x.A.getSocket()) || null == (e = t.dispatcher) ? true : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = I.default.getId(),
        r = h.A.carefullyOpenDatabase(t),
        [i, l, s] = await T.A.loadMiniCache.measureAsync(() => W(r, t, e));
      i ? (n(), await X(r, t, l, s)) : (n(), await (q(() => o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      w.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, D.A)("cache:exception"), n(), o.h.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}(i = "displayName") in J ? Object.defineProperty(J, i, {
  value: "CacheStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : J[i] = "CacheStore", new J(Chunk73153.h, M ? {
  CONNECTION_OPEN: function() {
    return H = true, V = true, false
  },
  LOGOUT: F,
  CONNECTION_CLOSED: function() {
    return H = false, V = true, false
  },
  CACHE_LOADED: function() {
    B = true
  },
  CACHE_LOADED_LAZY: function() {
    B = true, U = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    U = "no-cache"
  },
  CLEAR_CACHES: F,
  WRITE_CACHES: function() {
    w.verbose("Writing cache now"), k = Date.now(), B = true, a.w.remove(L.j_2), a.w.remove(L.XYq), a.w.remove(L.CT4)
  }
} : {})