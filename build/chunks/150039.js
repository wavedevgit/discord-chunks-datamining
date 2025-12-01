/** Chunk was on web.js **/
/** chunk id: 150039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jw: () => T,
  PO: () => A,
  UK: () => C,
  Wh: () => N,
  Ys: () => P,
  Zx: () => E,
  f$: () => w,
  gc: () => g,
  gd: () => R,
  i3: () => y,
  mD: () => b,
  nh: () => O,
  sY: () => S,
  wE: () => v,
  xQ: () => I
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk594928 = require("./594928.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js");

function g(e) {
  return r.useMemo(() => {
    let t = _.ZP.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var r;
      let a = null == (r = t[i][e]) ? true : r.avatar;
      null != a && (null == n[a] && (n[a] = []), n[a].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function E(e, t) {
  var n;
  let r = (0, s.e7)([_.ZP], () => true === t ? null : _.ZP.getMember(t, e.id)),
    i = e.nameplate,
    {
      pendingUserNameplate: a,
      userErrors: o
    } = (0, s.cj)([m.Z], () => ({
      pendingUserNameplate: m.Z.getPendingNameplate(),
      userErrors: m.Z.getErrors().nameplate
    })),
    {
      pendingGuildNameplate: l,
      guildErrors: c
    } = (0, s.cj)([d.Z], () => ({
      pendingGuildNameplate: d.Z.getPendingNameplate(),
      guildErrors: d.Z.getErrors().nameplate
    }));
  return {
    userNameplate: i,
    guildNameplate: null == r || null == (n = r.collectibles) ? true : n.nameplate,
    pendingNameplate: null != t ? l : a,
    pendingErrors: null != t ? c : o
  }
}

function b(e, t) {
  c.JH.useExperiment({
    location: "useGuildMemberOrUserPendingDisplayNameStyles"
  }).enabled || (t = true);
  let n = (0, s.e7)([_.ZP], () => true === t || null == e ? null : _.ZP.getMember(t, e.id)),
    {
      pendingUserDisplayNameStyles: r,
      userErrors: i
    } = (0, s.cj)([m.Z], () => ({
      pendingUserDisplayNameStyles: m.Z.getPendingDisplayNameStyles(),
      userErrors: m.Z.getErrors().displayNameStyles
    })),
    {
      pendingGuildDisplayNameStyles: a,
      guildErrors: o
    } = (0, s.cj)([d.Z], () => ({
      pendingGuildDisplayNameStyles: d.Z.getPendingDisplayNameStyles(),
      guildErrors: d.Z.getErrors().displayNameStyles
    }));
  return {
    userDisplayNameStyles: null == e ? true : e.displayNameStyles,
    guildDisplayNameStyles: null == n ? true : n.displayNameStyles,
    pendingDisplayNameStyles: null != t ? a : r,
    pendingErrors: null != t ? o : i
  }
}

function y(e) {
  let {
    user: t,
    guildId: n
  } = e, r = (0, s.e7)([_.ZP], () => null != n ? _.ZP.getMember(n, t.id) : null);
  return null != n ? null == r ? true : r.avatarDecoration : t.avatarDecoration
}

function O(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return (0, s.e7)([p.Z], () => {
    var e, r;
    return null == n ? null == (e = p.Z.getUserProfile(t.id)) ? true : e.profileEffect : null == (r = p.Z.getGuildMemberProfile(t.id, n)) ? true : r.profileEffect
  })
}

function v(e) {
  let {
    guildId: t,
    isTryItOut: n
  } = e;
  return (0, s.cj)([d.Z, m.Z], () => n ? {
    pendingAvatarDecoration: m.Z.getTryItOutAvatarDecoration()
  } : null == t ? {
    pendingAvatarDecoration: m.Z.getPendingAvatarDecoration(),
    errors: m.Z.getErrors().avatarDecoration
  } : {
    pendingAvatarDecoration: d.Z.getPendingAvatarDecoration(),
    errors: d.Z.getErrors().avatarDecoration
  })
}

function S(e) {
  let {
    guildId: t,
    isTryItOut: n
  } = e;
  return (0, s.cj)([m.Z, d.Z], () => n ? {
    pendingProfileEffect: m.Z.getTryItOutProfileEffect()
  } : null == t ? {
    pendingProfileEffect: m.Z.getPendingProfileEffect(),
    errors: d.Z.getErrors().profileEffect
  } : {
    pendingProfileEffect: d.Z.getPendingProfileEffect(),
    errors: m.Z.getErrors().profileEffect
  })
}

function I(e, t) {
  (0, f.Cf)(e === t ? true : e)
}

function T(e, t) {
  (0, l.I5)((null == e ? true : e.imageUri) === t ? true : e)
}

function A(e, t) {
  let n = h.default.getCurrentUser();
  if (a()(null != n, "user cannot be null"), null == t) {
    let t = n.avatarDecoration;
    (0, l.ZB)({
      type: o.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    var r;
    let i = null == (r = _.ZP.getMember(t, n.id)) ? true : r.avatarDecoration;
    (0, u.ZB)({
      type: o.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == i ? true : i.skuId) ? true : e
    })
  }
}

function C(e, t) {
  var n, r;
  let i = h.default.getCurrentUser();
  if (a()(null != i, "user cannot be null"), null == t) {
    let t = null == (n = p.Z.getUserProfile(i.id)) ? true : n.profileEffect;
    (0, l.ZB)({
      type: o.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (r = p.Z.getGuildMemberProfile(i.id, t)) ? true : r.profileEffect;
    (0, u.ZB)({
      type: o.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function N(e, t) {
  var n, r, i;
  let s = h.default.getCurrentUser();
  if (a()(null != s, "user cannot be null"), null == t) {
    let t = null == (n = s.collectibles) ? true : n.nameplate;
    (0, l.ZB)({
      type: o.Z.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (i = _.ZP.getMember(t, s.id)) || null == (r = i.collectibles) ? true : r.nameplate;
    (0, u.ZB)({
      type: o.Z.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function P(e) {
  let {
    userValue: t,
    guildValue: n,
    pendingValue: r,
    guildId: i
  } = e, a = "" === r || null === r, o = "" !== r && null != r, s = "" !== n && null != n;
  return a ? null != i ? t : null : o ? r : null != i && s ? n : t
}

function R(e, t) {
  return true === e ? null != t : null != e
}

function w(e, t) {
  return true === e ? null != t : null != e
}