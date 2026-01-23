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
  Chunk622543 = require("./622543.js"),
  Chunk696451 = require("./696451.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js");

function m(e) {
  return r.useMemo(() => {
    let t = p.Ay.getMutableAllGuildsAndMembers(),
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
  let r = (0, o.bG)([p.Ay], () => true === t ? null : p.Ay.getMember(t, e.id)),
    i = e.nameplate,
    {
      pendingUserNameplate: a,
      userErrors: s
    } = (0, o.cf)([_.A], () => ({
      pendingUserNameplate: _.A.getPendingNameplate(),
      userErrors: _.A.getErrors().nameplate
    })),
    {
      pendingGuildNameplate: l,
      guildErrors: c
    } = (0, o.cf)([u.A], () => ({
      pendingGuildNameplate: u.A.getPendingNameplate(),
      guildErrors: u.A.getErrors().nameplate
    }));
  return {
    userNameplate: i,
    guildNameplate: null == r || null == (n = r.collectibles) ? true : n.nameplate,
    pendingNameplate: null != t ? l : a,
    pendingErrors: null != t ? c : s
  }
}

function E(e, t) {
  let n = (0, o.bG)([p.Ay], () => true === t || null == e ? null : p.Ay.getMember(t, e.id)),
    {
      pendingUserDisplayNameStyles: r,
      userErrors: i
    } = (0, o.cf)([_.A], () => ({
      pendingUserDisplayNameStyles: _.A.getPendingDisplayNameStyles(),
      userErrors: _.A.getErrors().displayNameStyles
    })),
    {
      pendingGuildDisplayNameStyles: a,
      guildErrors: s
    } = (0, o.cf)([u.A], () => ({
      pendingGuildDisplayNameStyles: u.A.getPendingDisplayNameStyles(),
      guildErrors: u.A.getErrors().displayNameStyles
    })),
    l = (0, o.bG)([_.A], () => _.A.getTryItOutDisplayNameStyles());
  return {
    userDisplayNameStyles: null == e ? true : e.displayNameStyles,
    guildDisplayNameStyles: null == n ? true : n.displayNameStyles,
    pendingDisplayNameStyles: null != t ? a : r,
    tryItOutDisplayNameStyles: l,
    pendingErrors: null != t ? s : i
  }
}

function y(e) {
  let {
    user: t,
    guildId: n
  } = e, r = (0, o.bG)([p.Ay], () => null != n ? p.Ay.getMember(n, t.id) : null);
  return null != n ? null == r ? true : r.avatarDecoration : t.avatarDecoration
}

function b(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return (0, o.bG)([f.A], () => {
    var e, r;
    return null == n ? null == (e = f.A.getUserProfile(t.id)) ? true : e.profileEffect : null == (r = f.A.getGuildMemberProfile(t.id, n)) ? true : r.profileEffect
  })
}

function O(e) {
  let t = (0, o.cf)([_.A], () => ({
      pendingAvatarDecoration: _.A.getPendingAvatarDecoration(),
      errors: _.A.getErrors().avatarDecoration
    })),
    n = (0, o.cf)([u.A], () => ({
      pendingAvatarDecoration: u.A.getPendingAvatarDecoration(),
      errors: u.A.getErrors().avatarDecoration
    }));
  return null != e ? n : t
}

function v(e) {
  let t = (0, o.cf)([_.A], () => ({
      pendingProfileEffect: _.A.getPendingProfileEffect(),
      errors: _.A.getErrors().profileEffect
    })),
    n = (0, o.cf)([u.A], () => ({
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
      type: s.R.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    var r;
    let i = null == (r = p.Ay.getMember(t, n.id)) ? true : r.avatarDecoration;
    (0, c.WR)({
      type: s.R.AVATAR_DECORATION,
      value: (null == e ? true : e.skuId) === (null == i ? true : i.skuId) ? true : e
    })
  }
}

function T(e, t) {
  var n, r;
  let i = h.default.getCurrentUser();
  if (a()(null != i, "user cannot be null"), null == t) {
    let t = null == (n = f.A.getUserProfile(i.id)) ? true : n.profileEffect;
    (0, l.WR)({
      type: s.R.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (r = f.A.getGuildMemberProfile(i.id, t)) ? true : r.profileEffect;
    (0, c.WR)({
      type: s.R.PROFILE_EFFECT,
      value: (null == e ? true : e.skuId) === (null == n ? true : n.skuId) ? true : e
    })
  }
}

function C(e, t) {
  var n, r, i;
  let o = h.default.getCurrentUser();
  if (a()(null != o, "user cannot be null"), null == t) {
    let t = null == (n = o.collectibles) ? true : n.nameplate;
    (0, l.WR)({
      type: s.R.NAMEPLATE,
      value: (null == e ? true : e.skuId) === (null == t ? true : t.skuId) ? true : e
    })
  } else {
    let n = null == (i = p.Ay.getMember(t, o.id)) || null == (r = i.collectibles) ? true : r.nameplate;
    (0, c.WR)({
      type: s.R.NAMEPLATE,
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
  } = e, a = "" === r || null === r, s = "" !== r && null != r, o = "" !== n && null != n;
  return a ? null != i ? t : null : s ? r : null != i && o ? n : t
}

function w(e, t) {
  return true === e ? null != t : null != e
}

function R(e, t) {
  return true === e ? null != t : null != e
}