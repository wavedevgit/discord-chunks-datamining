/** Chunk was on web.js **/
/** chunk id: 868781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk657707 = require("./657707.js"),
  Chunk456100 = require("./456100.js"),
  Chunk841784 = require("./841784.js"),
  Chunk906732 = require("./906732.js"),
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
  return (0, u.dS)(e) ? o.ewx : (0, s.Z)(e) ? t ? o.iWm : o.jje : e.type === E.IIU.PLAYING ? o.iWm : e.type === E.IIU.LISTENING ? o.RZG : e.type === E.IIU.WATCHING || e.type === E.IIU.STREAMING ? o.ARS : e.type === E.IIU.COMPETING ? o.iWm : null
};

function v(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: o,
    iconClassName: s,
    hideIcon: u = false,
    hideText: d = false,
    hideTooltip: g = false,
    canTruncate: E = true
  } = e, {
    enabled: b
  } = a.c.useExperiment({
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
  } = (0, l.ZP)(), T = i.useCallback(() => {
    (0, p.A)({
      analyticsLocations: I,
      activityType: t.type,
      applicationId: t.application_id
    })
  }, [I, t.application_id, t.type]);
  if (u && d) return null;
  let {
    text: S,
    tooltip: A
  } = (0, _.Z)(t, y || v), N = O(t, b), C = d && !g && null != A;
  return <r.Fragment>{!u && null != N && <h.Z icon={N} tooltipText={C ? A : true} className={s} onTooltipShow={C ? T : true} />}{!d && <m.Z variant={n} className={o} canTruncate={E} hideTooltip={g}>{S}</m.Z>}</r.Fragment>
}

function I(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: i,
    iconClassName: o,
    hideIcon: s = false,
    hideText: l = false,
    hideTooltip: u = false,
    canTruncate: d = true
  } = e, {
    enabled: p
  } = a.c.useExperiment({
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
  return <g.Z icon={I ? (0, r.jsx)(h.Z, {
      icon: v,
      className: o
    }) : true} text={b} textVariant={n} textClassName={i} hideTooltip={u} canTruncate={d} aria-label={null != y ? y : ""} hideText={l} />
}

function T(e) {
  return (0, d.b)({
    location: "VoiceActivityStatusExperimentWrapper"
  }) ? <I{...y({}, e)} /> : <v{...y({}, e)} />
}