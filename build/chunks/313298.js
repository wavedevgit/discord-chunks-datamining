/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(570140),
  i = n(147913),
  o = n(650774),
  a = n(709054),
  s = n(893966);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  return (null !== (t = o.Z.getMemberCount(e)) && void 0 !== t ? t : 0) >= c ? u : f
}

function m(e) {
  var t;
  return (null !== (t = o.Z.getMemberCount(e)) && void 0 !== t ? t : 0) >= c ? d : p
}
let g = {},
  E = {},
  v = null;

function b() {
  null == v && (v = setInterval(() => {
    a.default.forEachKey(g, e => {
      S(e) && O(e)
    })
  }, _))
}
async function y(e, t) {
  null == g[e] && (g[e] = new Set), g[e].add(t), null == E[e] && (E[e] = Date.now()), S(e) && await O(e)
}

function O(e) {
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
  if (null == t) return !1;
  let n = t.size >= h(e),
    r = E[e];
  if (n) return !0;
  if (null == r) return !1;
  let i = Date.now() - r;
  return null != r && i >= m(e)
}

function I(e) {
  g[e] = new Set, E[e] = null
}
class T extends i.Z {
  handleInitialize() {
    null == v && b()
  }
  handleGuildMemberUpdate(e, t) {
    if (s.Z.isInitialized(e)) return y(e, t)
  }
  handleGuildMemberRemove(e, t) {
    if (s.Z.isInitialized(e)) return y(e, t)
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
let N = new T