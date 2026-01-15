/** Chunk was on web.js **/
/** chunk id: 329520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk473919 = require("./473919.jsx"),
  Chunk532657 = require("./532657.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    stream: t,
    game: n,
    textVariant: d,
    textClassName: f,
    iconClassName: p,
    hideIcon: _ = false,
    hideText: h = false,
    hideTooltip: m = false,
    canTruncate: g = true,
    showChannelName: E = false
  } = e, b = (0, i.e7)([s.Z], () => s.Z.getChannel(t.channelId)), y = (0, o.ZP)(b), O = (null == n ? true : n.name) === "" ? null : null == n ? true : n.name, v = null != O ? O : u.intl.string(u.t.eXan7B), S = null != y ? "".concat(v, " (").concat(y, ")") : v, I = E ? S : v, T = S;
  return (0, r.jsx)(c.Z, {
    icon: _ ? true : (0, r.jsx)(l.Z, {
      icon: a.ARS,
      className: p
    }),
    text: I,
    tooltipText: m ? true : S,
    textVariant: d,
    className: f,
    canTruncate: g,
    hideTooltip: m,
    "aria-label": T,
    hideText: h
  })
}