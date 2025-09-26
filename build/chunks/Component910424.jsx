/** Chunk was on web.js **/
/** chunk id: 910424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572691 = require("./572691.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk595816 = require("./595816.js"),
  Chunk102172 = require("./102172.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    isCurrentUser: t,
    applicationStream: n,
    onAction: g
  } = e, {
    defaultWatchMultipleStreams: b
  } = (0, c.P)({
    location: "WatchStreamButton"
  }), {
    activeStream: O,
    watchingOtherStream: v
  } = (0, i.cj)([f.Z], () => ({
    activeStream: f.Z.getActiveStreamForApplicationStream(n),
    watchingOtherStream: null != n && f.Z.getAllActiveStreamsForChannel(n.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== n.ownerId
    }).length > 0
  })), I = (0, i.e7)([_.Z], () => _.Z.getChannel(null == n ? true : n.channelId)), [T, S] = (0, u.wq)(I), A = (0, d.Aq)(), C = null != O && null != n && O.state !== h.jm8.ENDED && O.ownerId === n.ownerId, N = e => {
    null != n && (null == g || g(), s.default.selectVoiceChannel(n.channelId), C || (0, l.iV)(n, {
      forceMultiple: e
    }), A.dispatch(h.CkL.POPOUT_CLOSE), p.S.dispatch(h.CkL.MODAL_CLOSE), o.Z.popAll())
  };
  if (null == n) return null;
  let R = (0, u.P9)(S);
  return t ? R = m.intl.string(m.t.XvBdeX) : C && (R = m.intl.string(m.t.JH1SJy)), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.zxk, {
      size: "sm",
      variant: C ? "secondary" : "active",
      icon: a.hGI,
      text: R,
      disabled: t || C || !T,
      onClick: () => N(false),
      fullWidth: true
    }), !v || C || b ? null : (0, r.jsx)(a.ua7, {
      text: m.intl.string(m.t.wCrzur),
      children: e => (0, r.jsx)(a.hU, y(E({}, e), {
        variant: "secondary",
        size: "sm",
        icon: a.OgY,
        "aria-label": m.intl.string(m.t.wCrzur),
        onClick: () => {
          var t;
          null == (t = e.onClick) || t.call(e), N(true)
        }
      }))
    })]
  })
}