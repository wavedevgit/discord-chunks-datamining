/** Chunk was on web.js **/
/** chunk id: 786915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk24124 = require("./24124.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk430824 = require("./430824.js"),
  Chunk293273 = require("./293273.js"),
  Chunk496675 = require("./496675.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function T(e, t) {
  return null != e && null != t && p.Z.can(m.Plq.CREATE_INSTANT_INVITE, t)
}

function S(e) {
  let {
    guild: t,
    channel: i,
    streamUserId: o,
    applicationId: a,
    appContext: l,
    exitFullScreen: c,
    analyticsLocation: u,
    guildScheduledEvent: d
  } = e;
  null == c || c(), (0, s.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("7654"), n.e("49049"), n.e("29328")]).then(n.bind(n, 560114));
    return n => (0, r.jsx)(e, O(b({}, n), {
      guild: t,
      channel: i,
      streamUserId: o,
      applicationId: a,
      analyticsLocation: u,
      source: i.isGuildStageVoice() ? m.t4x.STAGE_CHANNEL : m.t4x.STREAM_INVITE,
      guildScheduledEvent: d
    }))
  }, {
    modalKey: "stream-invite-modal",
    contextKey: l === m.IlC.POPOUT ? s.u1M : s.z1l
  })
}

function A(e) {
  var {
    applicationId: t,
    stream: n,
    channel: i,
    exitFullScreen: p,
    appContext: m,
    analyticsLocation: E,
    guildScheduledEvent: y,
    shouldPrioritizeGroupPlusIcon: O = false,
    isRichPresenceInvite: I = false,
    iconClassName: A,
    look: N,
    size: C,
    buttonText: R,
    color: P
  } = e, w = v(e, ["applicationId", "stream", "channel", "exitFullScreen", "appContext", "analyticsLocation", "guildScheduledEvent", "shouldPrioritizeGroupPlusIcon", "isRichPresenceInvite", "iconClassName", "look", "size", "buttonText", "color"]);
  let D = (0, c.bp)(),
    {
      parentAnalyticsLocation: L
    } = (0, u.ZP)(),
    x = null == i ? true : i.getGuildId(),
    M = (0, a.e7)([f.Z], () => null != x ? f.Z.getGuild(x) : null, [x]),
    k = (0, a.e7)([_.Z], () => null != t ? _.Z.getApplicationActivity(t) : true),
    j = null == t || O ? s.ejJ : s.gQj,
    U = null != t ? g.intl.string(g.t["OzOM/v"]) : g.intl.string(g.t["6F9ivr"]);
  if (null != k && I) {
    let e = () => {
      null != L && (0, d.v)(L, d.d.INVITE), l.h7(k, false, D)
    };
    return (0, r.jsx)(h.Z, {
      onClick: e,
      iconComponent: j,
      label: U,
      iconClassName: A,
      look: N,
      size: C,
      buttonText: R,
      color: null != P ? P : true
    })
  }
  return T(M, i) ? (0, r.jsx)(h.Z, b({
    onClick: () => {
      o()(null != M, "guild cannot be null"), o()(null != i, "channel cannot be null"), null != L && (0, d.v)(L, d.d.INVITE), S({
        guild: M,
        channel: i,
        streamUserId: null == n ? true : n.ownerId,
        applicationId: t,
        appContext: null != m ? m : D,
        exitFullScreen: p,
        analyticsLocation: E,
        guildScheduledEvent: y
      })
    },
    iconComponent: j,
    label: U,
    iconClassName: A,
    look: N,
    size: C,
    color: P,
    buttonText: R
  }, w)) : null
}