/** Chunk was on web.js **/
/** chunk id: 835072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  f: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk765379 = require("./765379.js"),
  Chunk82149 = require("./82149.js"),
  Chunk412242 = require("./412242.js"),
  Chunk566903 = require("./566903.js"),
  Chunk864436 = require("./864436.jsx"),
  Chunk200041 = require("./200041.jsx"),
  Chunk652215 = require("./652215.js");
let f = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, o.Cy)(e) ? i.StageIcon : (0, a.A)(e) ? t ? i.GameControllerIcon : i.AppsIcon : e.type === d.$pd.PLAYING ? i.GameControllerIcon : e.type === d.$pd.LISTENING ? i.MusicIcon : e.type === d.$pd.WATCHING || e.type === d.$pd.STREAMING ? i.TvIcon : e.type === d.$pd.COMPETING ? i.GameControllerIcon : null
};

function p(e) {
  let {
    activity: t,
    textVariant: n,
    textClassName: i,
    iconClassName: a,
    hideIcon: o = false,
    hideText: d = false,
    hideTooltip: p = false,
    canTruncate: _ = true
  } = e, {
    descriptiveTextEnabled: h
  } = (0, s.n)({
    location: "PresenceActivityStatusWithCombinedTooltip"
  }), {
    text: m,
    tooltip: g
  } = (0, l.A)(t, h), E = f(t), y = null != E && !o;
  return (0, r.jsx)(u.A, {
    icon: y ? (0, r.jsx)(c.A, {
      icon: E,
      className: a
    }) : true,
    text: null != m ? m : "",
    textVariant: n,
    textClassName: i,
    hideTooltip: p,
    canTruncate: _,
    "aria-label": null != g ? g : "",
    hideText: d
  })
}