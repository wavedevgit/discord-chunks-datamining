/** Chunk was on web.js **/
/** chunk id: 150039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jw: () => I,
  PO: () => T,
  Tb: () => O,
  UK: () => C,
  Wh: () => A,
  Ys: () => N,
  Zx: () => g,
  f$: () => R,
  gc: () => h,
  gd: () => P,
  i3: () => b,
  mD: () => E,
  nh: () => y,
  xQ: () => S,
  xZ: () => v
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js");

function h(e) {
  return r.useMemo(() => {
    let t = p.ZP.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var r;
      let o = null == (r = t[i][e]) ? true : r.avatar;
      null != o && (null == n[o] && (n[o] = []), n[o].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function g(e, t) {
  var n;
  let r = (0, s.e7)([p.ZP], () => true === t ? null : p.ZP.getMember(t, e.id)),
    i = e.nameplate,
    {
      pendingUserNameplate: o,
      userErrors: a
    } = (0, s.cj)([_.Z], () => ({
      pendingUserNameplate: _.Z.getPendingNameplate(),
      userErrors: _.Z.getErrors().nameplate
    })),
    {
      pendingGuildNameplate: l,
      guildErrors: c
    } = (0, s.cj)([u.Z], () => ({
      pendingGuildNameplate: u.Z.getPendingNameplate(),
      guildErrors: u.Z.getErrors().nameplate
    }));
  return {
    userNameplate: i,
    guildNameplate: null == r || null == (n = r.collectibles) ? true : n.nameplate,
    pendingNameplate: null != t ? l : o,
    pendingErrors: null != t ? c : a
  }
}

function E(e, t) {
  let n = (0, s.e7)([p.ZP], () => true === t || null == e ? null : p.ZP.getMember(t, e.id)),
    {
      pendingUserDisplayNameStyles: r,
      userErrors: i
    } = (0, s.cj)([_.Z], () => ({
      pendingUserDisplayNameStyles: _.Z.getPendingDisplayNameStyles(),
      userErrors: _.Z.getErrors().displayNameStyles
    })),
    {
      pendingGuildDisplayNameStyles: o,
      guildErrors: a
    } = (0, s.cj)([u.Z], () => ({
      pendingGuildDisplayNameStyles: u.Z.getPendingDisplayNameStyles(),
      guildErrors: u.Z.getErrors().displayNameStyles
    })),
    l = (0, s.e7)([_.Z], () => _.Z.getTryItOutDisplayNameStyles());
  return {
    userDisplayNameStyles: null == e ? true : e.displayNameStyles,
    guildDisplayNameStyles: null == n ? true : n.displayNameStyles,
    pendingDisplayNameStyles: null != t ? o : r,
    tryItOutDisplayNameStyles: l,
    pendingErrors: null != t ? a : i
  }
}

function b(e) {
  let {
    user: t,
    guildId: n
  } = e, r = (0, s.e7)([p.ZP], () => null != n ? p.ZP.getMember(n, t.id) : null);
  return null != n ? null == r ? true : r.avatarDecoration : t.avatarDecoration
}

function y(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return (0, s.e7)([f.Z], () => {
    var e, r;
    return null == n ? null == (e = f.Z.getUserProfile(t.id)) ? true : e.profileEffect : null == (r = f.Z.getGuildMemberProfile(t.id, n)) ? true : r.profileEffect
  })
}

function O(e) {
  let t = (0, s.cj)([_.Z], () => ({
      pendingAvatarDecoration: _.Z.getPendingAvatarDecoration(),
      errors: _.Z.getErrors().avatarDecoration
    })),
    n = (0, s.cj)([u.Z], () => ({
      pendingAvatarDecoration: u.Z.getPendingAvatarDecoration(),
      errors: u.Z.getErrors().avatarDecoration
    }));
  return null != e ? n : t
}

function v(e) {
  let t = (0, s.cj)([_.Z], () => ({
      pendingProfileEffect: _.Z.getPendingProfileEffect(),
      errors: _.Z.getErrors().profileEffect
    })),
    n = (0, s.cj)([u.Z], () => ({
      pendingProfileEffect: u.Z.getPendingProfileEffect(),
      errors: u.Z.getErrors().profileEffect
    }));
  return null != e ? n : t
}

function S(e, t) {
  (0, d.Cf)(e === t ? true : e)
}

function I(e, t) {
  (0, l.I5)((null == e ? true : e.imageUri) === t ? true : e)
}

function T(e, t) {
  let n = m.default.getCurrentUser();
  if (o()(null != n, "user cannot be null"), null == t) {
    let t = n.avatarDecoration;
    (0, l.ZB)({
      type: a.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    var r;
    let i = null == (r = p.ZP.getMember(t, n.id)) ? true : r.avatarDecoration;
    (0, c.ZB)({
      type: a.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == i ? true : i.skuId) ? true : e
    })
  }
}

function C(e, t) {
  var n, r;
  let i = m.default.getCurrentUser();
  if (o()(null != i, "user cannot be null"), null == t) {
    let t = null == (n = f.Z.getUserProfile(i.id)) ? true : n.profileEffect;
    (0, l.ZB)({
      type: a.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (r = f.Z.getGuildMemberProfile(i.id, t)) ? true : r.profileEffect;
    (0, c.ZB)({
      type: a.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function A(e, t) {
  var n, r, i;
  let s = m.default.getCurrentUser();
  if (o()(null != s, "user cannot be null"), null == t) {
    let t = null == (n = s.collectibles) ? true : n.nameplate;
    (0, l.ZB)({
      type: a.Z.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (i = p.ZP.getMember(t, s.id)) || null == (r = i.collectibles) ? true : r.nameplate;
    (0, c.ZB)({
      type: a.Z.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function N(e) {
  let {
    userValue: t,
    guildValue: n,
    pendingValue: r,
    guildId: i
  } = e, o = "" === r || null === r, a = "" !== r && null != r, s = "" !== n && null != n;
  return o ? null != i ? t : null : a ? r : null != i && s ? n : t
}

function P(e, t) {
  return true === e ? null != t : null != e
}

function R(e, t) {
  return true === e ? null != t : null != e
}