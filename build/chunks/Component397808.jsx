/** Chunk was on 9207 **/
/** chunk id: 397808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
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
let u = e => {
  let {
    guildId: t
  } = e, n = (0, l.bG)([o.A], () => o.A.getGuild(t));
  if (true === n) return null;
  let {
    name: u
  } = n, _ = (0, a.Iv)(n, 40, true), p = null, m = 10;
  return null == n.icon && null != u && (p = (0, i.oN)(u), m = (0, c.Y)(p)), (0, r.jsx)("div", {
    className: d.k,
    children: (0, r.jsxs)("div", {
      style: {
        fontSize: m
      },
      children: [null != p ? (0, r.jsx)("div", {
        className: d.X,
        "aria-hidden": true,
        children: p
      }) : null, null != _ ? (0, r.jsx)(s.euF, {
        src: _,
        size: s._3J.SIZE_40,
        "aria-hidden": true
      }) : null]
    })
  })
}