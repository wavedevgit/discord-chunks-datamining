/** Chunk was on web.js **/
/** chunk id: 919395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ac: () => R,
  B0: () => E,
  CP: () => O,
  Dx: () => S,
  EI: () => m,
  N2: () => b,
  Ru: () => A,
  a4: () => y,
  lw: () => N,
  mZ: () => T,
  nZ: () => v,
  pX: () => C,
  ru: () => I,
  rv: () => g,
  z5: () => w
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk631670 = require("./631670.js"),
  Chunk159001 = require("./159001.js"),
  Chunk833336 = require("./833336.js"),
  Chunk207803 = require("./207803.js"),
  Chunk836602 = require("./836602.js"),
  Chunk622543 = require("./622543.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js");

function m(e) {
  return r.useMemo(() => {
    let t = _.Ay.getMutableAllGuildsAndMembers(),
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
  let r = (0, s.bG)([_.Ay], () => true === t ? null : _.Ay.getMember(t, e.id)),
    i = e.nameplate,
    {
      pendingUserNameplate: a,
      userErrors: o
    } = (0, s.cf)([f.A], () => ({
      pendingUserNameplate: f.A.getPendingChanges().pendingNameplate,
      userErrors: f.A.getErrors().nameplate
    })),
    {
      pendingGuildNameplate: l,
      guildErrors: c
    } = (0, s.cf)([u.A], () => ({
      pendingGuildNameplate: u.A.getPendingNameplate(),
      guildErrors: u.A.getErrors().nameplate
    }));
  return {
    userNameplate: i,
    guildNameplate: null == r || null == (n = r.collectibles) ? true : n.nameplate,
    pendingNameplate: null != t ? l : a,
    pendingErrors: null != t ? c : o
  }
}

function E(e, t) {
  let n = (0, s.bG)([_.Ay], () => true === t || null == e ? null : _.Ay.getMember(t, e.id)),
    {
      pendingUserDisplayNameStyles: r,
      tryItOutDisplayNameStyles: i,
      userErrors: a
    } = (0, s.cf)([f.A], () => ({
      pendingUserDisplayNameStyles: f.A.getPendingChanges().pendingDisplayNameStyles,
      tryItOutDisplayNameStyles: f.A.getTryItOutChanges().tryItOutDisplayNameStyles,
      userErrors: f.A.getErrors().displayNameStyles
    })),
    {
      pendingGuildDisplayNameStyles: o,
      guildErrors: l
    } = (0, s.cf)([u.A], () => ({
      pendingGuildDisplayNameStyles: u.A.getPendingDisplayNameStyles(),
      guildErrors: u.A.getErrors().displayNameStyles
    }));
  return {
    userDisplayNameStyles: null == e ? true : e.displayNameStyles,
    guildDisplayNameStyles: null == n ? true : n.displayNameStyles,
    pendingDisplayNameStyles: null != t ? o : r,
    tryItOutDisplayNameStyles: i,
    pendingErrors: null != t ? l : a
  }
}

function y(e) {
  let {
    user: t,
    guildId: n
  } = e, r = (0, s.bG)([_.Ay], () => null != n ? _.Ay.getMember(n, t.id) : null);
  return null != n ? null == r ? true : r.avatarDecoration : t.avatarDecoration
}

function b(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return (0, s.bG)([p.A], () => {
    var e, r;
    return null == n ? null == (e = p.A.getUserProfile(t.id)) ? true : e.profileEffect : null == (r = p.A.getGuildMemberProfile(t.id, n)) ? true : r.profileEffect
  })
}

function O(e) {
  let t = (0, s.cf)([f.A], () => ({
      pendingAvatarDecoration: f.A.getPendingChanges().pendingAvatarDecoration,
      errors: f.A.getErrors().avatarDecoration
    })),
    n = (0, s.cf)([u.A], () => ({
      pendingAvatarDecoration: u.A.getPendingAvatarDecoration(),
      errors: u.A.getErrors().avatarDecoration
    }));
  return null != e ? n : t
}

function v(e) {
  let t = (0, s.cf)([f.A], () => ({
      pendingProfileEffect: f.A.getPendingChanges().pendingProfileEffect,
      errors: f.A.getErrors().profileEffect
    })),
    n = (0, s.cf)([u.A], () => ({
      pendingProfileEffect: u.A.getPendingProfileEffect(),
      errors: u.A.getErrors().profileEffect
    }));
  return null != e ? n : t
}

function A(e, t) {
  (0, d.Er)(e === t ? true : e)
}

function I(e, t) {
  (0, l.zq)((null == e ? true : e.imageUri) === t ? true : e)
}

function S(e, t) {
  let n = h.default.getCurrentUser();
  if (a()(null != n, "user cannot be null"), null == t) {
    let t = n.avatarDecoration;
    (0, l.WR)({
      type: o.R.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    var r;
    let i = null == (r = _.Ay.getMember(t, n.id)) ? true : r.avatarDecoration;
    (0, c.WR)({
      type: o.R.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == i ? true : i.skuId) ? true : e
    })
  }
}

function T(e, t) {
  var n, r;
  let i = h.default.getCurrentUser();
  if (a()(null != i, "user cannot be null"), null == t) {
    let t = null == (n = p.A.getUserProfile(i.id)) ? true : n.profileEffect;
    (0, l.WR)({
      type: o.R.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (r = p.A.getGuildMemberProfile(i.id, t)) ? true : r.profileEffect;
    (0, c.WR)({
      type: o.R.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function C(e, t) {
  var n, r, i;
  let s = h.default.getCurrentUser();
  if (a()(null != s, "user cannot be null"), null == t) {
    let t = null == (n = s.collectibles) ? true : n.nameplate;
    (0, l.WR)({
      type: o.R.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (i = _.Ay.getMember(t, s.id)) || null == (r = i.collectibles) ? true : r.nameplate;
    (0, c.WR)({
      type: o.R.NAMEPLATE,
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

function w(e, t) {
  return true === e ? null != t : null != e
}

function R(e, t) {
  return true === e ? null != t : null != e
}