/** Chunk was on web.js **/
/** chunk id: 910424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572691 = require("./572691.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk102172 = require("./102172.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    isCurrentUser: t,
    applicationStream: n,
    onAction: m
  } = e, {
    activeStream: E,
    watchingOtherStream: y
  } = (0, i.cj)([d.Z], () => ({
    activeStream: d.Z.getActiveStreamForApplicationStream(n),
    watchingOtherStream: null != n && d.Z.getAllActiveStreamsForChannel(n.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== n.ownerId
    }).length > 0
  })), O = (0, i.e7)([f.Z], () => f.Z.getChannel(null == n ? true : n.channelId)), [v, I] = (0, u.wq)(O), S = (0, c.Aq)(), T = null != E && null != n && E.state !== p.jm8.ENDED && E.ownerId === n.ownerId, A = e => {
    null != n && (null == m || m(), s.default.selectVoiceChannel(n.channelId), T || (0, l.iV)(n, {
      forceMultiple: e
    }), S.dispatch(p.CkL.POPOUT_CLOSE), _.S.dispatch(p.CkL.MODAL_CLOSE), o.Z.popAll())
  };
  if (null == n) return null;
  let C = (0, u.P9)(I);
  return t ? C = h.intl.string(h.t.XvBdeX) : T && (C = h.intl.string(h.t.JH1SJy)), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.zxk, {
      size: "sm",
      variant: T ? "secondary" : "active",
      icon: a.hGI,
      text: C,
      disabled: t || T || !v,
      onClick: () => A(false),
      fullWidth: true
    }), y && !T ? (0, r.jsx)(a.ua7, {
      text: h.intl.string(h.t.wCrzur),
      children: e => (0, r.jsx)(a.hU, b(g({}, e), {
        variant: "secondary",
        size: "sm",
        icon: a.OgY,
        "aria-label": h.intl.string(h.t.wCrzur),
        onClick: () => {
          var t;
          null == (t = e.onClick) || t.call(e), A(true)
        }
      }))
    }) : null]
  })
}