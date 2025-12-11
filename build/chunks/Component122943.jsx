/** Chunk was on web.js **/
/** chunk id: 122943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk201895 = require("./201895.js"),
  Chunk933557 = require("./933557.js"),
  Chunk482798 = require("./482798.js"),
  Chunk209698 = require("./209698.js"),
  Chunk788858 = require("./788858.jsx"),
  Chunk814454 = require("./814454.js"),
  Chunk170187 = require("./170187.jsx"),
  Chunk532657 = require("./532657.jsx"),
  Chunk556638 = require("./556638.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk175996 = require("./175996.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let {
    channel: t,
    textVariant: n,
    textClassName: a,
    iconClassName: f,
    hideText: h = false,
    hideTooltip: y = false,
    canTruncate: v = true,
    showChannelName: I = false
  } = e, T = (0, s.vjg)(s.Skl.ONLINE), C = (0, u.ZP)(t), A = t.isDM() || t.isGroupDM(), {
    enableTopNavButton: N
  } = (0, d.Cq)({
    location: "VoiceActivityStatus"
  }), P = !N && I, {
    analyticsLocations: R
  } = (0, l.ZP)(), w = i.useCallback(() => {
    (0, _.A)({
      analyticsLocations: R,
      activityType: "VOICE",
      voiceChannelId: t.id
    })
  }, [R, t.id]), D = () => y || A ? (0, r.jsx)(p.Z, {
    size: "custom",
    color: T,
    channel: t,
    className: o()(b.icon, f)
  }) : (0, r.jsx)(s.aML, {
    "data-migration-pending": true,
    text: C,
    "aria-label": (0, c.ZP)({
      channel: t
    }),
    delay: g.X,
    onTooltipShow: w,
    children: e => (0, r.jsx)(p.Z, S(O({}, e), {
      size: "custom",
      color: T,
      channel: t,
      className: o()(b.icon, f)
    }))
  }), x = () => N ? C : A ? E.intl.string(E.t["9FaEzi"]) : t.isGuildStageVoice() ? E.intl.string(E.t.QygGCN) : E.intl.string(E.t.msxteM);
  return (0, r.jsxs)(r.Fragment, {
    children: [D(), !h && (0, r.jsxs)(m.Z, {
      variant: n,
      className: a,
      canTruncate: v,
      hideTooltip: y,
      children: [x(), P && null != C && " (".concat(C, ")")]
    })]
  })
}

function T(e) {
  let {
    channel: t,
    textVariant: n,
    textClassName: i,
    iconClassName: a,
    hideText: l = false,
    hideTooltip: c = false,
    canTruncate: f = true,
    showChannelName: _ = false
  } = e, m = (0, s.vjg)(s.Skl.ONLINE), g = (0, u.ZP)(t), y = t.isDM() || t.isGroupDM(), {
    enableTopNavButton: O
  } = (0, d.Cq)({
    location: "VoiceActivityStatusWithCombinedTooltip"
  }), v = O && null != g ? g : y ? E.intl.string(E.t["9FaEzi"]) : t.isGuildStageVoice() ? E.intl.string(E.t.QygGCN) : E.intl.string(E.t.msxteM), S = null == g || O ? v : "".concat(v, " (").concat(g, ")"), I = _ ? S : v;
  return (0, r.jsx)(h.Z, {
    icon: (0, r.jsx)(p.Z, {
      size: "custom",
      color: m,
      channel: t,
      className: o()(b.icon, a)
    }),
    text: I,
    tooltipText: c ? true : S,
    textVariant: n,
    textClassName: i,
    hideTooltip: c,
    canTruncate: f,
    "aria-label": S,
    hideText: l
  })
}

function C(e) {
  return (0, f.b)({
    location: "VoiceActivityStatusExperimentWrapper"
  }) ? (0, r.jsx)(T, O({}, e)) : (0, r.jsx)(I, O({}, e))
}