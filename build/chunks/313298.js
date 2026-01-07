/** Chunk was on web.js **/
/** chunk id: 313298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk650774 = require("./650774.js"),
  Chunk709054 = require("./709054.js"),
  Chunk893966 = require("./893966.js");

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

function m(e) {
  var t;
  return (null != (t = a.Z.getMemberCount(e)) ? t : 0) >= c ? u : f
}

function h(e) {
  var t;
  return (null != (t = a.Z.getMemberCount(e)) ? t : 0) >= c ? d : p
}
let g = {},
  E = {},
  b = null;

function y() {
  null == b && (b = setInterval(() => {
    o.default.forEachKey(g, e => {
      S(e) && v(e)
    })
  }, _))
}
async function O(e, t) {
  null == g[e] && (g[e] = new Set), g[e].add(t), null == E[e] && (E[e] = Date.now()), S(e) && await v(e)
}

function v(e) {
  if (null == g[e]) return;
  let t = Array.from(g[e]);
  g[e] = new Set, E[e] = Date.now(), requestAnimationFrame(async () => {
    await r.Z.dispatch({
      type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH",
      guildId: e,
      userIds: t
    })
  })
}

function S(e) {
  let t = g[e];
  if (null == t) returnfalse;
  let n = t.size >= m(e),
    r = E[e];
  if (n) returntrue;
  if (null == r) returnfalse;
  let i = Date.now() - r;
  return null != r && i >= h(e)
}

function I(e) {
  g[e] = new Set, E[e] = null
}
class T extends Chunk147913.Z {
  handleInitialize() {
    null == b && y()
  }
  handleGuildMemberUpdate(e, t) {
    if (s.Z.isInitialized(e)) return O(e, t)
  }
  handleGuildMemberRemove(e, t) {
    if (s.Z.isInitialized(e)) return O(e, t)
  }
  handleGuildDelete(e) {
    let t = e.guild.id;
    s.Z.isInitialized(t) && I(t)
  }
  handleGuildMemberSearchSuccess(e) {
    let {
      guildId: t
    } = e;
    s.Z.isInitialized(t) && I(t)
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
let C = new T