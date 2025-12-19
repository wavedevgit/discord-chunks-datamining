/** Chunk was on web.js **/
/** chunk id: 868781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk841784 = require("./841784.js"),
  Chunk482798 = require("./482798.js"),
  Chunk750154 = require("./750154.js"),
  Chunk802529 = require("./802529.js"),
  Chunk11133 = require("./11133.js"),
  Chunk473919 = require("./473919.jsx"),
  Chunk532657 = require("./532657.jsx"),
  Chunk981631 = require("./981631.js");
let p = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, s.dS)(e) ? i.ewx : (0, a.Z)(e) ? t ? i.iWm : i.jje : e.type === f.IIU.PLAYING ? i.iWm : e.type === f.IIU.LISTENING ? i.RZG : e.type === f.IIU.WATCHING || e.type === f.IIU.STREAMING ? i.ARS : e.type === f.IIU.COMPETING ? i.iWm : null
};

function _(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: i,
    iconClassName: a,
    hideIcon: s = false,
    hideText: f = false,
    hideTooltip: _ = false,
    canTruncate: m = true
  } = e, {
    descriptiveTextEnabled: h
  } = (0, l.f)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    enableTopNavButton: g
  } = (0, o.Cq)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    text: E,
    tooltip: b
  } = (0, c.Z)(t, h || g), y = p(t), O = null != y && !s;
  return (0, r.jsx)(d.Z, {
    icon: O ? (0, r.jsx)(u.Z, {
      icon: y,
      className: a
    }) : true,
    text: null != E ? E : "",
    textVariant: n,
    textClassName: i,
    hideTooltip: _,
    canTruncate: m,
    "aria-label": null != b ? b : "",
    hideText: f
  })
}