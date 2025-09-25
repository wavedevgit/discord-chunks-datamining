/** Chunk was on web.js **/
/** chunk id: 150039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $U: () => h,
  Jw: () => O,
  Kg: () => E,
  PO: () => I,
  Wx: () => S,
  ZT: () => A,
  Zx: () => m,
  bd: () => b,
  f$: () => N,
  gc: () => p,
  gd: () => C,
  mD: () => g,
  s6: () => T,
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
  let {
    enabled: n
  } = s.wL.useConfig({
    location: "useGuildMemberOrUserPendingDisplayNameStyles"
  }), r = (0, i.e7)([f.ZP], () => true === t || null == e ? null : f.ZP.getMember(t, e.id)), {
    pendingUserDisplayNameStyles: a,
    userErrors: o
  } = (0, i.cj)([_.Z], () => ({
    pendingUserDisplayNameStyles: _.Z.getPendingDisplayNameStyles(),
    userErrors: _.Z.getErrors().displayNameStyles
  })), {
    pendingGuildDisplayNameStyles: l,
    guildErrors: u
  } = (0, i.cj)([c.Z], () => ({
    pendingGuildDisplayNameStyles: c.Z.getPendingDisplayNameStyles(),
    guildErrors: c.Z.getErrors().displayNameStyles
  })), d = null == e ? true : e.displayNameStyles, p = null == r ? true : r.displayNameStyles;
  return null != t && n && (null != p || null != l) ? {
    currentDisplayNameStyles: p,
    pendingDisplayNameStyles: l,
    pendingErrors: u
  } : {
    currentDisplayNameStyles: d,
    pendingDisplayNameStyles: a,
    pendingErrors: o
  }
}

function E(e, t) {
  return (0, i.e7)([d.Z], () => {
    var n, r, i, a;
    return null == t ? null == (r = d.Z.getUserProfile(e.id)) || null == (n = r.profileEffect) ? true : n.id : null == (a = d.Z.getGuildMemberProfile(e.id, t.id)) || null == (i = a.profileEffect) ? true : i.id
  }, [e, t])
}

function b(e) {
  return (0, i.cj)([_.Z, c.Z], () => null == e ? {
    pendingProfileEffectId: _.Z.getPendingProfileEffectId(),
    errors: _.Z.getErrors().profileEffect
  } : {
    pendingProfileEffectId: c.Z.getPendingProfileEffectId(),
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

function T(e, t, n) {
  if (e === t) return void(null == n ? (0, a.xn)(true) : (0, l.xn)(true));
  null == n ? (0, a.xn)(e) : (0, l.xn)(e)
}

function S(e, t, n) {
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

function A(e) {
  var t, n, r, i, a;
  let {
    pendingProfileEffectId: o,
    displayProfile: s
  } = e, l = null == s || null == (n = s._userProfile) || null == (t = n.profileEffect) ? true : t.id, c = null == s || null == (i = s._guildMemberProfile) || null == (r = i.profileEffect) ? true : r.id, u = null === o;
  return u && null != c ? l : u ? null : null != o ? o : null == s || null == (a = s.profileEffect) ? true : a.id
}

function C(e, t) {
  return true === e ? null != t : null != e
}

function N(e, t) {
  return true === e ? null != t : null != e
}