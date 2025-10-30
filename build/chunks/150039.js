/** Chunk was on web.js **/
/** chunk id: 150039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $U: () => h,
  Jw: () => O,
  Kg: () => E,
  PO: () => I,
  UK: () => S,
  Ys: () => T,
  Zx: () => m,
  bd: () => b,
  f$: () => C,
  gc: () => p,
  gd: () => A,
  mD: () => g,
  xQ: () => y
}), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk676742 = require("./676742.js"),
  Chunk594928 = require("./594928.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js");

function p(e) {
  return r.useMemo(() => {
    let t = f.ZP.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var r;
      let a = null == (r = t[i][e]) ? true : r.avatar;
      null != a && (null == n[a] && (n[a] = []), n[a].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function h(e, t) {
  let n = (0, i.e7)([f.ZP], () => true === t ? null : f.ZP.getMember(t.id, e.id)),
    r = (0, o.Z)(e.avatarDecoration),
    {
      pendingUserAvatarDecoration: a,
      userErrors: s
    } = (0, i.cj)([_.Z], () => ({
      pendingUserAvatarDecoration: _.Z.getPendingAvatarDecoration(),
      userErrors: _.Z.getErrors().avatarDecoration
    })),
    {
      pendingGuildAvatarDecoration: l,
      guildErrors: u
    } = (0, i.cj)([c.Z], () => ({
      pendingGuildAvatarDecoration: c.Z.getPendingAvatarDecoration(),
      guildErrors: c.Z.getErrors().avatarDecoration
    }));
  return {
    userAvatarDecoration: r,
    guildAvatarDecoration: null == n ? true : n.avatarDecoration,
    pendingAvatarDecoration: null != t ? l : a,
    pendingErrors: null != t ? u : s
  }
}

function m(e, t) {
  var n;
  let r = (0, i.e7)([f.ZP], () => true === t ? null : f.ZP.getMember(t, e.id)),
    a = e.nameplate,
    {
      pendingUserNameplate: o,
      userErrors: s
    } = (0, i.cj)([_.Z], () => ({
      pendingUserNameplate: _.Z.getPendingNameplate(),
      userErrors: _.Z.getErrors().nameplate
    })),
    {
      pendingGuildNameplate: l,
      guildErrors: u
    } = (0, i.cj)([c.Z], () => ({
      pendingGuildNameplate: c.Z.getPendingNameplate(),
      guildErrors: c.Z.getErrors().nameplate
    }));
  return {
    userNameplate: a,
    guildNameplate: null == r || null == (n = r.collectibles) ? true : n.nameplate,
    pendingNameplate: null != t ? l : o,
    pendingErrors: null != t ? u : s
  }
}

function g(e, t) {
  (0, s.cL)({
    location: "useGuildMemberOrUserPendingDisplayNameStyles"
  }) || (t = true);
  let n = (0, i.e7)([f.ZP], () => true === t || null == e ? null : f.ZP.getMember(t, e.id)),
    {
      pendingUserDisplayNameStyles: r,
      userErrors: a
    } = (0, i.cj)([_.Z], () => ({
      pendingUserDisplayNameStyles: _.Z.getPendingDisplayNameStyles(),
      userErrors: _.Z.getErrors().displayNameStyles
    })),
    {
      pendingGuildDisplayNameStyles: o,
      guildErrors: l
    } = (0, i.cj)([c.Z], () => ({
      pendingGuildDisplayNameStyles: c.Z.getPendingDisplayNameStyles(),
      guildErrors: c.Z.getErrors().displayNameStyles
    }));
  return {
    userDisplayNameStyles: null == e ? true : e.displayNameStyles,
    guildDisplayNameStyles: null == n ? true : n.displayNameStyles,
    pendingDisplayNameStyles: null != t ? o : r,
    pendingErrors: null != t ? l : a
  }
}

function E(e, t) {
  return (0, i.e7)([d.Z], () => {
    var n, r;
    return null == t ? null == (n = d.Z.getUserProfile(e.id)) ? true : n.profileEffect : null == (r = d.Z.getGuildMemberProfile(e.id, t.id)) ? true : r.profileEffect
  })
}

function b(e) {
  return (0, i.cj)([_.Z, c.Z], () => null == e ? {
    pendingProfileEffect: _.Z.getPendingProfileEffect(),
    errors: _.Z.getErrors().profileEffect
  } : {
    pendingProfileEffect: c.Z.getPendingProfileEffect(),
    errors: c.Z.getErrors().profileEffect
  }, [e])
}

function y(e, t) {
  (0, u.Cf)(e === t ? true : e)
}

function O(e, t) {
  (0, a.I5)((null == e ? true : e.imageUri) === t ? true : e)
}

function v(e) {
  return e ? l.cV : a.cV
}

function I(e, t) {
  v(null != e)(t)
}

function S(e, t, n) {
  if ((null == e ? true : e.skuId) === (null == t ? true : t.skuId)) return void(null == n ? (0, a.Fu)(true) : (0, l.Fu)(true));
  null == n ? (0, a.Fu)(e) : (0, l.Fu)(e)
}

function T(e) {
  let {
    userValue: t,
    guildValue: n,
    pendingValue: r,
    guildId: i
  } = e, a = "" === r || null === r, o = "" !== r && null != r, s = "" !== n && null != n;
  return a ? null != i ? t : null : o ? r : null != i && s ? n : t
}

function A(e, t) {
  return true === e ? null != t : null != e
}

function C(e, t) {
  return true === e ? null != t : null != e
}