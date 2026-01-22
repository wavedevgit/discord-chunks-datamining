/** Chunk was on 47841 **/
/** chunk id: 988921, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk249202 = require("./249202.jsx"),
  Chunk445567 = require("./445567.jsx"),
  Chunk627011 = require("./627011.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk815873 = require("./815873.js");

function f(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsxs)("div", {
      className: u.fi,
      children: [(0, r.jsxs)(i.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        className: u.DD,
        children: [d.intl.string(d.t["0r0AzF"]), (0, r.jsx)(c.B6, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: u.Qq,
        children: d.intl.string(d.t.UfqmIb)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        className: u.Qq,
        children: d.intl.format(d.t.vBcWUv, {
          articleURL: l.A.getArticleURL(o.MVz.GUILD_BANNER_SPLASH)
        })
      }), (0, r.jsx)(s.E, {
        guild: t,
        canManageGuild: n,
        buttonClassName: u.x6
      })]
    }), (0, r.jsx)("div", {
      className: u.fi,
      children: (0, r.jsx)(a.B, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}