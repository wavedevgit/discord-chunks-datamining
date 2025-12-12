/** Chunk was on web.js **/
/** chunk id: 543651, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk823379 = require("./823379.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467826 = require("./467826.js");
let m = function(e) {
  let {
    createdAt: t,
    participantIds: n,
    applicationId: i,
    title: m,
    guildId: h,
    className: g
  } = e, E = (0, c.q)(i), b = (0, a.Wu)([u.default], () => {
    var e;
    return null != (e = n.map(e => u.default.getUser(e)).filter(f.lm)) ? e : []
  }), y = null == E ? true : E.name, O = null != t ? (0, d.Xf)(new Date(t)) : null, v = null == E ? true : E.getIconURL(32);
  if (null == t) return null;
  let S = null == m || "" === m;
  return (0, r.jsxs)("div", {
    className: o()(g, _.container),
    children: [(0, r.jsx)("div", {
      className: _.clipIcon,
      "aria-hidden": "true",
      children: null != v ? (0, r.jsx)("img", {
        src: v,
        alt: "",
        className: _.clipIconImage
      }) : (0, r.jsx)(l.pzj, {
        size: "sm",
        color: "currentColor"
      })
    }), (0, r.jsxs)("div", {
      className: _.clipTextInfo,
      children: [(0, r.jsx)(l.Text, {
        className: _.clipTitle,
        variant: "text-md/normal",
        color: S ? "text-subtle" : "text-default",
        children: S ? p.intl.string(p.t.Cyxddp) : m
      }), null != y && "" !== y && (0, r.jsx)(l.Text, {
        className: _.clipSubtitle,
        color: "text-subtle",
        variant: "text-sm/medium",
        children: y
      }), (0, r.jsx)(l.Text, {
        className: _.clipSubtitle,
        color: "text-subtle",
        variant: "text-sm/normal",
        children: O
      })]
    }), (0, r.jsx)("div", {
      className: _.clipAvatars,
      children: (0, r.jsx)(s.Z, {
        maxUsers: 4,
        users: b,
        guildId: h,
        size: l.EFr.SIZE_24,
        "aria-label": p.intl.string(p.t.WTozwe)
      })
    })]
  })
}