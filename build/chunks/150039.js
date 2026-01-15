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
  f$: () => w,
  gc: () => m,
  gd: () => P,
  i3: () => b,
  mD: () => E,
  nh: () => y,
  xQ: () => S,
  xZ: () => v
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function m(e) {
  return r.useMemo(() => {
    let t = p.ZP.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var r;
      let a = null == (r = t[i][e]) ? true : r.avatar;
      null != a && (null == n[a] && (n[a] = []), n[a].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function g(e, t) {
  var n;
  let r = (0, s.e7)([p.ZP], () => true === t ? null : p.ZP.getMember(t, e.id)),
    i = e.nameplate,
    {
      pendingUserNameplate: a,
      userErrors: o
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
    pendingNameplate: null != t ? l : a,
    pendingErrors: null != t ? c : o
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
      pendingGuildDisplayNameStyles: a,
      guildErrors: o
    } = (0, s.cj)([u.Z], () => ({
      pendingGuildDisplayNameStyles: u.Z.getPendingDisplayNameStyles(),
      guildErrors: u.Z.getErrors().displayNameStyles
    })),
    l = (0, s.e7)([_.Z], () => _.Z.getTryItOutDisplayNameStyles());
  return {
    userDisplayNameStyles: null == e ? true : e.displayNameStyles,
    guildDisplayNameStyles: null == n ? true : n.displayNameStyles,
    pendingDisplayNameStyles: null != t ? a : r,
    tryItOutDisplayNameStyles: l,
    pendingErrors: null != t ? o : i
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
  let n = h.default.getCurrentUser();
  if (a()(null != n, "user cannot be null"), null == t) {
    let t = n.avatarDecoration;
    (0, l.ZB)({
      type: o.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    var r;
    let i = null == (r = p.ZP.getMember(t, n.id)) ? true : r.avatarDecoration;
    (0, c.ZB)({
      type: o.Z.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == i ? true : i.skuId) ? true : e
    })
  }
}

function C(e, t) {
  var n, r;
  let i = h.default.getCurrentUser();
  if (a()(null != i, "user cannot be null"), null == t) {
    let t = null == (n = f.Z.getUserProfile(i.id)) ? true : n.profileEffect;
    (0, l.ZB)({
      type: o.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (r = f.Z.getGuildMemberProfile(i.id, t)) ? true : r.profileEffect;
    (0, c.ZB)({
      type: o.Z.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function A(e, t) {
  var n, r, i;
  let s = h.default.getCurrentUser();
  if (a()(null != s, "user cannot be null"), null == t) {
    let t = null == (n = s.collectibles) ? true : n.nameplate;
    (0, l.ZB)({
      type: o.Z.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (i = p.ZP.getMember(t, s.id)) || null == (r = i.collectibles) ? true : r.nameplate;
    (0, c.ZB)({
      type: o.Z.NAMEPLATE,
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
  } = e, a = "" === r || null === r, o = "" !== r && null != r, s = "" !== n && null != n;
  return a ? null != i ? t : null : o ? r : null != i && s ? n : t
}

function P(e, t) {
  return true === e ? null != t : null != e
}

function w(e, t) {
  return true === e ? null != t : null != e
}