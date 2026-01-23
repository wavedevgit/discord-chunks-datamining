/** Chunk was on web.js **/
/** chunk id: 569024, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => M
}), require("./896048.js"), require("./446912.js"), require("./457529.js");
var r, Chunk61090 = require("./61090.js");
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

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let j = new Chunk626584.A("CacheStore"),
  M = false,
  k = false,
  U = "initializing",
  G = 0,
  V = false,
  F = false,
  B = false;

function H() {
  return F = true, B = true, false
}

function Y() {
  return F = false, B = true, false
}

function W() {
  V = true
}

function K() {
  V = true, U = "cache-loaded"
}

function z() {
  U = "no-cache"
}

function q(e) {
  j.log("Clearing cache store"), G = Date.now(), s.w.remove(x.j_2), s.w.remove(x.CT4), s.w.remove(x.XYq), U = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (k = true)
}

function X() {
  j.verbose("Writing cache now"), G = Date.now(), V = true, s.w.remove(x.j_2), s.w.remove(x.XYq), s.w.remove(x.CT4)
}

function Z(e) {
  null != e.channels && (0, P.Ay)(e.channels), null != e.privateChannels && (0, P.Ay)(e.privateChannels), null != e.guildChannels && (0, P.X3)(e.guildChannels)
}
async function Q(e, t, n) {
  let r = performance.now();
  if (null != e && null != n) {
    let i = await f.Ay.startupLoad(e, t, n, x.EMb);
    j.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let a = {
      guildId: t,
      channelId: n,
      users: i.users,
      members: i.members,
      messages: i.messages
    };
    return A.A.recordChannelFetchedLocal(n, A.a, null, null, x.EMb, i.messages), [performance.now() - r, a]
  } {
    let t = {
      guildId: null,
      channelId: null,
      users: [],
      members: [],
      messages: []
    };
    return j.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - r, t]
  }
}
async function $(e, t, n) {
  var r, s, l;
  j.verbose("loading early cache");
  let c = O.A.getSocket();
  c.connect();
  let u = null != (r = N.A.getGuildId()) ? r : null,
    d = null != (s = C.A.getChannelId()) ? s : null,
    f = performance.now(),
    p = I.A.loadCachedMessages.measureAsyncWithoutNesting(() => Q(e, u, d)),
    E = I.A.fetchGuildCache.measureAsync(() => et(e, n)),
    y = I.A.fetchGuildCache.measureAsync(() => en(e, n)),
    b = null != e ? i.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.A.getAsync(e, null)) : Promise.resolve([]),
    v = null == e ? Promise.resolve({}) : i.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => m.A.getAll(e)),
    A = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => _.A.getAll(e)),
    S = null == e ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => h.A.getAll(e)),
    [
      [T, R], w, P, x, L, M, k
    ] = await Promise.all([p, E, y, b, v, A, S]),
    U = performance.now() - f;
  if (j.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(T, "ms)")), null == R) return (0, D.A)("database:history_cache_null"), j.verbose("finished without dispatching CACHE_LOADED"), [false, null, 0];
  {
    let r = Object.fromEntries(R.members.map(e => [e.userId, e])),
      s = null != P.guildId && null != P.channels,
      f = P.guildId;
    return a.Ay.Emitter.batched(() => {
      i.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return o.h.dispatch({
          type: "CACHE_LOADED",
          guilds: w,
          privateChannels: x,
          initialGuildChannels: null != (e = P.channels) ? e : [],
          users: [...R.users],
          messages: null == R.channelId ? {} : {
            [R.channelId]: R.messages
          },
          guildMembers: null == R.guildId ? {} : {
            [R.guildId]: r
          },
          userSettings: L,
          userGuildSettings: k,
          readStates: M
        })
      }), i.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), j.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(u, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            private_channels: ").concat(x.length, "\n            channel_history:\n              guild: ").concat(R.guildId, "\n              channel: ").concat(R.channelId, "\n              messages: ").concat(R.messages.length, "\n                members: ").concat(R.members.length, "\n                users: ").concat(R.users.length, "\n            initial_guild:\n              id: ").concat(f, "\n              channels: ").concat(null == (l = P.channels) ? true : l.length, "\n            user_settings: ").concat(Object.keys(L).length, "\n            read_states: ").concat(M.length, "\n            user_guild_settings: ").concat(k.length, "\n      )")), j.verbose("finished dispatching CACHE_LOADED"), [true, s && null != f ? f : null, x.length]
  }
}

function J() {
  return ea(() => o.h.dispatch({
    type: "CACHE_LOADED_LAZY_NO_CACHE"
  })), Promise.resolve()
}
let ee = false;
async function et(e, t) {
  var n, r;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      ee = true;
      break;
    case "other":
      "@me" === t.guildId && (ee = true)
  }
  if (ee) return null != (r = await (0, l.kk)(() => i.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.A.getAsync(e)))) ? r : [];
  let a = null != (n = (await p.A.getCommittedVersions()).initial_guild_id) ? n : t.guildId;
  if (null == a || "@me" === a) return [];
  let s = await (0, l.kk)(() => u.A.getOneAsync(e, a));
  return null != s ? [s] : []
}
async function en(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await p.A.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return j.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let r = n;
  return {
    channels: await (0, l.kk)(() => g.A.getAsync(e, r)),
    guildId: n
  }
}

function er(e, t) {
  return j.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => g.A.getAsync(e, t).then(e => [t, e])))
}
async function ei(e, t, n, r) {
  j.verbose("loading late lazy cache");
  let [a, s, f] = await I.A.fetchLazyCache.measureAsync(() => Promise.all([(0, l.kk)(() => null != e ? i.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.A.okAsync(e)) : Promise.resolve(true)), (0, l.kk)(() => null == e || ee ? Promise.resolve([]) : i.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.A.getAsync(e))), (0, l.kk)(() => null != e ? i.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => c.A.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), p = await I.A.fetchStaleChannels.measureAsync(() => null != e && null != f && f.stale.length > 0 ? (0, l.kk)(() => er(e, f.stale)) : Promise.resolve([]));
  if ((0, S.O)()) {
    var _;
    null != n && ((null == s ? true : s.some(e => e.id === n)) || (null == f || null == (_ = f.all) ? true : _.some(e => {
      let [t] = e;
      return t === n
    }))) ? (j.verbose("loadLateLazyCache: waiting for TTI (TTI automation with cached initial guild)"), await (0, y.i)()) : j.verbose("loadLateLazyCache: not waiting for TTI or yielding to react (TTI automation with no cached initial guild)")
  } else v.iQ.getCachedEnabled() ? j.verbose("loadLateLazyCache: not yielding to react") : (j.verbose("loadLateLazyCache: yielding to react"), await new Promise(e => setTimeout(e, 0)));
  I.A.loadLazyCache.recordStart();
  let h = O.A.getSocket();
  ea(() => {
    let i = performance.now();
    if (false === a) {
      (0, D.A)("database:not_ok"), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == s || null == f || null == p) {
      (0, D.A)("database:load_failed"), j.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != f, "\n          guild_channels: ").concat(null != p, "\n          guilds: ").concat(null != s, "\n        )")), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a && (s.length > 0 || f.all.length > 0)) {
      (0, D.A)("database:versionless"), j.log("kv_cache was not ok (null version with values)"), o.h.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (F) {
      (0, D.A)("already_connected"), j.log("Skipping lazy cache; already connected."), o.h.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    h.addAnalytics({
      hadCacheAtStartup: true
    });
    let l = {
      type: "CACHE_LOADED_LAZY",
      guilds: s,
      guildChannels: p,
      basicGuildChannels: f.channels,
      initialGuildId: n
    };
    I.A.deserializeCache.measure(() => Z(l)), I.A.dispatchLazyCache.measure(() => o.h.dispatch(l)), j.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")), h.addAnalytics({
      usedCacheAtStartup: true
    });
    let c = p.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      u = p.length,
      d = f.all.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      _ = f.channels.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      m = d - _,
      g = 0 === f.stale.length ? "" : " \xb7 ".concat(f.stale.join(", "));
    j.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(a, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            guilds: ").concat(s.length, "\n            basic_channels:\n              total: ").concat(d, " (").concat(f.channels.length, " guilds)\n              stale: ").concat(m, " (").concat(f.stale.length, " guilds").concat(g, ")\n              unstale: ").concat(_, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(c, " (").concat(p.length, " guilds)\n      )")), I.A.setCacheInfo({
      guilds: s.length,
      privateChannels: r,
      basicChannels: d,
      basicChannelsStale: m,
      fullChannels: c,
      fullChannelGuilds: u
    })
  })
}

function ea(e) {
  let t = O.A.getSocket(),
    n = false;
  a.Ay.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = true, I.A.loadLazyCache.recordEnd(), j.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        j.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      j.warn("Lazy cache has encountered error", e), o.h.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), n || I.A.loadLazyCache.recordEnd()
}
class es extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(T.default, O.A, C.A, N.A), M || O.A.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !M || V
  }
  getLazyCacheStatus() {
    return M ? U : "no-cache"
  }
  get lastWriteTime() {
    return G
  }
  canWriteCaches(e) {
    return (0, R.wR)() ? k ? (j.log("Not writing cache because caches cleared"), false) : !!e || !!B || (j.log("Not writing cache because never connected"), false) : (j.log("Not writing cache because not authenticated"), false)
  }
  async loadCacheAsync(e, t) {
    let n = (0, w.q)(t);
    if ("initializing" !== U) {
      (0, D.A)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null == (t = O.A.getSocket()) || null == (e = t.dispatcher) ? true : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = T.default.getId(),
        r = E.A.carefullyOpenDatabase(t),
        [i, a, s] = await I.A.loadMiniCache.measureAsync(() => $(r, t, e));
      i ? (n(), await ei(r, t, a, s)) : (n(), await J())
    } catch (e) {
      j.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, D.A)("cache:exception"), n(), o.h.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
L(es, "displayName", "CacheStore"), new es(Chunk73153.h, M ? {
  CONNECTION_OPEN: H,
  LOGOUT: q,
  CONNECTION_CLOSED: Y,
  CACHE_LOADED: W,
  CACHE_LOADED_LAZY: K,
  CACHE_LOADED_LAZY_NO_CACHE: z,
  CLEAR_CACHES: q,
  WRITE_CACHES: X
} : {})