/** Chunk was on web.js **/
/** chunk id: 329520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835834 = require("./835834.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk201895 = require("./201895.js"),
  Chunk933557 = require("./933557.js"),
  Chunk209698 = require("./209698.js"),
  Chunk592125 = require("./592125.js"),
  Chunk814454 = require("./814454.js"),
  Chunk473919 = require("./473919.jsx"),
  Chunk170187 = require("./170187.jsx"),
  Chunk532657 = require("./532657.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  let {
    stream: t,
    game: n,
    textVariant: d,
    textClassName: m,
    iconClassName: b,
    hideIcon: y = false,
    hideText: O = false,
    hideTooltip: v = false,
    canTruncate: I = true
  } = e, T = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channelId)), S = (0, u.ZP)(T), {
    analyticsLocations: A
  } = (0, l.ZP)(), C = i.useCallback(() => {
    (0, _.A)({
      analyticsLocations: A,
      activityType: g.IIU.STREAMING,
      voiceChannelId: t.channelId
    })
  }, [A, t.channelId]);
  if (y && O) return null;
  let N = (0, s.R)("formatActivityString"),
    R = (null == n ? true : n.name) === "" ? null : null == n ? true : n.name,
    P = null != R ? N ? R : E.intl.format(E.t["0wJXSh"], {
      name: R
    }) : E.intl.string(E.t.eXan7B),
    w = !v && null != T && null != S;
  return (0, r.jsxs)(r.Fragment, {
    children: [!y && (0, r.jsx)(p.Z, {
      icon: o.ARS,
      tooltipText: w ? S : true,
      tooltipAriaLabel: w ? (0, c.ZP)({
        channel: T
      }) : true,
      className: b,
      onTooltipShow: w ? C : true
    }), !O && (0, r.jsx)(h.Z, {
      variant: d,
      className: m,
      canTruncate: I,
      hideTooltip: v,
      children: P
    })]
  })
}

function v(e) {
  let {
    stream: t,
    game: n,
    textVariant: i,
    textClassName: l,
    iconClassName: c,
    hideIcon: d = false,
    hideText: _ = false,
    hideTooltip: h = false,
    canTruncate: g = true,
    showChannelName: b = false
  } = e, y = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channelId)), O = (0, u.ZP)(y), v = (null == n ? true : n.name) === "" ? null : null == n ? true : n.name, I = (0, s.R)("formatActivityString"), T = null != v ? I ? v : E.intl.format(E.t["0wJXSh"], {
    name: v
  }) : E.intl.string(E.t.eXan7B), S = null != v ? I ? v : E.intl.formatToPlainString(E.t["0wJXSh"], {
    name: v
  }) : E.intl.string(E.t.eXan7B), A = null != O ? (0, r.jsxs)(r.Fragment, {
    children: [T, " (", O, ")"]
  }) : T, C = b ? A : T, N = null != O ? "".concat(S, " (").concat(O, ")") : S;
  return (0, r.jsx)(m.Z, {
    icon: d ? true : (0, r.jsx)(p.Z, {
      icon: o.ARS,
      className: c
    }),
    text: C,
    tooltipText: h ? true : A,
    textVariant: i,
    className: l,
    canTruncate: g,
    hideTooltip: h,
    "aria-label": N,
    hideText: _
  })
}

function I(e) {
  return (0, d.b)({
    location: "VoiceActivityStatusExperimentWrapper"
  }) ? (0, r.jsx)(v, y({}, e)) : (0, r.jsx)(O, y({}, e))
}