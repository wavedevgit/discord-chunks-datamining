/** Chunk was on web.js **/
/** chunk id: 397808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk23339 = require("./23339.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk260509 = require("./260509.js"),
  Chunk695515 = require("./695515.js"),
  Chunk254847 = require("./254847.jsx"),
  Chunk432882 = require("./432882.js");
let d = e => {
  let {
    guildId: t
  } = e, n = (0, a.bG)([l.A], () => l.A.getGuild(t));
  if (true === n) return null;
  let {
    name: d
  } = n, f = (0, o.Iv)(n, 40, true), p = null, _ = 10;
  return null == n.icon && null != d && (p = (0, i.oN)(d), _ = (0, c.Y)(p)), (0, r.jsx)("div", {
    className: u.k,
    children: (0, r.jsxs)("div", {
      style: {
        fontSize: _
      },
      children: [null != p ? (0, r.jsx)("div", {
        className: u.X,
        "aria-hidden": true,
        children: p
      }) : null, null != f ? (0, r.jsx)(s.euF, {
        src: f,
        size: s._3J.SIZE_40,
        "aria-hidden": true
      }) : null]
    })
  })
}