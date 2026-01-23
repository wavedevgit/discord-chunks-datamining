/** Chunk was on web.js **/
/** chunk id: 961973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Y: () => v,
  A2: () => b,
  G4: () => R,
  H_: () => k,
  L1: () => A,
  Lx: () => T,
  OG: () => U,
  VU: () => C,
  _N: () => S,
  a: () => j,
  rs: () => O,
  sZ: () => N,
  tb: () => L,
  ui: () => D,
  vV: () => M
}), require("./938796.js"), require("./896048.js"), require("./321073.js"), require("./864466.js"), require("./443073.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk148719 = require("./148719.js"),
  Chunk734057 = require("./734057.js"),
  Chunk962173 = require("./962173.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk403362 = require("./403362.js"),
  Chunk488926 = require("./488926.js"),
  Chunk240248 = require("./240248.js"),
  Chunk112389 = require("./112389.js"),
  Chunk539916 = require("./539916.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js");
let y = new Date(16824888e5);

function b(e) {
  return (0, i.bG)([u.A, d.A], () => {
    let t = u.A.getGuild(e),
      n = !!(null == t ? true : t.features.has(g.GuildFeatures.COMMUNITY)),
      r = d.A.can(g.xBc.MANAGE_GUILD, t),
      i = d.A.can(g.xBc.MANAGE_ROLES, t);
    return n && r && i
  })
}

function O(e) {
  let t = u.A.getGuild(e),
    n = !!(null == t ? true : t.features.has(g.GuildFeatures.COMMUNITY)),
    r = d.A.can(g.xBc.MANAGE_GUILD, t),
    i = d.A.can(g.xBc.MANAGE_ROLES, t);
  return n && r && i
}

function v(e, t) {
  var n;
  if (null == e || !e.features.has(g.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < y) returnfalse;
  let i = null != (n = t.flags) ? n : 0;
  return r.Lt(i, E.D.STARTED_ONBOARDING) && !r.Lt(i, E.D.COMPLETED_ONBOARDING)
}

function A(e, t) {
  return !(null != e && e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && null != t
}

function I(e, t, n) {
  let r = new Set;
  e.forEach(e => {
    e.options.forEach(e => {
      var t;
      null == e || null == (t = e.channelIds) || t.forEach(e => {
        r.add(e)
      })
    })
  }), t.forEach(e => r.add(e));
  let i = n.filter(e => !e.isCategory() && !e.isThread() && !(0, s.A)(e));
  return [i.filter(e => r.has(e.id) || null != e.parent_id && r.has(e.parent_id)), i.filter(e => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id)))]
}

function S(e, t, n) {
  return I(t, n, c.Ay.getChannels(e)[c.I6].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function T(e, t, n) {
  return I(t, n, (0, i.bG)([c.Ay], () => c.Ay.getChannels(e))[c.I6].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function C(e) {
  return N(o.A.getChannel(e))
}

function N(e) {
  return null != e && !!(0, h.S)(e.guild_id, e.id) && (e.isForumChannel() ? p.MJ(g.xBc.SEND_MESSAGES_IN_THREADS, e) : p.MJ(g.xBc.SEND_MESSAGES, e))
}

function R(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : () => true,
    i = P(e, t, e => e.id, r);
  return n.forEach(t => {
    var n, a;
    if (!t.required) return;
    let s = P(e, null != (n = null == (a = t.options[0]) ? true : a.channelIds) ? n : [], e => e.id),
      o = t.options.reduce((t, n) => {
        if (null == n.channelIds) return [];
        let a = P(e, n.channelIds, e => e.id, e => r(e) && !i.includes(e));
        return a.length < t.length ? a : t
      }, s);
    i.push(...o)
  }), i
}

function w(e, t) {
  return e.filter(e => {
    var n;
    return N(null == (n = t[e]) ? true : n.channel)
  })
}

function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : e => e,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : () => true,
    i = c.Ay.getChannels(e)[c.I6],
    a = [];
  for (let {
      channel: e
    }
    of i)
    if ((0, h.S)(e.guild_id, e.id) && (t.includes(e.id) && !e.isCategory() || !e.isThread() && null != e.parent_id && t.includes(e.parent_id))) {
      let t = n(e);
      r(t) && a.push(t)
    } return a
}

function D(e, t) {
  let n = P(e, t),
    r = c.Ay.getChannels(e)[c.I6],
    i = {};
  for (let e of r) i[e.channel.id] = e;
  return [w(n.map(e => {
    let {
      id: t
    } = e;
    return t
  }), i), n]
}

function x(e, t) {
  return e[0].length === t[0].length && e[1].length === t[1].length && (0, a.A)(e[0], t[0]) && (0, a.A)(e[1], t[1])
}

function L(e, t) {
  return (0, i.bG)([c.Ay], () => {
    let n = c.Ay.getChannels(e),
      r = [],
      i = [],
      a = {};
    for (let e of n[c.I6])(0, h.S)(e.channel.guild_id, e.channel.id) && (t.has(e.channel.id) && !e.channel.isCategory() || !e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id)) && (a[e.channel.id] = e, r.push(e.channel), N(e.channel) && i.push(e.channel.id));
    return [i, r]
  }, [e, t], x)
}

function j(e) {
  return new Set(e.map(e => e.roleIds).flat().filter(f.Vq))
}

function M(e) {
  return new Set(e.map(e => e.channelIds).flat().filter(f.Vq))
}

function k(e) {
  let t = e.filter(e => e.connection_type === m.wZ.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
    n = [],
    r = [];
  return t.forEach(e => {
    let t = e.provider_id;
    if ((0, _.uJ)(t)) return;
    let i = l.A.getAccount(null, t);
    null == i || i.revoked ? r.push(t) : n.push(t)
  }), {
    connected: n,
    notConnected: r
  }
}

function U(e) {
  let t = e.filter(e => e.connection_type === m.wZ.APPLICATION && e.application_id),
    r = [],
    i = [],
    a = n(546183).default,
    {
      FetchState: s
    } = n(546183);
  return t.forEach(e => {
    let t = e.application_id;
    if ((0, _.uJ)(t)) return;
    let n = a.getNewestTokenForApplication(t);
    a.getFetchStateForApplication(t) === s.FETCHED && null != n ? r.push(t) : i.push(t)
  }), {
    connected: r,
    notConnected: i
  }
}