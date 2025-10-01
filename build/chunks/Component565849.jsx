/** Chunk was on 29679 **/
/** chunk id: 565849, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk937222 = require("./937222.jsx"),
  Chunk269464 = require("./269464.jsx"),
  Chunk295051 = require("./295051.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk479447 = require("./479447.js");

function m(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e;
  return (0, r.jsxs)(i.hjN, {
    className: u.container,
    children: [(0, r.jsxs)("div", {
      className: u.column,
      children: [(0, r.jsxs)(i.vwX, {
        className: u.title,
        children: [d.intl.string(d.t["0r0AzM"]), (0, r.jsx)(o.zA, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.string(d.t.UfqmIS)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.format(d.t.vBcWUl, {
          articleURL: l.Z.getArticleURL(c.BhN.GUILD_BANNER_SPLASH)
        })
      }), (0, r.jsx)(s.F, {
        guild: t,
        canManageGuild: n,
        buttonClassName: u.button
      })]
    }), (0, r.jsx)("div", {
      className: u.column,
      children: (0, r.jsx)(a.O, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}