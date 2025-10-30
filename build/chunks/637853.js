/** Chunk was on web.js **/
/** chunk id: 637853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ee: () => O,
  L6: () => w,
  V7: () => I,
  VF: () => P,
  b$: () => g,
  d9: () => N,
  dF: () => v,
  dX: () => D,
  iF: () => S,
  kl: () => T,
  p3: () => b,
  wC: () => E
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk447003 = require("./447003.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk700785 = require("./700785.js"),
  Chunk977258 = require("./977258.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js");
let m = new Date(16824888e5);

function g(e) {
  return (0, r.e7)([l.Z, c.Z], () => {
    let t = l.Z.getGuild(e),
      n = !!(null == t ? true : t.features.has(p.GuildFeatures.COMMUNITY)),
      r = c.Z.can(p.Plq.MANAGE_GUILD, t),
      i = c.Z.can(p.Plq.MANAGE_ROLES, t);
    return n && r && i
  })
}

function E(e) {
  let t = l.Z.getGuild(e),
    n = !!(null == t ? true : t.features.has(p.GuildFeatures.COMMUNITY)),
    r = c.Z.can(p.Plq.MANAGE_GUILD, t),
    i = c.Z.can(p.Plq.MANAGE_ROLES, t);
  return n && r && i
}

function b(e, t) {
  var n;
  if (null == e || !e.features.has(p.GuildFeatures.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < m) returnfalse;
  let r = null != (n = t.flags) ? n : 0;
  return u.yE(r, h.q.STARTED_ONBOARDING) && !u.yE(r, h.q.COMPLETED_ONBOARDING)
}

function y(e, t, n) {
  let r = new Set;
  e.forEach(e => {
    e.options.forEach(e => {
      var t;
      null == e || null == (t = e.channelIds) || t.forEach(e => {
        r.add(e)
      })
    })
  }), t.forEach(e => r.add(e));
  let i = n.filter(e => !e.isCategory() && !e.isThread() && !(0, a.Z)(e));
  return [i.filter(e => r.has(e.id) || null != e.parent_id && r.has(e.parent_id)), i.filter(e => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id)))]
}

function O(e, t, n) {
  return y(t, n, s.ZP.getChannels(e)[s.sH].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function v(e, t, n) {
  return y(t, n, (0, r.e7)([s.ZP], () => s.ZP.getChannels(e))[s.sH].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function I(e) {
  return S(o.Z.getChannel(e))
}

function S(e) {
  return null != e && !!(0, _.s)(e.guild_id, e.id) && (e.isForumChannel() ? f.Uu(p.Plq.SEND_MESSAGES_IN_THREADS, e) : f.Uu(p.Plq.SEND_MESSAGES, e))
}

function T(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : () => true,
    i = C(e, t, e => e.id, r);
  return n.forEach(t => {
    var n, a;
    if (!t.required) return;
    let o = C(e, null != (a = null == (n = t.options[0]) ? true : n.channelIds) ? a : [], e => e.id),
      s = t.options.reduce((t, n) => {
        if (null == n.channelIds) return [];
        let a = C(e, n.channelIds, e => e.id, e => r(e) && !i.includes(e));
        return a.length < t.length ? a : t
      }, o);
    i.push(...s)
  }), i
}

function A(e, t) {
  return e.filter(e => {
    var n;
    return S(null == (n = t[e]) ? true : n.channel)
  })
}

function C(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : e => e,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : () => true,
    i = s.ZP.getChannels(e)[s.sH],
    a = [];
  for (let {
      channel: e
    }
    of i)
    if ((0, _.s)(e.guild_id, e.id) && (t.includes(e.id) && !e.isCategory() || !e.isThread() && null != e.parent_id && t.includes(e.parent_id))) {
      let t = n(e);
      r(t) && a.push(t)
    } return a
}

function N(e, t) {
  let n = C(e, t),
    r = s.ZP.getChannels(e)[s.sH],
    i = {};
  for (let e of r) i[e.channel.id] = e;
  return [A(n.map(e => {
    let {
      id: t
    } = e;
    return t
  }), i), n]
}

function R(e, t) {
  return e[0].length === t[0].length && e[1].length === t[1].length && (0, i.Z)(e[0], t[0]) && (0, i.Z)(e[1], t[1])
}

function P(e, t) {
  return (0, r.e7)([s.ZP], () => {
    let n = s.ZP.getChannels(e),
      r = [],
      i = [],
      a = {};
    for (let e of n[s.sH])(0, _.s)(e.channel.guild_id, e.channel.id) && (t.has(e.channel.id) && !e.channel.isCategory() || !e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id)) && (a[e.channel.id] = e, r.push(e.channel), S(e.channel) && i.push(e.channel.id));
    return [i, r]
  }, [e, t], R)
}

function w(e) {
  return new Set(e.map(e => e.roleIds).flat().filter(d.lm))
}

function D(e) {
  return new Set(e.map(e => e.channelIds).flat().filter(d.lm))
}