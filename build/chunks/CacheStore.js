/** Chunk was on web.js **/
/** chunk id: 758182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => L
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
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk894276 = require("./894276.js"),
  Chunk218543 = require("./218543.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk449934 = require("./449934.js"),
  Chunk576376 = require("./576376.js"),
  Chunk38217 = require("./38217.js"),
  Chunk864631 = require("./864631.js"),
  Chunk981631 = require("./981631.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let w = new Chunk710845.Z("CacheStore"),
  L = false,
  x = false,
  M = "initializing",
  k = 0,
  j = false,
  U = false,
  G = false;

function B() {
  return U = true, G = true, false
}

function Z() {
  return U = false, G = true, false
}

function F() {
  j = true
}

function V() {
  j = true, M = "cache-loaded"
}

function H() {
  M = "no-cache"
}

function Y(e) {
  w.log("Clearing cache store"), k = Date.now(), o.K.remove(P.FsG), o.K.remove(P.ihW), o.K.remove(P.O42), M = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (x = true)
}

function W() {
  w.verbose("Writing cache now"), k = Date.now(), j = true, Chunk433517.K.remove(Chunk981631.FsG), Chunk433517.K.remove(Chunk981631.O42), Chunk433517.K.remove(Chunk981631.ihW)
}

function K(e) {
  null != e.channels && (0, N.ZP)(e.channels), null != e.privateChannels && (0, N.ZP)(e.privateChannels), null != e.guildChannels && (0, N._$)(e.guildChannels)
}
async function z(e, t, n) {
  let r = performance.now();
  if (null != e && null != n) {
    let i = await f.ZP.startupLoad(e, t, n, P.AQB);
    w.verbose("loaded ".concat(i.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let a = {
      guildId: t,
      channelId: n,
      users: i.users,
      members: i.members,
      messages: i.messages
    };
    return [performance.now() - r, a]
  } {
    let t = {
      guildId: null,
      channelId: null,
      users: [],
      members: [],
      messages: []
    };
    return w.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - r, t]
  }
}
async function q(e, t, n) {
  var r, o, l;
  w.verbose("loading early cache");
  let c = y.Z.getSocket();
  c.connect();
  let u = null != (r = S.Z.getGuildId()) ? r : null,
    d = null != (o = T.Z.getChannelId()) ? o : null,
    f = performance.now(),
    _ = v.Z.loadCachedMessages.measureAsyncWithoutNesting(() => z(e, u, d)),
    E = v.Z.fetchGuildCache.measureAsync(() => J(e, n)),
    b = v.Z.fetchGuildCache.measureAsync(() => $(e, n)),
    O = null != e ? i.Z.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => g.Z.getAsync(e, null)) : Promise.resolve([]),
    I = null == e ? Promise.resolve({}) : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => m.Z.getAll(e)),
    A = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: read_states", () => p.Z.getAll(e)),
    C = null == e ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => h.Z.getAll(e)),
    [
      [N, P], D, L, x, M, k, j
    ] = await Promise.all([_, E, b, O, I, A, C]),
    U = performance.now() - f;
  if (w.verbose("cache loaded in ".concat(U, "ms (channel_history ").concat(N, "ms)")), null == P) return (0, R.Z)("database:history_cache_null"), w.verbose("finished without dispatching CACHE_LOADED"), [false, null, 0];
  {
    let r = Object.fromEntries(P.members.map(e => [e.userId, e])),
      o = null != L.guildId && null != L.channels,
      f = L.guildId;
    return a.ZP.Emitter.batched(() => {
      i.Z.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return s.Z.dispatch({
          type: "CACHE_LOADED",
          guilds: D,
          privateChannels: x,
          initialGuildChannels: null != (e = L.channels) ? e : [],
          users: [...P.users],
          messages: null == P.channelId ? {} : {
            [P.channelId]: P.messages
          },
          guildMembers: null == P.guildId ? {} : {
            [P.guildId]: r
          },
          userSettings: M,
          userGuildSettings: j,
          readStates: k
        })
      }), i.Z.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => c.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), w.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(u, "\n          selected_channel: ").concat(d, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            private_channels: ").concat(x.length, "\n            channel_history:\n              guild: ").concat(P.guildId, "\n              channel: ").concat(P.channelId, "\n              messages: ").concat(P.messages.length, "\n                members: ").concat(P.members.length, "\n                users: ").concat(P.users.length, "\n            initial_guild:\n              id: ").concat(f, "\n              channels: ").concat(null == (l = L.channels) ? true : l.length, "\n            user_settings: ").concat(Object.keys(M).length, "\n            read_states: ").concat(k.length, "\n            user_guild_settings: ").concat(j.length, "\n      )")), w.verbose("finished dispatching CACHE_LOADED"), [true, o && null != f ? f : null, x.length]
  }
}

function X() {
  return en(() => Chunk570140.Z.dispatch({
    type: "CACHE_LOADED_LAZY_NO_CACHE"
  })), Promise.resolve()
}
let Q = false;
async function J(e, t) {
  var n, r;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      Q = true;
      break;
    case "other":
      "@me" === t.guildId && (Q = true)
  }
  if (Q) return null != (n = await (0, l.dI)(() => i.Z.timeAsync("\uD83D\uDCBE", "cache: guilds", () => u.Z.getAsync(e)))) ? n : [];
  let a = null != (r = (await _.Z.getCommittedVersions()).initial_guild_id) ? r : t.guildId;
  if (null == a || "@me" === a) return [];
  let o = await (0, l.dI)(() => u.Z.getOneAsync(e, a));
  return null != o ? [o] : []
}
async function $(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = (await _.Z.getCommittedVersions()).initial_guild_id;
  if (null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n) return w.verbose("skipped loading initial guild (guild: ".concat(n, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let r = n;
  return {
    channels: await (0, l.dI)(() => g.Z.getAsync(e, r)),
    guildId: n
  }
}

function ee(e, t) {
  return w.verbose("loading stale guild channels (count: ".concat(t.length, ", ids: ").concat(t.join(", "), ")")), Promise.all(t.map(t => g.Z.getAsync(e, t).then(e => [t, e])))
}
async function et(e, t, n, r) {
  w.verbose("loading late lazy cache");
  let [a, o, f] = await v.Z.fetchLazyCache.measureAsync(() => Promise.all([(0, l.dI)(() => null != e ? i.Z.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => d.Z.okAsync(e)) : Promise.resolve(true)), (0, l.dI)(() => null == e || Q ? Promise.resolve([]) : i.Z.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => u.Z.getAsync(e))), (0, l.dI)(() => null != e ? i.Z.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => c.Z.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), _ = await v.Z.fetchStaleChannels.measureAsync(() => null != e && null != f && f.stale.length > 0 ? (0, l.dI)(() => ee(e, f.stale)) : Promise.resolve([]));
  O.E3.getCachedEnabled() ? w.verbose("loadLateLazyCache: not yielding to react") : (w.verbose("loadLateLazyCache: yielding to react"), await new Promise(e => setTimeout(e, 0))), v.Z.loadLazyCache.recordStart();
  let p = y.Z.getSocket();
  en(() => {
    let i = performance.now();
    if (false === a) {
      (0, R.Z)("database:not_ok"), s.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == o || null == f || null == _) {
      (0, R.Z)("database:load_failed"), w.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != f, "\n          guild_channels: ").concat(null != _, "\n          guilds: ").concat(null != o, "\n        )")), s.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == a && (o.length > 0 || f.all.length > 0)) {
      (0, R.Z)("database:versionless"), w.log("kv_cache was not ok (null version with values)"), s.Z.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (U) {
      (0, R.Z)("already_connected"), w.log("Skipping lazy cache; already connected."), s.Z.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    p.addAnalytics({
      hadCacheAtStartup: true
    });
    let l = {
      type: "CACHE_LOADED_LAZY",
      guilds: o,
      guildChannels: _,
      basicGuildChannels: f.channels,
      initialGuildId: n
    };
    v.Z.deserializeCache.measure(() => K(l)), v.Z.dispatchLazyCache.measure(() => s.Z.dispatch(l)), w.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - i, "ms)")), p.addAnalytics({
      usedCacheAtStartup: true
    });
    let c = _.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      u = _.length,
      d = f.all.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      h = f.channels.reduce((e, t) => {
        let [n, r] = t;
        return e + r.length
      }, 0),
      m = d - h,
      g = 0 === f.stale.length ? "" : " \xb7 ".concat(f.stale.join(", "));
    w.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(a, "\n            name: ").concat(null == e ? true : e.name, "\n        data:\n          database:\n            guilds: ").concat(o.length, "\n            basic_channels:\n              total: ").concat(d, " (").concat(f.channels.length, " guilds)\n              stale: ").concat(m, " (").concat(f.stale.length, " guilds").concat(g, ")\n              unstale: ").concat(h, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(c, " (").concat(_.length, " guilds)\n      )")), v.Z.setCacheInfo({
      guilds: o.length,
      privateChannels: r,
      basicChannels: d,
      basicChannelsStale: m,
      fullChannels: c,
      fullChannelGuilds: u
    })
  })
}

function en(e) {
  let t = y.Z.getSocket(),
    n = false;
  a.ZP.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        w.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = true, v.Z.loadLazyCache.recordEnd(), w.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        w.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      w.warn("Lazy cache has encountered error", e), s.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), n || v.Z.loadLazyCache.recordEnd()
}
class er extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk38618.Z, Chunk944486.Z, Chunk914010.Z), L || Chunk38618.Z.getSocket().dispatcher.unpauseDispatchQueue()
  }
  hasCache() {
    return !L || j
  }
  getLazyCacheStatus() {
    return L ? M : "no-cache"
  }
  get lastWriteTime() {
    return k
  }
  canWriteCaches(e) {
    return (0, A.$8)() ? x ? (w.log("Not writing cache because caches cleared"), false) : !!e || !!G || (w.log("Not writing cache because never connected"), false) : (w.log("Not writing cache because not authenticated"), false)
  }
  async loadCacheAsync(e, t) {
    let n = (0, C.h)(t);
    if ("initializing" !== M) {
      (0, R.Z)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null == (t = y.Z.getSocket()) || null == (e = t.dispatcher) ? true : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = I.default.getId(),
        r = E.Z.carefullyOpenDatabase(t),
        [i, a, o] = await v.Z.loadMiniCache.measureAsync(() => q(r, t, e));
      i ? (n(), await et(r, t, a, o)) : (n(), await X())
    } catch (e) {
      w.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, R.Z)("cache:exception"), n(), s.Z.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
D(er, "displayName", "CacheStore"), new er(Chunk570140.Z, L ? {
  CONNECTION_OPEN: B,
  LOGOUT: Y,
  CONNECTION_CLOSED: Z,
  CACHE_LOADED: F,
  CACHE_LOADED_LAZY: V,
  CACHE_LOADED_LAZY_NO_CACHE: H,
  CLEAR_CACHES: Y,
  WRITE_CACHES: W
} : {})