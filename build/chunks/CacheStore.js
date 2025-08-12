/** Chunk was on 20501 **/
/** chunk id: 758182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => D
}), require("./388685.js"), require("./467055.js"), require("./49124.js");
var i, r, s, Chunk135273 = require("./135273.js");
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
let R = new Chunk710845.Z("CacheStore"),
  D = false,
  Z = false,
  w = "initializing",
  k = 0,
  L = false,
  M = false,
  B = false;

function U(e) {
  R.log("Clearing cache store"), k = Date.now(), o.K.remove(P.FsG), o.K.remove(P.ihW), o.K.remove(P.O42), w = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (Z = true)
}
async function V(e, t, n) {
  let i = performance.now();
  if (null == e || null == n) return R.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - i, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let r = await g.ZP.startupLoad(e, t, n, P.AQB);
    R.verbose("loaded ".concat(r.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
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
async function G(e, t, n) {
  var i, r, s;
  R.verbose("loading early cache");
  let o = C.Z.getSocket();
  o.connect();
  let d = null != (i = T.Z.getGuildId()) ? i : null,
    u = null != (r = S.Z.getChannelId()) ? r : null,
    m = performance.now(),
    p = O.Z.loadCachedMessages.measureAsyncWithoutNesting(() => V(e, d, u)),
    g = O.Z.fetchGuildCache.measureAsync(() => H(e, n)),
    h = O.Z.fetchGuildCache.measureAsync(() => z(e, n)),
    j = null != e ? a.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => _.Z.getAsync(e, null)) : Promise.resolve([]),
    E = null == e ? Promise.resolve({}) : a.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => x.Z.getAll(e)),
    v = null == e ? Promise.resolve([]) : a.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => f.Z.getAll(e)),
    I = null == e ? Promise.resolve([]) : a.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => b.Z.getAll(e)),
    [
      [N, y], P, D, Z, w, k, L
    ] = await Promise.all([p, g, h, j, E, v, I]),
    M = performance.now() - m;
  if (R.verbose("cache loaded in ".concat(M, "ms (channel_history ").concat(N, "ms)")), null == y) return (0, A.Z)("database:history_cache_null"), R.verbose("finished without dispatching CACHE_LOADED"), [false, null, 0];
  {
    let i = Object.fromEntries(y.members.map(e => [e.userId, e])),
      r = null != D.guildId && null != D.channels,
      m = D.guildId;
    return l.ZP.Emitter.batched(() => {
      a.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return c.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: P,
          privateChannels: Z,
          initialGuildChannels: null != (e = D.channels) ? e : [],
          users: [...y.users],
          messages: null == y.channelId ? {} : {
            [y.channelId]: y.messages
          },
          guildMembers: null == y.guildId ? {} : {
            [y.guildId]: i
          },
          userSettings: w,
          userGuildSettings: L,
          readStates: k
        })
      }), a.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => o.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), R.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(d, "\n          selected_channel: ").concat(u, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            private_channels: ").concat(Z.length, "\n            channel_history:\n              guild: ").concat(y.guildId, "\n              channel: ").concat(y.channelId, "\n              messages: ").concat(y.messages.length, "\n                members: ").concat(y.members.length, "\n                users: ").concat(y.users.length, "\n            initial_guild:\n              id: ").concat(m, "\n              channels: ").concat(null == (s = D.channels) ? true : s.length, "\n            user_settings: ").concat(Object.keys(w).length, "\n            read_states: ").concat(k.length, "\n            user_guild_settings: ").concat(L.length, "\n      )")), R.verbose("finished dispatching CACHE_LOADED"), [true, r && null != m ? m : null, Z.length]
  }
}
let F = false;
async function H(e, t) {
  var n, i;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      F = true;
      break;
    case "other":
      "@me" === t.guildId && (F = true)
  }
  if (F) return null != (n = await (0, d.dI)(() => a.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => m.Z.getAsync(e)))) ? n : [];
  let r = null != (i = (await h.Z.getCommittedVersions()).initial_guild_id) ? i : t.guildId;
  if (null == r || "@me" === r) return [];
  let s = await (0, d.dI)(() => m.Z.getOneAsync(e, r));
  return null != s ? [s] : []
}
async function z(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await h.Z.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return R.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let i = n;
  return {
    channels: await (0, d.dI)(() => _.Z.getAsync(e, i)),
    guildId: n
  }
}
async function W(e, t, n, i) {
  R.verbose("loading late lazy cache");
  let [r, s, l] = await O.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, d.dI)(() => null != e ? a.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => p.Z.okAsync(e)) : Promise.resolve(true)), (0, d.dI)(() => null == e || F ? Promise.resolve([]) : a.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => m.Z.getAsync(e))), (0, d.dI)(() => null != e ? a.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => u.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), o = await O.Z.fetchStaleChannels.measureAsync(() => null != e && null != l && l.stale.length > 0 ? (0, d.dI)(() => {
    var t;
    return t = l.stale, R.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => _.Z.getAsync(e, t).then(e => [t, e])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), O.Z.loadLazyCache.recordStart();
  let g = C.Z.getSocket();
  Y(() => {
    let a = performance.now();
    if (false === r) {
      (0, A.Z)("database:not_ok"), c.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), c.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == s || null == l || null == o) {
      (0, A.Z)("database:load_failed"), R.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != l, "\n          guild_channels: ").concat(null != o, "\n          guilds: ").concat(null != s, "\n        )")), c.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), c.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == r && (s.length > 0 || l.all.length > 0)) {
      (0, A.Z)("database:versionless"), R.log("kv_cache was not ok (null version with values)"), c.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), c.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (M) {
      (0, A.Z)("already_connected"), R.log("Skipping lazy cache; already connected."), c.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    g.addAnalytics({
      hadCacheAtStartup: true
    });
    let d = {
      type: "CACHE_LOADED_LAZY",
      guilds: s,
      guildChannels: o,
      basicGuildChannels: l.channels,
      initialGuildId: n
    };
    O.Z.deserializeCache.measure(() => {
      null != d.channels && (0, y.ZP)(d.channels), null != d.privateChannels && (0, y.ZP)(d.privateChannels), null != d.guildChannels && (0, y._$)(d.guildChannels)
    }), O.Z.dispatchLazyCache.measure(() => c.Z.dispatch(d)), R.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - a, "ms)")), g.addAnalytics({
      usedCacheAtStartup: true
    });
    let u = o.reduce((e, t) => {
        let [n, i] = t;
        return e + i.length
      }, 0),
      m = o.length,
      p = l.all.reduce((e, t) => {
        let [n, i] = t;
        return e + i.length
      }, 0),
      h = l.channels.reduce((e, t) => {
        let [n, i] = t;
        return e + i.length
      }, 0),
      f = p - h,
      b = 0 === l.stale.length ? "" : " \xb7 ".concat(l.stale.join(", "));
    R.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(r, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            guilds: ").concat(s.length, "\n            basic_channels:\n              total: ").concat(p, " (").concat(l.channels.length, " guilds)\n              stale: ").concat(f, " (").concat(l.stale.length, " guilds").concat(b, ")\n              unstale: ").concat(h, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(u, " (").concat(o.length, " guilds)\n      )")), O.Z.setCacheInfo({
      guilds: s.length,
      privateChannels: i,
      basicChannels: p,
      basicChannelsStale: f,
      fullChannels: u,
      fullChannelGuilds: m
    })
  })
}

function Y(e) {
  let t = C.Z.getSocket(),
    n = false;
  l.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        R.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = true, O.Z.loadLazyCache.recordEnd(), R.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        R.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      R.warn("Lazy cache has encountered error", e), c.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), n || O.Z.loadLazyCache.recordEnd()
}
class K extends(i = Chunk442837.ZP.Store) {
  initialize() {
    D || Chunk38618.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !D || L
  }
  getLazyCacheStatus() {
    return D ? w : "no-cache"
  }
  get lastWriteTime() {
    return k
  }
  canWriteCaches(e) {
    return (0, I.$8)() ? Z ? (R.log("Not writing cache because caches cleared"), false) : !!e || !!B || (R.log("Not writing cache because never connected"), false) : (R.log("Not writing cache because not authenticated"), false)
  }
  async loadCacheAsync(e, t) {
    let n = (0, N.h)(t);
    if ("initializing" !== w) {
      (0, A.Z)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null == (t = C.Z.getSocket()) || null == (e = t.dispatcher) ? true : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = v.default.getId(),
        i = j.Z.carefullyOpenDatabase(t),
        [r, s, a] = await O.Z.loadMiniCache.measureAsync(() => G(i, t, e));
      r ? (n(), await W(i, t, s, a)) : (n(), await (Y(() => c.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      R.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, A.Z)("cache:exception"), n(), c.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
s = "CacheStore", (r = "displayName") in K ? Object.defineProperty(K, r, {
  value: s,
  enumerable: true,
  configurable: true,
  writable: true
}) : K[r] = s, new K(Chunk570140.Z, D ? {
  CONNECTION_OPEN: function() {
    return M = true, B = true, false
  },
  LOGOUT: U,
  CONNECTION_CLOSED: function() {
    return M = false, B = true, false
  },
  CACHE_LOADED: function() {
    L = true
  },
  CACHE_LOADED_LAZY: function() {
    L = true, w = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    w = "no-cache"
  },
  CLEAR_CACHES: U,
  WRITE_CACHES: function() {
    R.verbose("Writing cache now"), k = Date.now(), L = true, Chunk433517.K.remove(Chunk981631.FsG), Chunk433517.K.remove(Chunk981631.O42), Chunk433517.K.remove(Chunk981631.ihW)
  }
} : {})