/** Chunk was on web.js **/
/** chunk id: 758182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => j
}), require("./388685.js"), require("./467055.js"), require("./49124.js");
var r, Chunk135273 = require("./135273.js");
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
  Chunk439482 = require("./439482.js"),
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk894276 = require("./894276.js"),
  Chunk218543 = require("./218543.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk449934 = require("./449934.js"),
  Chunk358085 = require("./358085.js"),
  Chunk576376 = require("./576376.js"),
  Chunk38217 = require("./38217.js"),
  Chunk864631 = require("./864631.js"),
  Chunk981631 = require("./981631.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let L = new Chunk710845.Z("CacheStore"),
  j = false,
  M = 0,
  k = false,
  U = "initializing",
  G = 0,
  Z = false,
  F = false,
  B = false;

function V() {
  return F = true, B = true, false
}

function H() {
  return F = false, B = true, false
}

function Y() {
  Z = true
}

function W() {
  Z = true, U = "cache-loaded"
}

function K() {
  U = "no-cache"
}

function z(e) {
  L.log("Clearing cache store"), G = Date.now(), a.K.remove(D.FsG), a.K.remove(D.ihW), a.K.remove(D.O42), U = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (k = true)
}

function q() {
  L.verbose("Writing cache now"), G = Date.now(), Z = true, Chunk433517.K.remove(Chunk981631.FsG), Chunk433517.K.remove(Chunk981631.O42), Chunk433517.K.remove(Chunk981631.ihW)
}

function Q(e) {
  null != e.channels && (0, R.ZP)(e.channels), null != e.privateChannels && (0, R.ZP)(e.privateChannels), null != e.guildChannels && (0, R._$)(e.guildChannels)
}
async function X(e, t, n) {
  let r = performance.now();
  if (null != e && null != n) {
    let i = await f.ZP.startupLoad(e, t, n, D.AQB);
    L.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let o = {
      guildId: t,
      channelId: n,
      users: i.users,
      members: i.members,
      messages: i.messages
    };
    return [performance.now() - r, o]
  } {
    let t = {
      guildId: null,
      channelId: null,
      users: [],
      members: [],
      messages: []
    };
    return L.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - r, t]
  }
}
async function J(e, t, n) {
  var r, a, l;
  L.verbose("loading early cache");
  let c = O.Z.getSocket();
  c.connect();
  let u = null != (r = C.Z.getGuildId()) ? r : null,
    d = null != (a = T.Z.getChannelId()) ? a : null,
    f = performance.now(),
    p = S.Z.loadCachedMessages.measureAsyncWithoutNesting(() => X(e, u, d)),
    E = S.Z.fetchGuildCache.measureAsync(() => et(e, n)),
    b = S.Z.fetchGuildCache.measureAsync(() => en(e, n)),
    y = null != e ? i.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.Z.getAsync(e, null)) : Promise.resolve([]),
    v = null == e ? Promise.resolve({}) : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => h.Z.getAll(e)),
    I = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => _.Z.getAll(e)),
    A = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => m.Z.getAll(e)),
    [
      [N, P], R, D, x, j, M, k
    ] = await Promise.all([p, E, b, y, v, I, A]),
    U = performance.now() - f;
  if (L.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(N, "ms)")), null == P) return (0, w.Z)("database:history_cache_null"), L.verbose("finished without dispatching CACHE_LOADED"), [false, null, 0];
  {
    let r = Object.fromEntries(P.members.map(e => [e.userId, e])),
      a = null != D.guildId && null != D.channels,
      f = D.guildId;
    return o.ZP.Emitter.batched(() => {
      i.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return s.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: R,
          privateChannels: x,
          initialGuildChannels: null != (e = D.channels) ? e : [],
          users: [...P.users],
          messages: null == P.channelId ? {} : {
            [P.channelId]: P.messages
          },
          guildMembers: null == P.guildId ? {} : {
            [P.guildId]: r
          },
          userSettings: j,
          userGuildSettings: k,
          readStates: M
        })
      }), i.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), L.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(u, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            private_channels: ").concat(x.length, "\n            channel_history:\n              guild: ").concat(P.guildId, "\n              channel: ").concat(P.channelId, "\n              messages: ").concat(P.messages.length, "\n                members: ").concat(P.members.length, "\n                users: ").concat(P.users.length, "\n            initial_guild:\n              id: ").concat(f, "\n              channels: ").concat(null == (l = D.channels) ? true : l.length, "\n            user_settings: ").concat(Object.keys(j).length, "\n            read_states: ").concat(M.length, "\n            user_guild_settings: ").concat(k.length, "\n      )")), L.verbose("finished dispatching CACHE_LOADED"), [true, a && null != f ? f : null, x.length]
  }
}

function $() {
  return eo(() => Chunk570140.Z.dispatch({
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
  if (ee) return null != (n = await (0, l.dI)(() => i.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.Z.getAsync(e)))) ? n : [];
  let o = null != (r = (await p.Z.getCommittedVersions()).initial_guild_id) ? r : t.guildId;
  if (null == o || "@me" === o) return [];
  let a = await (0, l.dI)(() => u.Z.getOneAsync(e, o));
  return null != a ? [a] : []
}
async function en(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await p.Z.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return L.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let r = n;
  return {
    channels: await (0, l.dI)(() => g.Z.getAsync(e, r)),
    guildId: n
  }
}

function er(e, t) {
  return L.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => g.Z.getAsync(e, t).then(e => [t, e])))
}
async function ei(e, t, n, r) {
  L.verbose("loading late lazy cache");
  let [o, a, f] = await S.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, l.dI)(() => null != e ? i.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.Z.okAsync(e)) : Promise.resolve(true)), (0, l.dI)(() => null == e || ee ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.Z.getAsync(e))), (0, l.dI)(() => null != e ? i.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => c.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), p = await S.Z.fetchStaleChannels.measureAsync(() => null != e && null != f && f.stale.length > 0 ? (0, l.dI)(() => er(e, f.stale)) : Promise.resolve([]));
  v.E3.getCachedEnabled() ? L.verbose("loadLateLazyCache: not yielding to react") : (L.verbose("loadLateLazyCache: yielding to react"), await (0, b.f)((0, N.isIOS)() ? M : true)), S.Z.loadLazyCache.recordStart();
  let _ = O.Z.getSocket();
  eo(() => {
    let i = performance.now();
    if (false === o) {
      (0, w.Z)("database:not_ok"), s.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a || null == f || null == p) {
      (0, w.Z)("database:load_failed"), L.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != f, "\n          guild_channels: ").concat(null != p, "\n          guilds: ").concat(null != a, "\n        )")), s.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == o && (a.length > 0 || f.all.length > 0)) {
      (0, w.Z)("database:versionless"), L.log("kv_cache was not ok (null version with values)"), s.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (F) {
      (0, w.Z)("already_connected"), L.log("Skipping lazy cache; already connected."), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    _.addAnalytics({
      hadCacheAtStartup: true
    });
    let l = {
      type: "CACHE_LOADED_LAZY",
      guilds: a,
      guildChannels: p,
      basicGuildChannels: f.channels,
      initialGuildId: n
    };
    S.Z.deserializeCache.measure(() => Q(l)), S.Z.dispatchLazyCache.measure(() => s.Z.dispatch(l)), L.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")), _.addAnalytics({
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
      m = f.channels.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      h = d - m,
      g = 0 === f.stale.length ? "" : " \xb7 ".concat(f.stale.join(", "));
    L.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(o, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            guilds: ").concat(a.length, "\n            basic_channels:\n              total: ").concat(d, " (").concat(f.channels.length, " guilds)\n              stale: ").concat(h, " (").concat(f.stale.length, " guilds").concat(g, ")\n              unstale: ").concat(m, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(c, " (").concat(p.length, " guilds)\n      )")), S.Z.setCacheInfo({
      guilds: a.length,
      privateChannels: r,
      basicChannels: d,
      basicChannelsStale: h,
      fullChannels: c,
      fullChannelGuilds: u
    })
  })
}

function eo(e) {
  let t = O.Z.getSocket(),
    n = false;
  o.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = true, S.Z.loadLazyCache.recordEnd(), L.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        L.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      L.warn("Lazy cache has encountered error", e), s.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), n || S.Z.loadLazyCache.recordEnd()
}
class ea extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk38618.Z, Chunk944486.Z, Chunk914010.Z), j || Chunk38618.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !j || Z
  }
  getLazyCacheStatus() {
    return j ? U : "no-cache"
  }
  get lastWriteTime() {
    return G
  }
  canWriteCaches(e) {
    return (0, A.$8)() ? k ? (L.log("Not writing cache because caches cleared"), false) : !!e || !!B || (L.log("Not writing cache because never connected"), false) : (L.log("Not writing cache because not authenticated"), false)
  }
  async loadCacheAsync(e, t) {
    let n = (0, P.h)(t);
    if ("initializing" !== U) {
      (0, w.Z)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null == (t = O.Z.getSocket()) || null == (e = t.dispatcher) ? true : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = I.default.getId(),
        r = E.Z.carefullyOpenDatabase(t),
        [i, o, a] = await S.Z.loadMiniCache.measureAsync(() => J(r, t, e));
      i ? (n(), await ei(r, t, o, a)) : (n(), await $())
    } catch (e) {
      L.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, w.Z)("cache:exception"), n(), s.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
x(ea, "displayName", "CacheStore"), new ea(Chunk570140.Z, j ? {
  CONNECTION_OPEN: V,
  LOGOUT: z,
  CONNECTION_CLOSED: H,
  CACHE_LOADED: Y,
  CACHE_LOADED_LAZY: W,
  CACHE_LOADED_LAZY_NO_CACHE: K,
  CLEAR_CACHES: z,
  WRITE_CACHES: q
} : {})