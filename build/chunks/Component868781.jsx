/** Chunk was on web.js **/
/** chunk id: 868781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk841784 = require("./841784.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk482798 = require("./482798.js"),
  Chunk750154 = require("./750154.js"),
  Chunk209698 = require("./209698.js"),
  Chunk802529 = require("./802529.js"),
  Chunk11133 = require("./11133.js"),
  Chunk814454 = require("./814454.js"),
  Chunk473919 = require("./473919.jsx"),
  Chunk170187 = require("./170187.jsx"),
  Chunk532657 = require("./532657.jsx"),
  Chunk981631 = require("./981631.js");

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
let y = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, c.dS)(e) ? a.ewx : (0, o.Z)(e) ? t ? a.iWm : a.jje : e.type === g.IIU.PLAYING ? a.iWm : e.type === g.IIU.LISTENING ? a.RZG : e.type === g.IIU.WATCHING || e.type === g.IIU.STREAMING ? a.ARS : e.type === g.IIU.COMPETING ? a.iWm : null
};

function O(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: a,
    iconClassName: o,
    hideIcon: c = false,
    hideText: u = false,
    hideTooltip: m = false,
    canTruncate: g = true
  } = e, {
    descriptiveTextEnabled: E
  } = (0, d.f)({
    location: "PresenceActivityStatus"
  }), {
    enableTopNavButton: b
  } = (0, l.Cq)({
    location: "PresenceActivityStatus"
  }), {
    analyticsLocations: O
  } = (0, s.ZP)(), v = i.useCallback(() => {
    (0, _.A)({
      analyticsLocations: O,
      activityType: t.type,
      applicationId: t.application_id
    })
  }, [O, t.application_id, t.type]);
  if (c && u) return null;
  let {
    text: I,
    tooltip: T
  } = (0, f.Z)(t, E || b), S = y(t), A = u && !m && null != T;
  return (0, r.jsxs)(r.Fragment, {
    children: [!c && null != S && (0, r.jsx)(p.Z, {
      icon: S,
      tooltipText: A ? T : true,
      className: o,
      onTooltipShow: A ? v : true
    }), !u && (0, r.jsx)(h.Z, {
      variant: n,
      className: a,
      canTruncate: g,
      hideTooltip: m,
      children: I
    })]
  })
}

function v(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: i,
    iconClassName: a,
    hideIcon: o = false,
    hideText: s = false,
    hideTooltip: c = false,
    canTruncate: u = true
  } = e, {
    descriptiveTextEnabled: _
  } = (0, d.f)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    enableTopNavButton: h
  } = (0, l.Cq)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    text: g,
    tooltip: E
  } = (0, f.Z)(t, _ || h), b = y(t), O = null != b && !o;
  return (0, r.jsx)(m.Z, {
    icon: O ? (0, r.jsx)(p.Z, {
      icon: b,
      className: a
    }) : true,
    text: g,
    textVariant: n,
    textClassName: i,
    hideTooltip: c,
    canTruncate: u,
    "aria-label": null != E ? E : "",
    hideText: s
  })
}

function I(e) {
  return (0, u.b)({
    location: "VoiceActivityStatusExperimentWrapper"
  }) ? (0, r.jsx)(v, b({}, e)) : (0, r.jsx)(O, b({}, e))
}