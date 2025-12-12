/** Chunk was on web.js **/
/** chunk id: 122943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
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

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e) {
  let {
    channel: t,
    textVariant: n,
    textClassName: a,
    iconClassName: p,
    hideText: g = false,
    hideTooltip: O = false,
    canTruncate: v = true,
    showChannelName: S = false
  } = e, I = (0, l.vjg)(l.Skl.ONLINE), T = (0, d.ZP)(t), C = t.isDM() || t.isGroupDM(), {
    enableTopNavButton: A
  } = (0, f.Cq)({
    location: "VoiceActivityStatus"
  }), N = !A && S, {
    analyticsLocations: P
  } = (0, c.ZP)(), R = i.useCallback(() => {
    (0, m.A)({
      analyticsLocations: P,
      activityType: "VOICE",
      voiceChannelId: t.id
    })
  }, [P, t.id]), w = () => O || C ? (0, r.jsx)(_.Z, {
    size: "custom",
    color: I,
    channel: t,
    className: o()(y.icon, p)
  }) : (0, r.jsx)(s.u, {
    text: T,
    delay: E.X,
    onTooltipShow: R,
    children: (0, r.jsx)(_.Z, {
      size: "custom",
      color: I,
      channel: t,
      className: o()(y.icon, p),
      "aria-label": (0, u.ZP)({
        channel: t
      })
    })
  }), D = () => A ? T : C ? b.intl.string(b.t["9FaEzi"]) : t.isGuildStageVoice() ? b.intl.string(b.t.QygGCN) : b.intl.string(b.t.msxteM), x = (null == n ? true : n.startsWith("text-sm")) ? y.textSm : y.textXs;
  return (0, r.jsxs)("div", {
    className: o()(y.container, x),
    children: [w(), !g && (0, r.jsxs)(h.Z, {
      variant: n,
      className: a,
      canTruncate: v,
      hideTooltip: O,
      children: [D(), N && null != T && " (".concat(T, ")")]
    })]
  })
}

function I(e) {
  let {
    channel: t,
    textVariant: n,
    textClassName: i,
    iconClassName: a,
    hideText: s = false,
    hideTooltip: c = false,
    canTruncate: u = true,
    showChannelName: p = false
  } = e, m = (0, l.vjg)(l.Skl.ONLINE), h = (0, d.ZP)(t), E = t.isDM() || t.isGroupDM(), {
    enableTopNavButton: O
  } = (0, f.Cq)({
    location: "VoiceActivityStatusWithCombinedTooltip"
  }), v = O && null != h ? h : E ? b.intl.string(b.t["9FaEzi"]) : t.isGuildStageVoice() ? b.intl.string(b.t.QygGCN) : b.intl.string(b.t.msxteM), S = null == h || O ? v : "".concat(v, " (").concat(h, ")"), I = p ? S : v;
  return (0, r.jsx)(g.Z, {
    icon: (0, r.jsx)(_.Z, {
      size: "custom",
      color: m,
      channel: t,
      className: o()(y.icon, a)
    }),
    text: I,
    tooltipText: c ? true : S,
    textVariant: n,
    textClassName: i,
    hideTooltip: c,
    canTruncate: u,
    "aria-label": S,
    hideText: s
  })
}

function T(e) {
  return (0, p.b)({
    location: "VoiceActivityStatusExperimentWrapper"
  }) ? (0, r.jsx)(I, v({}, e)) : (0, r.jsx)(S, v({}, e))
}