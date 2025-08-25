/** Chunk was on web.js **/
/** chunk id: 792258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk468194 = require("./468194.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk914788 = require("./914788.js"),
  Chunk981631 = require("./981631.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk987588 = require("./987588.js");
let m = [18, 18, 16, 16, 14, 12, 10];

function g(e) {
  var t;
  return null != (t = m[e.length - 1]) ? t : m[m.length - 1]
}
let E = e => {
  let {
    guildId: t
  } = e, n = (0, s.e7)([d.Z], () => d.Z.getGuild(t));
  if (true === n) return null;
  let i = n.features.has(f.oNc.VERIFIED) || n.features.has(f.oNc.PARTNERED),
    {
      name: E
    } = n,
    b = (0, u.EB)(n, 40, true),
    y = null,
    O = m[m.length - 1];
  return null == n.icon && null != E && (O = g(y = (0, a.Zg)(E))), (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsxs)("div", {
      style: {
        fontSize: O
      },
      children: [null != y ? (0, r.jsx)("div", {
        className: o()(h.childWrapper, h.acronym),
        "aria-hidden": true,
        children: y
      }) : null, null != b ? (0, r.jsx)(l.qEK, {
        src: b,
        size: l.EFr.SIZE_40,
        "aria-hidden": true
      }) : null]
    }), (0, r.jsxs)("div", {
      className: h.descriptors,
      children: [(0, r.jsxs)("div", {
        className: h.header,
        children: [i ? (0, r.jsx)(c.Z, {
          guild: n,
          tooltipPosition: "bottom",
          tooltipColor: l.ua7.Colors.PRIMARY,
          className: h.guildBadge
        }) : null, (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: E
        })]
      }), true !== n.approximateMemberCount ? (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: p.intl.format(_.default["5JmNgo"], {
          members: n.approximateMemberCount
        })
      }) : null]
    })]
  })
}