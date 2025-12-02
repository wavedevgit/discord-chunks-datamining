/** Chunk was on 384 **/
/** chunk id: 787612, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk295051 = require("./295051.jsx"),
  Chunk273282 = require("./273282.jsx"),
  Chunk194774 = require("./194774.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk64929 = require("./64929.js");

function g(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsxs)("div", {
      className: u.column,
      children: [(0, r.jsxs)(i.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        className: u.title,
        children: [d.intl.string(d.t.tzGY0q), (0, r.jsx)(a.hH, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.string(d.t.F7bbrh)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: u.text,
        children: d.intl.format(d.t.ZYA9PV, {
          articleURL: l.Z.getArticleURL(c.BhN.GUILD_INVITE_SPLASH)
        })
      }), (0, r.jsx)(s.c, {
        guild: t,
        canManageGuild: n,
        buttonClassName: u.button
      })]
    }), (0, r.jsx)("div", {
      className: u.column,
      children: (0, r.jsx)(o.h, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}