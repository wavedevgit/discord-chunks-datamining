/** Chunk was on web.js **/
/** chunk id: 65029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk28531 = require("./28531.jsx"),
  Chunk819758 = require("./819758.jsx"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk191581 = require("./191581.js");
let f = e => {
    let {
      emojiSubCategory: t
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(d.badgeLabel, t === c.t0.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge),
      children: [t === c.t0.TOP_GUILD_EMOJI ? (0, r.jsx)(s.Z, {
        foreground: d.newlyAddedBadgeIcon
      }) : (0, r.jsx)(l.Z, {
        foreground: d.newlyAddedBadgeIcon
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: t === c.t0.TOP_GUILD_EMOJI ? u.intl.string(u.t.TR2B4T) : u.intl.string(u.t["1aZ4V6"])
      })]
    })
  },
  _ = e => {
    let {
      className: t,
      graphicPrimary: n,
      graphicSecondary: i,
      titlePrimary: s,
      titleSecondary: l,
      isFavorite: _ = false,
      emojiSubCategory: p = c.t0.NONE
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(d.inspector, t),
      children: [(0, r.jsx)("div", {
        className: d.graphicPrimary,
        "aria-hidden": true,
        children: n
      }), (0, r.jsxs)("div", {
        className: d.textWrapper,
        children: [(0, r.jsxs)(o.Text, {
          className: d.titlePrimary,
          variant: "text-md/semibold",
          children: [_ ? (0, r.jsx)(o.r7p, {
            size: "custom",
            color: "currentColor",
            "aria-label": _ ? u.intl.formatToPlainString(u.t["+fdUkf"], {
              names: s
            }) : true,
            width: 15,
            height: 15,
            className: d.favorite
          }) : null, s]
        }), null != l && (0, r.jsx)(o.Text, {
          className: d.titleSecondary,
          variant: "text-xs/normal",
          children: l
        })]
      }), p === c.t0.NONE ? null != i && (0, r.jsx)("div", {
        className: d.graphicSecondary,
        "aria-hidden": true,
        children: i
      }) : (0, r.jsx)(f, {
        emojiSubCategory: p
      })]
    })
  }