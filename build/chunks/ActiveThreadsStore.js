/** Chunk was on web.js **/
/** chunk id: 344185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {},
  m = new Set;

function g(e) {
  return {
    id: e.id,
    parentId: e.parent_id
  }
}

function E(e) {
  e in h && delete h[e]
}

function b(e) {
  null != e.threads && e.threads.length > 0 && (h[e.id] = {}, e.threads.filter(e => l.AW.has(e.type)).forEach(t => y(e.id, t))), e.hasThreadsSubscription && m.add(e.id)
}

function y(e, t) {
  let n = h[e],
    r = t.parent_id;
  r in n || (n[r] = {}), h[e][r][t.id] = g(t)
}

function O(e) {
  h = {}, m.clear(), e.guilds.forEach(e => {
    b(e)
  })
}

function v(e) {
  let {
    channels: t
  } = e;
  h = {}, a()(t).filter(e => l.Ec.has(e.type)).groupBy("guild_id").forEach((e, t) => {
    h[t] = {}, e.forEach(e => y(t, e))
  })
}

function I(e) {
  let {
    guild: t
  } = e;
  E(t.id), b(t)
}

function T(e) {
  let {
    guild: t
  } = e;
  E(t.id)
}

function S(e) {
  var t, n;
  let {
    channel: r
  } = e;
  if (!l.AW.has(r.type)) returnfalse;
  if ((null == (t = r.threadMetadata) ? true : t.archived) === true) return C(r);
  {
    let e = null != (n = h[r.guild_id]) ? n : {};
    h[r.guild_id] = p(f({}, e), {
      [r.parent_id]: p(f({}, e[r.parent_id]), {
        [r.id]: g(r)
      })
    })
  }
}

function A(e) {
  let {
    guildId: t,
    threads: n,
    channelIds: r
  } = e;
  for (let e in null == r && m.add(t), h[t] = f({}, h[t]), h[t]) h[t][e] = f({}, h[t][e]);
  n.forEach(e => y(t, e))
}

function C(e) {
  let {
    guild_id: t,
    parent_id: n,
    id: r
  } = e;
  if (null == t || null == n || !(t in h) || !(n in h[t]) || !(r in h[t][n])) returnfalse;
  h[t] = p(f({}, h[t]), {
    [n]: f({}, h[t][n])
  }), delete h[t][n][r], a().isEmpty(h[t][n]) && delete h[t][n]
}

function N(e) {
  let {
    channel: t
  } = e;
  return C(t)
}

function R(e) {
  let {
    channel: t
  } = e;
  if (null == t.guild_id || !(t.guild_id in h)) returnfalse;
  h[t.guild_id] = f({}, h[t.guild_id]), delete h[t.guild_id][t.id]
}
let P = {};
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z)
  }
  isActive(e, t, n) {
    return null != e && null != this.getThreadsForParent(e, t)[n]
  }
  getThreadsForGuild(e) {
    var t;
    return null != (t = h[e]) ? t : P
  }
  getThreadsForParent(e, t) {
    var n;
    return null != (n = this.getThreadsForGuild(e)[t]) ? n : P
  }
  hasThreadsForChannel(e, t) {
    return !a().isEmpty(this.getThreadsForParent(e, t))
  }
  forEachGuild(e) {
    u.default.keys(h).forEach(t => {
      e(t, h[t])
    })
  }
  hasLoaded(e) {
    return m.has(e)
  }
}
d(w, "displayName", "ActiveThreadsStore");
let D = new w(Chunk570140.Z, {
  CONNECTION_OPEN: O,
  OVERLAY_INITIALIZE: v,
  GUILD_CREATE: I,
  GUILD_DELETE: T,
  THREAD_CREATE: S,
  THREAD_UPDATE: S,
  THREAD_LIST_SYNC: A,
  THREAD_DELETE: N,
  CHANNEL_DELETE: R
})