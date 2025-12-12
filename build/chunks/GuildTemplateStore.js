/** Chunk was on web.js **/
/** chunk id: 409059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk741847 = require("./741847.js"),
  Chunk260539 = require("./260539.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = new Map,
  d = null;

function f(e, t) {
  if (null == e) return;
  let n = u.get(e),
    r = null != n ? c({}, n) : {
      code: e,
      state: s.Rj.RESOLVING
    };
  t(r), (u = new Map(u)).set(e, r)
}

function p(e) {
  let {
    code: t
  } = e;
  (u = new Map(u)).set(t, {
    code: t,
    state: s.Rj.RESOLVING
  })
}

function _(e) {
  m(e.guildTemplate)
}

function m(e) {
  return f(e.code, t => {
    let n = (0, a.Z)(e);
    for (let e in n) t[e] = n[e]
  })
}

function h(e) {
  let {
    guildTemplates: t
  } = e;
  t.forEach(e => m(e))
}

function g(e) {
  return f(e.code, e => {
    e.state = s.Rj.EXPIRED
  })
}

function E(e) {
  return f(e.code, e => {
    e.state = s.Rj.ACCEPTING
  })
}

function b(e) {
  return f(e.code, e => {
    var t;
    e.state = s.Rj.ACCEPTED, e.usageCount = (null != (t = e.usageCount) ? t : 0) + 1
  })
}

function y(e) {
  return f(e.code, e => {
    e.state = s.Rj.RESOLVED
  })
}

function O(e) {
  d = e.code
}

function v(e) {
  d = null
}
class S extends(r = Chunk442837.ZP.Store) {
  getGuildTemplate(e) {
    if (null != e) return u.get(e)
  }
  getGuildTemplates() {
    return u
  }
  getForGuild(e) {
    for (let t of u.keys()) {
      let n = u.get(t);
      if (null != n && "sourceGuildId" in n && n.sourceGuildId === e && n.state !== s.Rj.EXPIRED) return n
    }
  }
  getDisplayedGuildTemplateCode() {
    return d
  }
}
l(S, "displayName", "GuildTemplateStore");
let I = new S(Chunk570140.Z, {
  GUILD_TEMPLATE_RESOLVE: p,
  GUILD_TEMPLATE_CREATE_SUCCESS: _,
  GUILD_TEMPLATE_SYNC_SUCCESS: _,
  GUILD_TEMPLATE_RESOLVE_SUCCESS: _,
  GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: h,
  GUILD_TEMPLATE_RESOLVE_FAILURE: g,
  GUILD_TEMPLATE_DELETE_SUCCESS: g,
  GUILD_TEMPLATE_ACCEPT: E,
  GUILD_TEMPLATE_ACCEPT_SUCCESS: b,
  GUILD_TEMPLATE_ACCEPT_FAILURE: y,
  GUILD_TEMPLATE_MODAL_SHOW: O,
  GUILD_TEMPLATE_MODAL_HIDE: v
})