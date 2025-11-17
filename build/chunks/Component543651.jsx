/** Chunk was on web.js **/
/** chunk id: 543651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467826 = require("./467826.js");
let h = function(e) {
  let {
    createdAt: t,
    participantIds: n,
    applicationId: i,
    title: h,
    guildId: m,
    className: g
  } = e, E = (0, c.q)(i), b = (0, o.Wu)([u.default], () => {
    var e;
    return null != (e = n.map(e => u.default.getUser(e)).filter(f.lm)) ? e : []
  }), y = null == E ? true : E.name, O = null != t ? (0, d.Xf)(new Date(t)) : null, v = null == E ? true : E.getIconURL(32);
  if (null == t) return null;
  let I = null == h || "" === h;
  return (0, r.jsxs)("div", {
    className: a()(g, p.container),
    children: [(0, r.jsx)("div", {
      className: p.clipIcon,
      "aria-hidden": "true",
      children: null != v ? (0, r.jsx)("img", {
        src: v,
        alt: "",
        className: p.clipIconImage
      }) : (0, r.jsx)(l.pzj, {
        size: "sm",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: p.clipTextInfo,
      children: [(0, r.jsx)(l.Text, {
        className: p.clipTitle,
        variant: "text-md/normal",
        color: I ? "text-secondary" : "text-default",
        children: I ? _.intl.string(_.t.Cyxddp) : h
      }), null != y && "" !== y && (0, r.jsx)(l.Text, {
        className: p.clipSubtitle,
        color: "text-secondary",
        variant: "text-sm/medium",
        children: y
      }), (0, r.jsx)(l.Text, {
        className: p.clipSubtitle,
        color: "text-secondary",
        variant: "text-sm/normal",
        children: O
      })]
    }), (0, r.jsx)("div", {
      className: p.clipAvatars,
      children: (0, r.jsx)(s.Z, {
        maxUsers: 4,
        users: b,
        guildId: m,
        size: l.EFr.SIZE_24,
        "aria-label": _.intl.string(_.t.WTozwe)
      })
    })]
  })
}