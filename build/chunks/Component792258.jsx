/** Chunk was on web.js **/
/** chunk id: 792258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  o: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk914788 = require("./914788.js"),
  Chunk322192 = require("./322192.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk412297 = require("./412297.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk537731 = require("./537731.js");
let h = [18, 18, 16, 16, 14, 12, 10];

function m(e) {
  var t;
  return null != (t = h[e.length - 1]) ? t : h[h.length - 1]
}
let g = e => {
  let {
    guildId: t,
    className: n,
    customSubtext: i
  } = e, h = (0, o.e7)([c.Z], () => c.Z.getGuild(t));
  if (true === h) return null;
  let m = h.features.has(d.oNc.VERIFIED) || h.features.has(d.oNc.PARTNERED),
    {
      name: g
    } = h;
  return (0, r.jsxs)("div", {
    className: a()(p.container, n),
    children: [(0, r.jsx)(u.Z, {
      guildId: t
    }), (0, r.jsxs)("div", {
      className: p.descriptors,
      children: [(0, r.jsxs)("div", {
        className: p.header,
        children: [m ? (0, r.jsx)(l.Z, {
          guild: h,
          tooltipPosition: "bottom",
          tooltipColor: s.ua7.Colors.PRIMARY,
          className: p.guildBadge
        }) : null, (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: g
        })]
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: null != i ? i : true !== h.approximateMemberCount ? _.intl.format(f.default["5JmNgo"], {
          members: h.approximateMemberCount
        }) : null
      })]
    })]
  })
}