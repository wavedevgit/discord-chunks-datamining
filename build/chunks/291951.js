/** Chunk was on web.js **/
/** chunk id: 291951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk498642 = require("./498642.js"),
  Chunk661191 = require("./661191.js"),
  Chunk266047 = require("./266047.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 75e3,
  u = 10,
  d = 5e3,
  f = 2,
  p = 2e3,
  _ = 1e4;

function h(e) {
  var t;
  return (null != (t = a.A.getMemberCount(e)) ? t : 0) >= c ? u : f
}

function m(e) {
  var t;
  return (null != (t = a.A.getMemberCount(e)) ? t : 0) >= c ? d : p
}
let g = {},
  E = {},
  y = null;

function b() {
  null == y && (y = setInterval(() => {
    s.default.forEachKey(g, e => {
      A(e) && v(e)
    })
  }, _))
}
async function O(e, t) {
  null == g[e] && (g[e] = new Set), g[e].add(t), null == E[e] && (E[e] = Date.now()), A(e) && await v(e)
}

function v(e) {
  if (null == g[e]) return;
  let t = Array.from(g[e]);
  g[e] = new Set, E[e] = Date.now(), requestAnimationFrame(async () => {
    await r.h.dispatch({
      type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH",
      guildId: e,
      userIds: t
    })
  })
}

function A(e) {
  let t = g[e];
  if (null == t) returnfalse;
  let n = t.size >= h(e),
    r = E[e];
  if (n) returntrue;
  if (null == r) returnfalse;
  let i = Date.now() - r;
  return null != r && i >= m(e)
}

function I(e) {
  g[e] = new Set, E[e] = null
}
class S extends Chunk439372.A {
  handleInitialize() {
    null == y && b()
  }
  handleGuildMemberUpdate(e, t) {
    if (o.A.isInitialized(e)) return O(e, t)
  }
  handleGuildMemberRemove(e, t) {
    if (o.A.isInitialized(e)) return O(e, t)
  }
  handleGuildDelete(e) {
    let t = e.guild.id;
    o.A.isInitialized(t) && I(t)
  }
  handleGuildMemberSearchSuccess(e) {
    let {
      guildId: t
    } = e;
    o.A.isInitialized(t) && I(t)
  }
  constructor(...e) {
    super(...e), l(this, "actions", {
      INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
      GUILD_MEMBER_ADD: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
      GUILD_MEMBER_REMOVE: e => this.handleGuildMemberRemove(e.guildId, e.user.id),
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e)
    })
  }
}
let T = new S