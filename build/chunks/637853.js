/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Ee: () => y,
  L6: () => D,
  V7: () => S,
  VF: () => w,
  b$: () => g,
  d9: () => R,
  dF: () => O,
  dX: () => x,
  iF: () => I,
  kl: () => N,
  mn: () => T,
  p3: () => v,
  wC: () => E
}), n(789020), n(47120), n(653041), n(86693), n(536091);
var r = n(442837),
  i = n(902704),
  o = n(447003),
  a = n(592125),
  s = n(984933),
  l = n(430824),
  c = n(496675),
  u = n(630388),
  d = n(823379),
  f = n(700785),
  p = n(977258),
  _ = n(981631),
  h = n(372897);
let m = new Date(16824888e5);

function g(e) {
  return (0, r.e7)([l.Z, c.Z], () => {
    let t = l.Z.getGuild(e),
      n = !!(null == t ? void 0 : t.hasFeature(_.oNc.COMMUNITY)),
      r = c.Z.can(_.Plq.MANAGE_GUILD, t),
      i = c.Z.can(_.Plq.MANAGE_ROLES, t);
    return n && r && i
  })
}

function E(e) {
  let t = l.Z.getGuild(e),
    n = !!(null == t ? void 0 : t.hasFeature(_.oNc.COMMUNITY)),
    r = c.Z.can(_.Plq.MANAGE_GUILD, t),
    i = c.Z.can(_.Plq.MANAGE_ROLES, t);
  return n && r && i
}

function v(e, t) {
  var n;
  if (null == e || !e.hasFeature(_.oNc.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < m) return !1;
  let r = null !== (n = t.flags) && void 0 !== n ? n : 0;
  return u.yE(r, h.q.STARTED_ONBOARDING) && !u.yE(r, h.q.COMPLETED_ONBOARDING)
}

function b(e, t, n) {
  let r = new Set;
  e.forEach(e => {
    e.options.forEach(e => {
      var t;
      null == e || null === (t = e.channelIds) || void 0 === t || t.forEach(e => {
        r.add(e)
      })
    })
  }), t.forEach(e => r.add(e));
  let i = n.filter(e => !e.isCategory() && !e.isThread() && !(0, o.Z)(e));
  return [i.filter(e => r.has(e.id) || null != e.parent_id && r.has(e.parent_id)), i.filter(e => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id)))]
}

function y(e, t, n) {
  return b(t, n, s.ZP.getChannels(e)[s.sH].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function O(e, t, n) {
  return b(t, n, (0, r.e7)([s.ZP], () => s.ZP.getChannels(e))[s.sH].map(e => {
    let {
      channel: t
    } = e;
    return t
  }))
}

function S(e) {
  return I(a.Z.getChannel(e))
}

function I(e) {
  return !!(null != e && (0, p.s)(e.guild_id, e.id)) && (e.isForumChannel() ? f.Uu(_.Plq.SEND_MESSAGES_IN_THREADS, e) : f.Uu(_.Plq.SEND_MESSAGES, e))
}

function T(e) {
  return (0, r.e7)([a.Z], () => {
    let t = a.Z.getChannel(e);
    return (0, d.lm)(t) && I(t)
  })
}

function N(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
    i = C(e, t, e => e.id, r);
  return n.forEach(t => {
    var n, o;
    if (!t.required) return;
    let a = C(e, null !== (o = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== o ? o : [], e => e.id),
      s = t.options.reduce((t, n) => {
        if (null == n.channelIds) return [];
        let o = C(e, n.channelIds, e => e.id, e => r(e) && !i.includes(e));
        return o.length < t.length ? o : t
      }, a);
    i.push(...s)
  }), i
}

function A(e, t) {
  return e.filter(e => {
    var n;
    return I(null === (n = t[e]) || void 0 === n ? void 0 : n.channel)
  })
}

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e,
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
    i = s.ZP.getChannels(e)[s.sH],
    o = [];
  for (let {
      channel: e
    }
    of i)
    if ((0, p.s)(e.guild_id, e.id) && (t.includes(e.id) && !e.isCategory() || !e.isThread() && null != e.parent_id && t.includes(e.parent_id))) {
      let t = n(e);
      r(t) && o.push(t)
    } return o
}

function R(e, t) {
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

function P(e, t) {
  return e[0].length === t[0].length && e[1].length === t[1].length && (0, i.Z)(e[0], t[0]) && (0, i.Z)(e[1], t[1])
}

function w(e, t) {
  return (0, r.e7)([s.ZP], () => {
    let n = s.ZP.getChannels(e),
      r = [],
      i = [],
      o = {};
    for (let e of n[s.sH])(0, p.s)(e.channel.guild_id, e.channel.id) && (t.has(e.channel.id) && !e.channel.isCategory() || !e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id)) && (o[e.channel.id] = e, r.push(e.channel), I(e.channel) && i.push(e.channel.id));
    return [i, r]
  }, [e, t], P)
}

function D(e) {
  return new Set(e.map(e => e.roleIds).flat().filter(d.lm))
}

function x(e) {
  return new Set(e.map(e => e.channelIds).flat().filter(d.lm))
}