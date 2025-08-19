/** Chunk was on 66181 **/
/** chunk id: 758182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => R
}), require("./388685.js"), require("./467055.js"), require("./49124.js");
var i, r, Chunk135273 = require("./135273.js");
require("./724522.js");
var Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk86670 = require("./86670.js"),
  Chunk261375 = require("./261375.js"),
  Chunk17567 = require("./17567.js"),
  Chunk795513 = require("./795513.js"),
  Chunk685736 = require("./685736.js"),
  Chunk266750 = require("./266750.js"),
  Chunk768910 = require("./768910.js"),
  Chunk632093 = require("./632093.js"),
  Chunk347994 = require("./347994.js"),
  Chunk591526 = require("./591526.js"),
  Chunk261875 = require("./261875.js"),
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk218543 = require("./218543.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk449934 = require("./449934.js"),
  Chunk576376 = require("./576376.js"),
  Chunk38217 = require("./38217.js"),
  Chunk864631 = require("./864631.js"),
  Chunk981631 = require("./981631.js");
let P = new Chunk710845.Z("CacheStore"),
  R = false,
  D = false,
  Z = "initializing",
  w = 0,
  k = false,
  L = false,
  B = false;

function M(e) {
  P.log("Clearing cache store"), w = Date.now(), l.K.remove(A.FsG), l.K.remove(A.ihW), l.K.remove(A.O42), Z = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (D = true)
}
async function U(e, t, n) {
  let i = performance.now();
  if (null == e || null == n) return P.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - i, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let r = await p.ZP.startupLoad(e, t, n, A.AQB);
    P.verbose("loaded ".concat(r.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let s = {
      guildId: t,
      channelId: n,
      users: r.users,
      members: r.members,
      messages: r.messages
    };
    return [performance.now() - i, s]
  }
}
async function V(e, t, n) {
  var i, r, l;
  P.verbose("loading early cache");
  let c = E.Z.getSocket();
  c.connect();
  let d = null != (i = S.Z.getGuildId()) ? i : null,
    u = null != (r = v.Z.getChannelId()) ? r : null,
    m = performance.now(),
    p = C.Z.loadCachedMessages.measureAsyncWithoutNesting(() => U(e, d, u)),
    g = C.Z.fetchGuildCache.measureAsync(() => F(e, n)),
    _ = C.Z.fetchGuildCache.measureAsync(() => H(e, n)),
    j = null != e ? s.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => x.Z.getAsync(e, null)) : Promise.resolve([]),
    O = null == e ? Promise.resolve({}) : s.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => b.Z.getAll(e)),
    T = null == e ? Promise.resolve([]) : s.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => h.Z.getAll(e)),
    N = null == e ? Promise.resolve([]) : s.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => f.Z.getAll(e)),
    [
      [I, A], R, D, Z, w, k, L
    ] = await Promise.all([p, g, _, j, O, T, N]),
    B = performance.now() - m;
  if (P.verbose("cache loaded in ".concat(B, "ms (channel_history ").concat(I, "ms)")), null == A) return (0, y.Z)("database:history_cache_null"), P.verbose("finished without dispatching CACHE_LOADED"), [false, null, 0];
  {
    let i = Object.fromEntries(A.members.map(e => [e.userId, e])),
      r = null != D.guildId && null != D.channels,
      m = D.guildId;
    return a.ZP.Emitter.batched(() => {
      s.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return o.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: R,
          privateChannels: Z,
          initialGuildChannels: null != (e = D.channels) ? e : [],
          users: [...A.users],
          messages: null == A.channelId ? {} : {
            [A.channelId]: A.messages
          },
          guildMembers: null == A.guildId ? {} : {
            [A.guildId]: i
          },
          userSettings: w,
          userGuildSettings: L,
          readStates: k
        })
      }), s.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), P.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(d, "\n          selected_channel: ").concat(u, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            private_channels: ").concat(Z.length, "\n            channel_history:\n              guild: ").concat(A.guildId, "\n              channel: ").concat(A.channelId, "\n              messages: ").concat(A.messages.length, "\n                members: ").concat(A.members.length, "\n                users: ").concat(A.users.length, "\n            initial_guild:\n              id: ").concat(m, "\n              channels: ").concat(null == (l = D.channels) ? true : l.length, "\n            user_settings: ").concat(Object.keys(w).length, "\n            read_states: ").concat(k.length, "\n            user_guild_settings: ").concat(L.length, "\n      )")), P.verbose("finished dispatching CACHE_LOADED"), [true, r && null != m ? m : null, Z.length]
  }
}
let G = false;
async function F(e, t) {
  var n, i;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      G = true;
      break;
    case "other":
      "@me" === t.guildId && (G = true)
  }
  if (G) return null != (n = await (0, c.dI)(() => s.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.Z.getAsync(e)))) ? n : [];
  let r = null != (i = (await g.Z.getCommittedVersions()).initial_guild_id) ? i : t.guildId;
  if (null == r || "@me" === r) return [];
  let a = await (0, c.dI)(() => u.Z.getOneAsync(e, r));
  return null != a ? [a] : []
}
async function H(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await g.Z.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return P.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let i = n;
  return {
    channels: await (0, c.dI)(() => x.Z.getAsync(e, i)),
    guildId: n
  }
}
async function z(e, t, n, i) {
  P.verbose("loading late lazy cache");
  let [r, a, l] = await C.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, c.dI)(() => null != e ? s.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => m.Z.okAsync(e)) : Promise.resolve(true)), (0, c.dI)(() => null == e || G ? Promise.resolve([]) : s.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.Z.getAsync(e))), (0, c.dI)(() => null != e ? s.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => d.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), p = await C.Z.fetchStaleChannels.measureAsync(() => null != e && null != l && l.stale.length > 0 ? (0, c.dI)(() => {
    var t;
    return t = l.stale, P.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => x.Z.getAsync(e, t).then(e => [t, e])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), C.Z.loadLazyCache.recordStart();
  let g = E.Z.getSocket();
  W(() => {
    let s = performance.now();
    if (false === r) {
      (0, y.Z)("database:not_ok"), o.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), o.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a || null == l || null == p) {
      (0, y.Z)("database:load_failed"), P.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != l, "\n          guild_channels: ").concat(null != p, "\n          guilds: ").concat(null != a, "\n        )")), o.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), o.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == r && (a.length > 0 || l.all.length > 0)) {
      (0, y.Z)("database:versionless"), P.log("kv_cache was not ok (null version with values)"), o.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), o.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (L) {
      (0, y.Z)("already_connected"), P.log("Skipping lazy cache; already connected."), o.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    g.addAnalytics({
      hadCacheAtStartup: true
    });
    let c = {
      type: "CACHE_LOADED_LAZY",
      guilds: a,
      guildChannels: p,
      basicGuildChannels: l.channels,
      initialGuildId: n
    };
    C.Z.deserializeCache.measure(() => {
      null != c.channels && (0, I.ZP)(c.channels), null != c.privateChannels && (0, I.ZP)(c.privateChannels), null != c.guildChannels && (0, I._$)(c.guildChannels)
    }), C.Z.dispatchLazyCache.measure(() => o.Z.dispatch(c)), P.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - s, "ms)")), g.addAnalytics({
      usedCacheAtStartup: true
    });
    let d = p.reduce((e, t) => {
        let [n, i] = t;
        return e + i.length
      }, 0),
      u = p.length,
      m = l.all.reduce((e, t) => {
        let [n, i] = t;
        return e + i.length
      }, 0),
      h = l.channels.reduce((e, t) => {
        let [n, i] = t;
        return e + i.length
      }, 0),
      f = m - h,
      b = 0 === l.stale.length ? "" : " \xb7 ".concat(l.stale.join(", "));
    P.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(r, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            guilds: ").concat(a.length, "\n            basic_channels:\n              total: ").concat(m, " (").concat(l.channels.length, " guilds)\n              stale: ").concat(f, " (").concat(l.stale.length, " guilds").concat(b, ")\n              unstale: ").concat(h, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(d, " (").concat(p.length, " guilds)\n      )")), C.Z.setCacheInfo({
      guilds: a.length,
      privateChannels: i,
      basicChannels: m,
      basicChannelsStale: f,
      fullChannels: d,
      fullChannelGuilds: u
    })
  })
}

function W(e) {
  let t = E.Z.getSocket(),
    n = false;
  a.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        P.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = true, C.Z.loadLazyCache.recordEnd(), P.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        P.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      P.warn("Lazy cache has encountered error", e), o.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), n || C.Z.loadLazyCache.recordEnd()
}
class Y extends(i = Chunk442837.ZP.Store) {
  initialize() {
    R || Chunk38618.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !R || k
  }
  getLazyCacheStatus() {
    return R ? Z : "no-cache"
  }
  get lastWriteTime() {
    return w
  }
  canWriteCaches(e) {
    return (0, T.$8)() ? D ? (P.log("Not writing cache because caches cleared"), false) : !!e || !!B || (P.log("Not writing cache because never connected"), false) : (P.log("Not writing cache because not authenticated"), false)
  }
  async loadCacheAsync(e, t) {
    let n = (0, N.h)(t);
    if ("initializing" !== Z) {
      (0, y.Z)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null == (t = E.Z.getSocket()) || null == (e = t.dispatcher) ? true : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = O.default.getId(),
        i = _.Z.carefullyOpenDatabase(t),
        [r, s, a] = await C.Z.loadMiniCache.measureAsync(() => V(i, t, e));
      r ? (n(), await z(i, t, s, a)) : (n(), await (W(() => o.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      P.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, y.Z)("cache:exception"), n(), o.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}(r = "displayName") in Y ? Object.defineProperty(Y, r, {
  value: "CacheStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Y[r] = "CacheStore", new Y(Chunk570140.Z, R ? {
  CONNECTION_OPEN: function() {
    return L = true, B = true, false
  },
  LOGOUT: M,
  CONNECTION_CLOSED: function() {
    return L = false, B = true, false
  },
  CACHE_LOADED: function() {
    k = true
  },
  CACHE_LOADED_LAZY: function() {
    k = true, Z = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    Z = "no-cache"
  },
  CLEAR_CACHES: M,
  WRITE_CACHES: function() {
    P.verbose("Writing cache now"), w = Date.now(), k = true, Chunk433517.K.remove(Chunk981631.FsG), Chunk433517.K.remove(Chunk981631.O42), Chunk433517.K.remove(Chunk981631.ihW)
  }
} : {})