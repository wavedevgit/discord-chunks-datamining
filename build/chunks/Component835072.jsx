/** Chunk was on web.js **/
/** chunk id: 835072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk765379 = require("./765379.js"),
  Chunk126904 = require("./126904.js"),
  Chunk82149 = require("./82149.js"),
  Chunk412242 = require("./412242.js"),
  Chunk566903 = require("./566903.js"),
  Chunk864436 = require("./864436.jsx"),
  Chunk200041 = require("./200041.jsx"),
  Chunk652215 = require("./652215.js");
let p = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, o.Cy)(e) ? i.StageIcon : (0, a.A)(e) ? t ? i.GameControllerIcon : i.AppsIcon : e.type === f.$pd.PLAYING ? i.GameControllerIcon : e.type === f.$pd.LISTENING ? i.MusicIcon : e.type === f.$pd.WATCHING || e.type === f.$pd.STREAMING ? i.TvIcon : e.type === f.$pd.COMPETING ? i.GameControllerIcon : null
};

function _(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: i,
    iconClassName: a,
    hideIcon: o = false,
    hideText: f = false,
    hideTooltip: _ = false,
    canTruncate: h = true
  } = e, {
    descriptiveTextEnabled: m
  } = (0, l.n)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    enableTopNavButton: g
  } = (0, s.tR)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    text: E,
    tooltip: y
  } = (0, c.A)(t, m || g), b = p(t), O = null != b && !o;
  return (0, r.jsx)(d.A, {
    icon: O ? (0, r.jsx)(u.A, {
      icon: b,
      className: a
    }) : true,
    text: null != E ? E : "",
    textVariant: n,
    textClassName: i,
    hideTooltip: _,
    canTruncate: h,
    "aria-label": null != y ? y : "",
    hideText: f
  })
}