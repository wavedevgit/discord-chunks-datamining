/** Chunk was on web.js **/
/** chunk id: 355971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk496885 = require("./496885.jsx"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let t, {
      color: n,
      size: f,
      forcedIconColor: p,
      className: _,
      iconClassName: h,
      tooltipText: m
    } = e,
    [g, E] = (0, a.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
    y = (0, l.rdh)(o.A.unsafe_rawColors.PRIMARY_300).hex(),
    b = (0, i.LX)(null != n ? n : y),
    O = (0, i.$k)(b, false, g ? E : null);
  return t = null != p ? p : .3 > (0, i.OK)(b) ? o.A.unsafe_rawColors.PRIMARY_630.css : o.A.unsafe_rawColors.WHITE.css, (0, r.jsx)(s.m, {
    text: null != m ? m : d.intl.string(d.t.T3PvV4),
    children: (0, r.jsx)(u.A, {
      className: _,
      color: O,
      size: f,
      children: (0, r.jsx)(l.Uzd, {
        size: "custom",
        color: t,
        height: f,
        width: f,
        className: h
      })
    })
  })
}