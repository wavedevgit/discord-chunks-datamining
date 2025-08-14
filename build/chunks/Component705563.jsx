/** Chunk was on web.js **/
/** chunk id: 705563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk360328 = require("./360328.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk482722 = require("./482722.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: E = false
  } = e, y = d.default.cast(t), {
    joinRequest: v,
    isModmin: I,
    guildId: T,
    maxMembers: S
  } = (0, i.cj)([f.Z, c.Z, u.Z], () => {
    let e = f.Z.getRequest(y),
      t = c.Z.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && u.Z.can(h.Plq.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), A = (0, i.e7)([l.Z], () => null != T ? l.Z.getMemberCount(T) : 0), N = null != S && (null != A ? A : 0) >= S, {
    approveRequest: C,
    rejectRequest: R,
    submitting: P
  } = (0, p.s)(null == v ? true : v.guildId, null == v ? true : v.userId, null == v ? true : v.joinRequestId);
  if (null == v || v.applicationStatus !== _.wB.SUBMITTED || !I) return null;
  let w = () => {
    (0, s.openUserProfileModal)({
      userId: v.userId,
      guildId: v.guildId
    })
  };
  return (0, r.jsxs)("div", {
    className: g.buttons,
    children: [(0, r.jsx)(o.ua7, {
      text: m.intl.string(m.t.cdPGbG),
      shouldShow: N,
      children: e => (0, r.jsx)(o.zxk, O(b({
        variant: "active",
        size: "sm",
        text: m.intl.string(m.t.BzjDQE)
      }, e), {
        loading: P,
        onClick: C,
        disabled: N
      }))
    }), (0, r.jsx)(o.zxk, {
      variant: "critical-primary",
      size: "sm",
      text: m.intl.string(m.t.hDtbs7),
      onClick: R,
      disabled: P || v.applicationStatus !== _.wB.SUBMITTED
    }), n && (0, r.jsx)(o.zxk, {
      onClick: w,
      variant: "secondary",
      size: "sm",
      text: m.intl.string(m.t.iXAna2)
    }), E && (0, r.jsx)(a.ZP.Divider, {})]
  })
}