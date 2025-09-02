/** Chunk was on web.js **/
/** chunk id: 868781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk456100 = require("./456100.js"),
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
let O = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, u.dS)(e) ? a.ewx : (0, s.Z)(e) ? t ? a.iWm : a.jje : e.type === E.IIU.PLAYING ? a.iWm : e.type === E.IIU.LISTENING ? a.RZG : e.type === E.IIU.WATCHING || e.type === E.IIU.STREAMING ? a.ARS : e.type === E.IIU.COMPETING ? a.iWm : null
};

function v(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: a,
    iconClassName: s,
    hideIcon: u = false,
    hideText: d = false,
    hideTooltip: g = false,
    canTruncate: E = true
  } = e, {
    enabled: b
  } = o.c.useExperiment({
    location: "PresenceActivityStatus"
  }, {
    autoTrackExposure: true
  }), {
    descriptiveTextEnabled: y
  } = (0, f.f)({
    location: "PresenceActivityStatus"
  }), {
    enableTopNavButton: v
  } = (0, c.Cq)({
    location: "PresenceActivityStatus"
  }), {
    analyticsLocations: I
  } = (0, l.ZP)(), S = i.useCallback(() => {
    (0, p.A)({
      analyticsLocations: I,
      activityType: t.type,
      applicationId: t.application_id
    })
  }, [I, t.application_id, t.type]);
  if (u && d) return null;
  let {
    text: T,
    tooltip: A
  } = (0, _.Z)(t, y || v), C = O(t, b), N = d && !g && null != A;
  return (0, r.jsxs)(r.Fragment, {
    children: [!u && null != C && (0, r.jsx)(h.Z, {
      icon: C,
      tooltipText: N ? A : true,
      className: s,
      onTooltipShow: N ? S : true
    }), !d && (0, r.jsx)(m.Z, {
      variant: n,
      className: a,
      canTruncate: E,
      hideTooltip: g,
      children: T
    })]
  })
}

function I(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: i,
    iconClassName: a,
    hideIcon: s = false,
    hideText: l = false,
    hideTooltip: u = false,
    canTruncate: d = true
  } = e, {
    enabled: p
  } = o.c.useExperiment({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }, {
    autoTrackExposure: true
  }), {
    descriptiveTextEnabled: m
  } = (0, f.f)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    enableTopNavButton: E
  } = (0, c.Cq)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    text: b,
    tooltip: y
  } = (0, _.Z)(t, m || E), v = O(t, p), I = null != v && !s;
  return (0, r.jsx)(g.Z, {
    icon: I ? (0, r.jsx)(h.Z, {
      icon: v,
      className: a
    }) : true,
    text: b,
    textVariant: n,
    textClassName: i,
    hideTooltip: u,
    canTruncate: d,
    "aria-label": null != y ? y : "",
    hideText: l
  })
}

function S(e) {
  return (0, d.b)({
    location: "VoiceActivityStatusExperimentWrapper"
  }) ? (0, r.jsx)(I, y({}, e)) : (0, r.jsx)(v, y({}, e))
}