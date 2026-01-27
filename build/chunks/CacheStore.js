/** Chunk was on 60667 **/
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
  Chunk778920 = require("./778920.js"),
  Chunk961350 = require("./961350.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk612181 = require("./612181.js"),
  Chunk837367 = require("./837367.js"),
  Chunk736400 = require("./736400.js"),
  Chunk424234 = require("./424234.js"),
  Chunk652215 = require("./652215.js");
let L = new Chunk626584.A("CacheStore"),
  M = false,
  U = false,
  G = "initializing",
  k = 0,
  V = false,
  H = false,
  B = false;

function F(e) {
  L.log("Clearing cache store"), k = Date.now(), a.w.remove(w.j_2), a.w.remove(w.CT4), a.w.remove(w.XYq), G = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (U = true)
}
async function Y(e, t, n) {
  let r = performance.now();
  if (null == e || null == n) return L.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - r, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let i = await p.Ay.startupLoad(e, t, n, w.EMb);
    L.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let l = {
      guildId: t,
      channelId: n,
      users: i.users,
      members: i.members,
      messages: i.messages
    };
    return I.A.recordChannelFetchedLocal(n, I.a, null, null, w.EMb, i.messages), [performance.now() - r, l]
  }
}
async function W(e, t, n) {
  var r, i, a;
  L.verbose("loading early cache");
  let c = O.A.getSocket();
  c.connect();
  let d = null != (r = N.A.getGuildId()) ? r : null,
    u = null != (i = v.A.getChannelId()) ? i : null,
    _ = performance.now(),
    p = T.A.loadCachedMessages.measureAsyncWithoutNesting(() => Y(e, d, u)),
    m = T.A.fetchGuildCache.measureAsync(() => K(e, n)),
    b = T.A.fetchGuildCache.measureAsync(() => Z(e, n)),
    E = null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => h.A.getAsync(e, null)) : Promise.resolve([]),
    x = null == e ? Promise.resolve({}) : l.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => f.A.getAll(e)),
    C = null == e ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => g.A.getAll(e)),
    I = null == e ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => A.A.getAll(e)),
    [
      [S, j], y, P, R, w, M, U
    ] = await Promise.all([p, m, b, E, x, C, I]),
    G = performance.now() - _;
  if (L.verbose("cache loaded in ".concat(G, "ms (channel_history ").concat(S, "ms)")), null == j) return (0, D.A)("database:history_cache_null"), L.verbose("finished without dispatching CACHE_LOADED"), [false, null, 0];
  {
    let r = Object.fromEntries(j.members.map(e => [e.userId, e])),
      i = null != P.guildId && null != P.channels,
      _ = P.guildId;
    return s.Ay.Emitter.batched(() => {
      l.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return o.h.dispatch({
          type: "CACHE_LOADED",
          guilds: y,
          privateChannels: R,
          initialGuildChannels: null != (e = P.channels) ? e : [],
          users: [...j.users],
          messages: null == j.channelId ? {} : {
            [j.channelId]: j.messages
          },
          guildMembers: null == j.guildId ? {} : {
            [j.guildId]: r
          },
          userSettings: w,
          userGuildSettings: U,
          readStates: M
        })
      }), l.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), L.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(d, "\n          selected_channel: ").concat(u, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            private_channels: ").concat(R.length, "\n            channel_history:\n              guild: ").concat(j.guildId, "\n              channel: ").concat(j.channelId, "\n              messages: ").concat(j.messages.length, "\n                members: ").concat(j.members.length, "\n                users: ").concat(j.users.length, "\n            initial_guild:\n              id: ").concat(_, "\n              channels: ").concat(null == (a = P.channels) ? true : a.length, "\n            user_settings: ").concat(Object.keys(w).length, "\n            read_states: ").concat(M.length, "\n            user_guild_settings: ").concat(U.length, "\n      )")), L.verbose("finished dispatching CACHE_LOADED"), [true, i && null != _ ? _ : null, R.length]
  }
}
let z = false;
async function K(e, t) {
  var n, r;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      z = true;
      break;
    case "other":
      "@me" === t.guildId && (z = true)
  }
  if (z) return null != (r = await (0, c.kk)(() => l.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.A.getAsync(e)))) ? r : [];
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
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return L.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let r = n;
  return {
    channels: await (0, c.kk)(() => h.A.getAsync(e, r)),
    guildId: n
  }
}
async function X(e, t, n, r) {
  L.verbose("loading late lazy cache");
  let [i, s, a] = await T.A.fetchLazyCache.measureAsync(() => Promise.all([(0, c.kk)(() => null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => _.A.okAsync(e)) : Promise.resolve(true)), (0, c.kk)(() => null == e || z ? Promise.resolve([]) : l.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.A.getAsync(e))), (0, c.kk)(() => null != e ? l.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => d.A.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), p = await T.A.fetchStaleChannels.measureAsync(() => null != e && null != a && a.stale.length > 0 ? (0, c.kk)(() => {
    var t;
    return t = a.stale, L.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => h.A.getAsync(e, t).then(e => [t, e])))
  }) : Promise.resolve([]));
  if ((0, S.O)()) {
    var m;
    null != n && ((null == s ? true : s.some(e => e.id === n)) || (null == a || null == (m = a.all) ? true : m.some(e => {
      let [t] = e;
      return t === n
    }))) ? (L.verbose("loadLateLazyCache: waiting for TTI (TTI automation with cached initial guild)"), await (0, E.i)()) : L.verbose("loadLateLazyCache: not waiting for TTI or yielding to react (TTI automation with no cached initial guild)")
  } else C.iQ.getCachedEnabled() ? L.verbose("loadLateLazyCache: not yielding to react") : (L.verbose("loadLateLazyCache: yielding to react"), await new Promise(e => setTimeout(e, 0)));
  T.A.loadLazyCache.recordStart();
  let g = O.A.getSocket();
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
      (0, D.A)("database:load_failed"), L.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != a, "\n          guild_channels: ").concat(null != p, "\n          guilds: ").concat(null != s, "\n        )")), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == i && (s.length > 0 || a.all.length > 0)) {
      (0, D.A)("database:versionless"), L.log("kv_cache was not ok (null version with values)"), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (H) {
      (0, D.A)("already_connected"), L.log("Skipping lazy cache; already connected."), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    g.addAnalytics({
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
    }), T.A.dispatchLazyCache.measure(() => o.h.dispatch(c)), L.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - l, "ms)")), g.addAnalytics({
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
      m = a.channels.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      A = _ - m,
      f = 0 === a.stale.length ? "" : " \xb7 ".concat(a.stale.join(", "));
    L.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(i, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            guilds: ").concat(s.length, "\n            basic_channels:\n              total: ").concat(_, " (").concat(a.channels.length, " guilds)\n              stale: ").concat(A, " (").concat(a.stale.length, " guilds").concat(f, ")\n              unstale: ").concat(m, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(d, " (").concat(p.length, " guilds)\n      )")), T.A.setCacheInfo({
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
  let t = O.A.getSocket(),
    n = false;
  s.Ay.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = true, T.A.loadLazyCache.recordEnd(), L.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      L.warn("Lazy cache has encountered error", e), o.h.dispatch({
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
    this.waitFor(j.default, O.A, v.A, N.A), M || O.A.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !M || V
  }
  getLazyCacheStatus() {
    return M ? G : "no-cache"
  }
  get lastWriteTime() {
    return k
  }
  canWriteCaches(e) {
    return (0, y.wR)() ? U ? (L.log("Not writing cache because caches cleared"), false) : !!e || !!B || (L.log("Not writing cache because never connected"), false) : (L.log("Not writing cache because not authenticated"), false)
  }
  async loadCacheAsync(e, t) {
    let n = (0, P.q)(t);
    if ("initializing" !== G) {
      (0, D.A)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null == (t = O.A.getSocket()) || null == (e = t.dispatcher) ? true : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = j.default.getId(),
        r = b.A.carefullyOpenDatabase(t),
        [i, l, s] = await T.A.loadMiniCache.measureAsync(() => W(r, t, e));
      i ? (n(), await X(r, t, l, s)) : (n(), await (q(() => o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      L.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, D.A)("cache:exception"), n(), o.h.dispatch({
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
    return H = true, B = true, false
  },
  LOGOUT: F,
  CONNECTION_CLOSED: function() {
    return H = false, B = true, false
  },
  CACHE_LOADED: function() {
    V = true
  },
  CACHE_LOADED_LAZY: function() {
    V = true, G = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    G = "no-cache"
  },
  CLEAR_CACHES: F,
  WRITE_CACHES: function() {
    L.verbose("Writing cache now"), k = Date.now(), V = true, a.w.remove(w.j_2), a.w.remove(w.XYq), a.w.remove(w.CT4)
  }
} : {})