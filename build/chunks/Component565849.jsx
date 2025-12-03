/** Chunk was on 384 **/
/** chunk id: 565849, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk937222 = require("./937222.jsx"),
  Chunk269464 = require("./269464.jsx"),
  Chunk295051 = require("./295051.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk64929 = require("./64929.js");

function g(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.column,
      children: [(0, r.jsxs)(i.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        className: d.title,
        children: [u.intl.string(u.t["0r0AzF"]), (0, r.jsx)(o.zA, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: d.text,
        children: u.intl.string(u.t.UfqmIb)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: d.text,
        children: u.intl.format(u.t.vBcWUv, {
          articleURL: l.Z.getArticleURL(c.BhN.GUILD_BANNER_SPLASH)
        })
      }), (0, r.jsx)(a.F, {
        guild: t,
        canManageGuild: n,
        buttonClassName: d.button
      })]
    }), (0, r.jsx)("div", {
      className: d.column,
      children: (0, r.jsx)(s.O, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}