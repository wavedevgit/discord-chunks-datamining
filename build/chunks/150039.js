/** Chunk was on web.js **/
/** chunk id: 150039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $U: () => b,
  Jw: () => S,
  Kg: () => v,
  PO: () => A,
  UK: () => C,
  Wh: () => N,
  Ys: () => R,
  Zx: () => y,
  bd: () => I,
  f$: () => w,
  gc: () => E,
  gd: () => P,
  mD: () => O,
  xQ: () => T
}), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk676742 = require("./676742.js"),
  Chunk594928 = require("./594928.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js");

function E(e) {
  return r.useMemo(() => {
    let t = h.ZP.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var r;
      let a = null == (r = t[i][e]) ? true : r.avatar;
      null != a && (null == n[a] && (n[a] = []), n[a].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function b(e, t) {
  let n = (0, s.e7)([h.ZP], () => true === t ? null : h.ZP.getMember(t.id, e.id)),
    r = (0, c.Z)(e.avatarDecoration),
    {
      pendingUserAvatarDecoration: i,
      userErrors: a
    } = (0, s.cj)([m.Z], () => ({
      pendingUserAvatarDecoration: m.Z.getPendingAvatarDecoration(),
      userErrors: m.Z.getErrors().avatarDecoration
    })),
    {
      pendingGuildAvatarDecoration: o,
      guildErrors: l
    } = (0, s.cj)([f.Z], () => ({
      pendingGuildAvatarDecoration: f.Z.getPendingAvatarDecoration(),
      guildErrors: f.Z.getErrors().avatarDecoration
    }));
  return {
    userAvatarDecoration: r,
    guildAvatarDecoration: null == n ? true : n.avatarDecoration,
    pendingAvatarDecoration: null != t ? o : i,
    pendingErrors: null != t ? l : a
  }
}

function y(e, t) {
  var n;
  let r = (0, s.e7)([h.ZP], () => true === t ? null : h.ZP.getMember(t, e.id)),
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
    } = (0, s.cj)([f.Z], () => ({
      pendingGuildNameplate: f.Z.getPendingNameplate(),
      guildErrors: f.Z.getErrors().nameplate
    }));
  return {
    userNameplate: i,
    guildNameplate: null == r || null == (n = r.collectibles) ? true : n.nameplate,
    pendingNameplate: null != t ? l : a,
    pendingErrors: null != t ? c : o
  }
}

function O(e, t) {
  (0, u.cL)({
    location: "useGuildMemberOrUserPendingDisplayNameStyles"
  }) || (t = true);
  let n = (0, s.e7)([h.ZP], () => true === t || null == e ? null : h.ZP.getMember(t, e.id)),
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
    } = (0, s.cj)([f.Z], () => ({
      pendingGuildDisplayNameStyles: f.Z.getPendingDisplayNameStyles(),
      guildErrors: f.Z.getErrors().displayNameStyles
    }));
  return {
    userDisplayNameStyles: null == e ? true : e.displayNameStyles,
    guildDisplayNameStyles: null == n ? true : n.displayNameStyles,
    pendingDisplayNameStyles: null != t ? a : r,
    pendingErrors: null != t ? o : i
  }
}

function v(e, t) {
  return (0, s.e7)([p.Z], () => {
    var n, r;
    return null == t ? null == (n = p.Z.getUserProfile(e.id)) ? true : n.profileEffect : null == (r = p.Z.getGuildMemberProfile(e.id, t.id)) ? true : r.profileEffect
  })
}

function I(e) {
  return (0, s.cj)([m.Z, f.Z], () => null == e ? {
    pendingProfileEffect: m.Z.getPendingProfileEffect(),
    errors: m.Z.getErrors().profileEffect
  } : {
    pendingProfileEffect: f.Z.getPendingProfileEffect(),
    errors: f.Z.getErrors().profileEffect
  }, [e])
}

function T(e, t) {
  (0, _.Cf)(e === t ? true : e)
}

function S(e, t) {
  (0, l.I5)((null == e ? true : e.imageUri) === t ? true : e)
}

function A(e, t) {
  let n = g.default.getCurrentUser();
  if (a()(null != n, "user cannot be null"), null == t) {
    let t = n.avatarDecoration;
    (0, l.ZB)({
      type: o.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    var r;
    let i = null == (r = h.ZP.getMember(t, n.id)) ? true : r.avatarDecoration;
    (0, d.ZB)({
      type: o.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == i ? true : i.skuId) ? true : e
    })
  }
}

function C(e, t) {
  var n, r;
  let i = g.default.getCurrentUser();
  if (a()(null != i, "user cannot be null"), null == t) {
    let t = null == (n = p.Z.getUserProfile(i.id)) ? true : n.profileEffect;
    (0, l.ZB)({
      type: o.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (r = p.Z.getGuildMemberProfile(i.id, t)) ? true : r.profileEffect;
    (0, d.ZB)({
      type: o.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function N(e, t) {
  var n, r, i;
  let s = g.default.getCurrentUser();
  if (a()(null != s, "user cannot be null"), null == t) {
    let t = null == (n = s.collectibles) ? true : n.nameplate;
    (0, l.ZB)({
      type: o.Z.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (i = h.ZP.getMember(t, s.id)) || null == (r = i.collectibles) ? true : r.nameplate;
    (0, d.ZB)({
      type: o.Z.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function R(e) {
  let {
    userValue: t,
    guildValue: n,
    pendingValue: r,
    guildId: i
  } = e, a = "" === r || null === r, o = "" !== r && null != r, s = "" !== n && null != n;
  return a ? null != i ? t : null : o ? r : null != i && s ? n : t
}

function P(e, t) {
  return true === e ? null != t : null != e
}

function w(e, t) {
  return true === e ? null != t : null != e
}