/** Chunk was on web.js **/
/** chunk id: 753194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let t, {
      color: n,
      size: f,
      forcedIconColor: p,
      className: _,
      iconClassName: m,
      tooltipText: h
    } = e,
    [g, E] = (0, a.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
    b = (0, l.dQu)(o.Z.unsafe_rawColors.PRIMARY_300).hex(),
    y = (0, i._i)(null != n ? n : b),
    O = (0, i.ho)(y, false, g ? E : null);
  return t = null != p ? p : .3 > (0, i.Bd)(y) ? o.Z.unsafe_rawColors.PRIMARY_630.css : o.Z.unsafe_rawColors.WHITE.css, (0, r.jsx)(s.u, {
    text: null != h ? h : d.intl.string(d.t.T3PvV4),
    children: (0, r.jsx)(u.Z, {
      className: _,
      color: O,
      size: f,
      children: (0, r.jsx)(l.kmB, {
        size: "custom",
        color: t,
        height: f,
        width: f,
        className: m
      })
    })
  })
}