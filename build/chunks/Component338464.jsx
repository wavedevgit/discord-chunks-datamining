/** Chunk was on web.js **/
/** chunk id: 338464, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk711358 = require("./711358.jsx"),
  Chunk771104 = require("./771104.jsx"),
  Chunk732139 = require("./732139.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk365834 = require("./365834.js");
let f = e => {
    let {
      emojiSubCategory: t
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(d.KT, t === c.tm.TOP_GUILD_EMOJI ? d.S7 : d.lD),
      children: [t === c.tm.TOP_GUILD_EMOJI ? (0, r.jsx)(o.A, {
        foreground: d.Gb
      }) : (0, r.jsx)(l.A, {
        foreground: d.Gb
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: t === c.tm.TOP_GUILD_EMOJI ? u.intl.string(u.t.TR2B4T) : u.intl.string(u.t["1aZ4V6"])
      })]
    })
  },
  p = e => {
    let {
      className: t,
      graphicPrimary: n,
      graphicSecondary: i,
      titlePrimary: o,
      titleSecondary: l,
      isFavorite: p = false,
      emojiSubCategory: _ = c.tm.NONE
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(d.qV, t),
      children: [(0, r.jsx)("div", {
        className: d.FZ,
        "aria-hidden": true,
        children: n
      }), (0, r.jsxs)("div", {
        className: d.tC,
        children: [(0, r.jsxs)(s.Text, {
          className: d.jn,
          variant: "text-md/semibold",
          children: [p ? (0, r.jsx)(s.Gg5, {
            size: "custom",
            color: "currentColor",
            "aria-label": p ? u.intl.formatToPlainString(u.t["+fdUkf"], {
              names: o
            }) : true,
            width: 15,
            height: 15,
            className: d.BI
          }) : null, o]
        }), null != l && (0, r.jsx)(s.Text, {
          className: d.Fm,
          variant: "text-xs/normal",
          children: l
        })]
      }), _ === c.tm.NONE ? null != i && (0, r.jsx)("div", {
        className: d.vK,
        "aria-hidden": true,
        children: i
      }) : (0, r.jsx)(f, {
        emojiSubCategory: _
      })]
    })
  }