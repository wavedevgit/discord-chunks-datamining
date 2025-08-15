/** Chunk was on web.js **/
/** chunk id: 150039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $U: () => p,
  Jw: () => b,
  Kg: () => m,
  PO: () => O,
  Wx: () => I,
  ZT: () => T,
  Zx: () => h,
  bd: () => g,
  f$: () => A,
  gc: () => _,
  gd: () => S,
  s6: () => v,
  xQ: () => E
}), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk676742 = require("./676742.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js");

function _(e) {
  return r.useMemo(() => {
    let t = d.ZP.getMutableAllGuildsAndMembers(),
      n = {};
    for (let i in t) {
      var r;
      let a = null == (r = t[i][e]) ? true : r.avatar;
      null != a && (null == n[a] && (n[a] = []), n[a].push(i))
    }
    return null != n ? Object.entries(n).map(e => e[1][0]) : []
  }, [e])
}

function p(e, t) {
  let n = (0, i.e7)([d.ZP], () => true === t ? null : d.ZP.getMember(t.id, e.id)),
    r = (0, o.Z)(e.avatarDecoration),
    {
      pendingUserAvatarDecoration: a,
      userErrors: s
    } = (0, i.cj)([f.Z], () => ({
      pendingUserAvatarDecoration: f.Z.getPendingAvatarDecoration(),
      userErrors: f.Z.getErrors().avatarDecoration
    })),
    {
      pendingGuildAvatarDecoration: c,
      guildErrors: u
    } = (0, i.cj)([l.Z], () => ({
      pendingGuildAvatarDecoration: l.Z.getPendingAvatarDecoration(),
      guildErrors: l.Z.getErrors().avatarDecoration
    }));
  return {
    userAvatarDecoration: r,
    guildAvatarDecoration: null == n ? true : n.avatarDecoration,
    pendingAvatarDecoration: null != t ? c : a,
    pendingErrors: null != t ? u : s
  }
}

function h(e, t) {
  var n;
  let r = (0, i.e7)([d.ZP], () => true === t ? null : d.ZP.getMember(t, e.id)),
    a = e.nameplate,
    {
      pendingUserNameplate: o,
      userErrors: s
    } = (0, i.cj)([f.Z], () => ({
      pendingUserNameplate: f.Z.getPendingNameplate(),
      userErrors: f.Z.getErrors().nameplate
    })),
    {
      pendingGuildNameplate: c,
      guildErrors: u
    } = (0, i.cj)([l.Z], () => ({
      pendingGuildNameplate: l.Z.getPendingNameplate(),
      guildErrors: l.Z.getErrors().nameplate
    }));
  return {
    userNameplate: a,
    guildNameplate: null == r || null == (n = r.collectibles) ? true : n.nameplate,
    pendingNameplate: null != t ? c : o,
    pendingErrors: null != t ? u : s
  }
}

function m(e, t) {
  return (0, i.e7)([u.Z], () => {
    var n, r;
    return null == t ? null == (n = u.Z.getUserProfile(e.id)) ? true : n.profileEffectId : null == (r = u.Z.getGuildMemberProfile(e.id, t.id)) ? true : r.profileEffectId
  }, [e, t])
}

function g(e) {
  return (0, i.cj)([f.Z, l.Z], () => null == e ? {
    pendingProfileEffectId: f.Z.getPendingProfileEffectId(),
    errors: f.Z.getErrors().profileEffect
  } : {
    pendingProfileEffectId: l.Z.getPendingProfileEffectId(),
    errors: l.Z.getErrors().profileEffect
  }, [e])
}

function E(e, t) {
  (0, c.Cf)(e === t ? true : e)
}

function b(e, t) {
  (0, a.I5)((null == e ? true : e.imageUri) === t ? true : e)
}

function y(e) {
  return e ? s.cV : a.cV
}

function O(e, t) {
  y(null != e)(t)
}

function v(e, t, n) {
  if (e === t) return void(null == n ? (0, a.xn)(true) : (0, s.xn)(true));
  null == n ? (0, a.xn)(e) : (0, s.xn)(e)
}

function I(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
  return null != e ? "string" == typeof e && "" === e ? {
    value: r ? n : null,
    isUsingGuildValue: false
  } : {
    value: e,
    isUsingGuildValue: r
  } : null != t && ("string" != typeof t || "" !== t) ? {
    value: t,
    isUsingGuildValue: true
  } : {
    value: n,
    isUsingGuildValue: false
  }
}

function T(e) {
  var t, n;
  let {
    pendingProfileEffectId: r,
    displayProfile: i
  } = e, a = null == i || null == (t = i._userProfile) ? true : t.profileEffectId, o = null == i || null == (n = i._guildMemberProfile) ? true : n.profileEffectId, s = null === r;
  return s && null != o ? a : s ? null : null != r ? r : null == i ? true : i.profileEffectId
}

function S(e, t) {
  return true === e ? null != t : null != e
}

function A(e, t) {
  return true === e ? null != t : null != e
}