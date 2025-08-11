/** Chunk was on web.js **/
/** chunk id: 493754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => S,
  Z: () => A
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk924301 = require("./924301.js"),
  Chunk786915 = require("./786915.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729910 = require("./729910.js");

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
  return null != e && null != t && p.Z.can(h.Plq.CREATE_INSTANT_INVITE, t)
}

function S(e) {
  let {
    guild: t,
    channel: i,
    streamUserId: o,
    applicationId: a,
    appContext: s,
    exitFullScreen: l,
    analyticsLocation: c,
    guildScheduledEvent: d
  } = e;
  null == l || l(), (0, u.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("7654"), n.e("49049"), n.e("29328")]).then(n.bind(n, 560114));
    return n => (0, r.jsx)(e, O(b({}, n), {
      guild: t,
      channel: i,
      streamUserId: o,
      applicationId: a,
      analyticsLocation: c,
      source: i.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
      guildScheduledEvent: d
    }))
  }, {
    modalKey: "stream-invite-modal",
    contextKey: s === h.IlC.POPOUT ? u.u1M : u.z1l
  })
}

function A(e) {
  var t, {
      stream: n,
      applicationId: i,
      channel: a,
      exitFullScreen: u,
      appContext: p,
      analyticsLocation: h,
      className: E
    } = e,
    y = v(e, ["stream", "applicationId", "channel", "exitFullScreen", "appContext", "analyticsLocation", "className"]);
  let I = null == a ? true : a.getGuildId(),
    A = null == a ? true : a.id,
    N = (0, l.e7)([_.Z], () => null != I ? _.Z.getGuild(I) : null, [I]),
    C = (0, l.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(A), [A]);
  if (!T(N, a)) return null;
  let R = m.intl.string(m.t.VINpSE);
  return null != n ? R = m.intl.string(m.t["6VQaqa"]) : null != i && (R = m.intl.string(m.t["OzOM/v"])), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.zx, O(b({
      size: null != (t = y.size) ? t : c.zx.Sizes.SMALL,
      color: g.buttonColor,
      onClick: () => {
        s()(null != N, "guild cannot be null"), s()(null != a, "channel cannot be null"), S({
          guild: N,
          channel: a,
          streamUserId: null == n ? true : n.ownerId,
          applicationId: i,
          appContext: p,
          exitFullScreen: u,
          analyticsLocation: h,
          guildScheduledEvent: C
        })
      },
      className: o()(E, g.textButton)
    }, y), {
      children: R
    })), (0, r.jsx)(f.Z, {
      channel: a,
      stream: n,
      appContext: p,
      className: o()(E, g.iconButton),
      exitFullScreen: u,
      analyticsLocation: h,
      guildScheduledEvent: C
    })]
  })
}