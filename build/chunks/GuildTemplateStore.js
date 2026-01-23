/** Chunk was on web.js **/
/** chunk id: 122906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk177773 = require("./177773.js"),
  Chunk401755 = require("./401755.js");

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
      state: o.QB.RESOLVING
    };
  t(r), (u = new Map(u)).set(e, r)
}

function p(e) {
  let {
    code: t
  } = e;
  (u = new Map(u)).set(t, {
    code: t,
    state: o.QB.RESOLVING
  })
}

function _(e) {
  h(e.guildTemplate)
}

function h(e) {
  return f(e.code, t => {
    let n = (0, s.A)(e);
    for (let e in n) t[e] = n[e]
  })
}

function m(e) {
  let {
    guildTemplates: t
  } = e;
  t.forEach(e => h(e))
}

function g(e) {
  return f(e.code, e => {
    e.state = o.QB.EXPIRED
  })
}

function E(e) {
  return f(e.code, e => {
    e.state = o.QB.ACCEPTING
  })
}

function y(e) {
  return f(e.code, e => {
    var t;
    e.state = o.QB.ACCEPTED, e.usageCount = (null != (t = e.usageCount) ? t : 0) + 1
  })
}

function b(e) {
  return f(e.code, e => {
    e.state = o.QB.RESOLVED
  })
}

function O(e) {
  d = e.code
}

function v(e) {
  d = null
}
class A extends(r = Chunk311907.Ay.Store) {
  getGuildTemplate(e) {
    if (null != e) return u.get(e)
  }
  getGuildTemplates() {
    return u
  }
  getForGuild(e) {
    for (let t of u.keys()) {
      let n = u.get(t);
      if (null != n && "sourceGuildId" in n && n.sourceGuildId === e && n.state !== o.QB.EXPIRED) return n
    }
  }
  getDisplayedGuildTemplateCode() {
    return d
  }
}
l(A, "displayName", "GuildTemplateStore");
let I = new A(Chunk73153.h, {
  GUILD_TEMPLATE_RESOLVE: p,
  GUILD_TEMPLATE_CREATE_SUCCESS: _,
  GUILD_TEMPLATE_SYNC_SUCCESS: _,
  GUILD_TEMPLATE_RESOLVE_SUCCESS: _,
  GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: m,
  GUILD_TEMPLATE_RESOLVE_FAILURE: g,
  GUILD_TEMPLATE_DELETE_SUCCESS: g,
  GUILD_TEMPLATE_ACCEPT: E,
  GUILD_TEMPLATE_ACCEPT_SUCCESS: y,
  GUILD_TEMPLATE_ACCEPT_FAILURE: b,
  GUILD_TEMPLATE_MODAL_SHOW: O,
  GUILD_TEMPLATE_MODAL_HIDE: v
})